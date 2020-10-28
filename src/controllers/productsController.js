/* eslint-disable class-methods-use-this */
import models from '../models';

class ProductsController {
    getAllProducts(req, res) {
        models.Product.findAll()
        .then(products => res.status(200).send({
          success: 'true',
          message: 'Products retrieved successfully',
          data:products,
        }));
      }

  getProduct(req, res) {
  const id = parseInt(req.params.id, 10);
  models.Product.findByPk(id)
  .then((product) => {
    if (product) {
      return res.status(200).send({
        success: 'true',
        message: 'Product retrieved successfully',
        data:product,
      });
    }
    return res.status(404).send({
      success: 'false',
      message: 'Product does not exist',
    });
  });
}

  createProduct(req, res) {
    if (!req.body.name) {
        return res.status(400).send({
            success: 'false',
            message: 'Name is required',
        });
    }
    if (!req.body.description) {
        return res.status(400).send({
        success: 'false',
        message: 'Descriotion is required',
        });
    }
    if (!req.body.price) {
        return res.status(400).send({
        success: 'false',
        message: 'Price is required',
        });
    }
    if (!req.body.categoryId) {
      return res.status(400).send({
      success: 'false',
      message: 'At least one category must be given',
      });
  }
  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    categoryId: req.body.categoryId,
  };
  models.Product.create(product).then((product) => {
    return res.status(201).send({
       success: 'true',
       message: 'Product added successfully',
       data:product,
     });
  });
  }

  updateProduct(req, res) {
    const id = parseInt(req.params.id, 10);
    models.Product.findByPk(id)
    .then((product) => {
      if (product) {
        Product.update(req.body)
        .then((result) =>{
          // return result.dataValues
          return res.status(200).send({
            success: 'true',
            message: 'Product updated successfully',
            data: result.dataValues
          });
        })
      }else{
        return res.status(404).send({
          success: 'false',
          message: 'Product does not exist',
         
        });
      }
      
    });
  }

  deleteProduct(req, res) {
    const id = parseInt(req.params.id, 10);
    models.Product.findByPk(id)
    .then((product) => {
      if (product) {
        product.destroy(req.body)
        .then((result) =>{
          return res.status(200).send({
            success: 'true',
            message: 'Product deleted successfully',
          });
        })
      }else{
        return res.status(404).send({
          success: 'false',
          message: 'Product does not exist',
         
        });
      }
      
    });
  }
}

const productController = new ProductsController();
export default productController;
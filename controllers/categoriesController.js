/* eslint-disable class-methods-use-this */
import models from '../models';

class CategoriesController {
    getAllCategories(req, res) {
        models.Category.findAll()
        .then(categories => res.status(200).send({
          success: 'true',
          message: 'Categories retrieved successfully',
          data: categories,
        }));
      }

  getCategory(req, res) {
  const id = parseInt(req.params.id, 10);
  models.Category.findByPk(id)
  .then((category) => {
    if (category) {
      return res.status(200).send({
        success: 'true',
        message: 'Category retrieved successfully',
        data: category,
      });
    }
    return res.status(404).send({
      success: 'false',
      message: 'Category does not exist',
    });
  });
}

  createCategory(req, res) {
    if (!req.body.name) {
        return res.status(400).send({
            success: 'false',
            message: 'Name is required',
        });
    }

  const category = {
    name: req.body.name,
  };
  models.Category.create(category).then((category) => {
    return res.status(201).send({
       success: 'true',
       message: 'Category added successfully',
       data: category,
     });
  });
  }

  updateCategory(req, res) {
    const id = parseInt(req.params.id, 10);
    models.Category.findByPk(id)
    .then((category) => {
      if (category) {
        category.update(req.body)
        .then((result) =>{
          // return result.dataValues
          return res.status(200).send({
            success: 'true',
            message: 'Category updated successfully',
            data: result.dataValues
          });
        })
      }else{
        return res.status(404).send({
          success: 'false',
          message: 'Category does not exist',
         
        });
      }
      
    });
  }
  deleteCategory(req, res) {
    const id = parseInt(req.params.id, 10);
    models.Category.findByPk(id)
    .then((category) => {
      if (category) {
        category.destroy(req.body)
        .then((result) =>{
          return res.status(200).send({
            success: 'true',
            message: 'Category deleted successfully',
          });
        })
      }else{
        return res.status(404).send({
          success: 'false',
          message: 'Category does not exist',
         
        });
      }
      
    });
  }
}

const categoryController = new CategoriesController();
export default categoryController;
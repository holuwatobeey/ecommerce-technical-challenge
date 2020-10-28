import express from 'express';
import ProductController from '../controllers/productsController';
import CategoryController from '../controllers/categoriesController';
import UserController from '../controllers/usersController';
import checkValidToken from '../middlewares/checkValidToken'
import isAdmin from '../middlewares/isAdmin';

const router = express.Router();

router.post('/api/v1/users/login', UserController.signIn);
router.post('/api/v1/users/register', UserController.signUp);


router.get('/api/v1/products', checkValidToken, ProductController.getAllProducts);
router.get('/api/v1/products/:id', checkValidToken, ProductController.getProduct);
router.post('/api/v1/products', isAdmin, ProductController.createProduct);
router.put('/api/v1/products/:id', isAdmin, ProductController.updateProduct);
router.delete('/api/v1/products/:id', checkValidToken, ProductController.deleteProduct);

router.get('/api/v1/categories', checkValidToken, CategoryController.getAllCategories);
router.get('/api/v1/categories/:id', checkValidToken, CategoryController.getCategory);
router.post('/api/v1/categories', isAdmin, CategoryController.createCategory);
router.put('/api/v1/categories/:id', isAdmin, CategoryController.updateCategory);
router.delete('/api/v1/categories/:id', CategoryController.deleteCategory);

export default router;
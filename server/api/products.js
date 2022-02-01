import express from 'express' ;
import { getProducts, getProduct, createProduct} from '../controllers/products.js';

const  router  =  express.Router();
//http://localhost:5000/api/products
router.get('/', getProducts);
router.get('/:${id}', getProduct);
router.post('/', createProduct);

export default router;
 
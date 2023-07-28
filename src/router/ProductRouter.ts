import {Router} from "express";
import productController from "../controller/ProductController";
import {auth} from "../middleware/jwt";

const productRouter = Router();

// productRouter.use(auth)
productRouter.get('', productController.findAll);
productRouter.get('/:id', productController.findById);
productRouter.post('', productController.add);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.delete);
productRouter.get('/priceASC', productController.priceASC);
productRouter.get('/priceDESC', productController.priceDESC);

export default productRouter;

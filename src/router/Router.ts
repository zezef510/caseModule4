import {Router} from "express";
import productRouter from "./ProductRouter";
import {userRouter} from "./userRouter";

const router = Router();
router.use('/products', productRouter);
router.use('/user', userRouter);
export default router;

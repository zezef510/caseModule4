import OrderService from "../service/orderService";

class OrderController{
    private orderService;
    constructor() {
        this.orderService = OrderService;
    }
    add = async (req,res)=>{
        let data = await this.orderService.addCart(req.body)
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.orderService.deleteCart(req.params.id);
        res.json(data)
    }
    getOrderByUserId = async (req,res)=>{
        let data = await this.orderService.findAllCartByUserId(req.params.id);
        res.json(data)
    }

}
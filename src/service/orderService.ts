import {AppDataSource} from "../data-source";
import {Order} from "../entity/Order";

class OrderService {
    private repository = AppDataSource.getRepository(Order);
    findAllCartByUserId = async (userId)=>{
        return await this.repository.find({
            where:{
                id:userId
            }
        })
    }
    addCart = async (data)=>{
        return await this.repository.save(data);
    }
    deleteCart = async (id)=>{
        return await this.repository.delete(id)
    }


}
export default new OrderService();
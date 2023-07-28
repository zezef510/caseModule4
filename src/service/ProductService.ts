import {AppDataSource} from "../data-source";
import {Product} from "../entity/Product";
import {Service} from "./Service";
import {Like} from "typeorm";

class ProductService implements Service<Product> {
    private repository = AppDataSource.getRepository(Product);

    findAll = async () => {
        return await this.repository.find({
            relations: {
                User: true
            }
        });
    }

    add = async (data) => {
        return await this.repository.save(data);
    }

    delete = async (id) => {
        return await this.repository.delete(id);
    }
    update = async (id, data) => {
        return await this.repository.update(id, data);
    }

    findById = async (id) => {
        return await this.repository.find({
            where: {
                id: id
            }
        })
    }
    findByName = async (name)=>{
        console.log(name)
        return await this.repository.find({
            relations:{
                User:true
            },
            where : {
                nameProduct : Like(`%${name}%`)
            }
        })
    }
    priceASC = async ()=>{
        let list = await this.repository.find({
            order:{price:"ASC"}
        })
        return list
    }
    priceDESC = async ()=>{
        let list = await this.repository.find({
            order:{price:"DESC"}
        })
        return list
    }
}

export default new ProductService();

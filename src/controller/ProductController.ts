import {Request, Response} from "express";
import productService from "../service/ProductService";

class ProductController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = async (req, res) => {
        let list;
        if (req.query.name) {
            list = await this.productService.findByName(req.query.name)
        }
        else if(req.query.price){
            list = await this.productService.sortPrice(req.query.price)
        }
        else {
            list = await this.productService.findAll()
        }
        res.json(list)
    }
    add = async (req, res) => {
        let data = await this.productService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await this.productService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.productService.delete(req.params.id);
        console.log(data)
        res.json(data)
    }
    findById = async (req, res) => {
        let data = await this.productService.findById(req.params.id);
        res.json(data)
    }
    findByName = async (req, res) => {
        let data = await this.productService.findByName(req.query.name);
        res.json(data)
    }


}

export default new ProductController();

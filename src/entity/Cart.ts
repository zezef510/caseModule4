import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Product} from "./Product";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "int"})
    totalPrice : number

    @Column({type:"int"})
    quantity : number


    @ManyToOne(() => User, (User) => User.id)
    User

    @ManyToOne(() => Product, (Product) => Product.id)
    Product

}

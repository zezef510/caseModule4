import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    nameProduct: string;

    @Column({type: "varchar", length: 255})
    detail: string;

    @Column({type: "varchar", length: 255})
    image: string;

    @Column({type: "int"})
    price: number;

    @Column({type: "int"})
    quantity: number;


    @ManyToOne(() => User, (User) => User.id)
    User : User[]
}

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    username: string;
    @Column({type: 'varchar'})
    password: string

    @Column({type: 'varchar'})
    email : string

    @Column({type: 'varchar'})
    name : string

    @Column({type: 'varchar'})
    address : string

    @Column({type: 'varchar'})
    phone : string



}

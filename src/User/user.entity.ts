import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    Username:string;

    @Column()
    Password:string;

    @Column() 
    FirstName: string;

    @Column()
    LastName:string;

    @Column() 
    DoB: Date;
}
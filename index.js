import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './api/models/user.js';
import Book from './api/models/book.js';

dotenv.config();

mongoose.connect(process.env.DB_URI,
async ()=>{
    console.log('conexion satisfactorio 🥳');

    const user = await User.create({
        
        address: 'Direccion prueba',
        birthday: new Date(),
        contacts: ['Pedrito', 'Jorge'],
        email: 'pedro@prueba.com',
        lastname:'perez',
        name: 'Juan',
        password: '123',
        phone: '320943',
        role: 'cliente',

    })


    // console.log(user);
//el find me envia un arreglo de objetos
  const users = await  User.find({
        name:'Juan'
    });
    // console.log(users);

    const usersUpdate = await User.updateMany({
        name: 'Juan',
        lastname:'perez',
    },
    {
        role:'Admin',
    })
    // console.log(usersUpdate)

    const userDelet = await User.deleteOne({
        name:'Juan',
    });
    // console.log(userDelet)
//   BOOK CRUD
//CREATE
    const bookCreate = await Book.create({
        title:'la fuerza de sheccid',
        editorial: 'marvel',
        edition: 1,
        pageNumber: 19,
        isbn:'1234',
    })
    console.log(bookCreate)

    const bookFind = await Book.find({
        title:'la fuerza de sheccid'
    })
    // console.log(bookFind)
    const bookUpdate = await Book.updateMany({
        title:'la fuerza de sheccid'
    },
    {
        edition:2
    })
    console.log(bookUpdate)
    
})
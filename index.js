import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './api/models/user.js';

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


    console.log(user);
    
})
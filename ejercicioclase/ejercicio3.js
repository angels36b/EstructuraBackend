import connect from './database.js';
import Restaurant from '../api/models/Restaurant.js';

connect();
// 3. Los primeros 5 restaurantes de la colonia bronx buscar
async function run (){
const restaurants = await Restaurant.find({borough: 'Bronx'}).limit(5);

    console.log(restaurants)
}

run()
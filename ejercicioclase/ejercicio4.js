import connect from './database.js';
import Restaurant from '../api/models/Restaurant.js';

connect();

// buscar 4. LOs siguientes 5 restaurantes de la ciudad 'bronx'

async function run (){
const restaurants = await Restaurant.find({borough: 'Bronx'}).limit(5);

    console.log(restaurants)
}

run()
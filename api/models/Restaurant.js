import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    addrress: {
        building: String,
        coord:[Number],
        street: String,
        zipcode: String,
    },
    borough: String,
    cuisine: String,
    grades: [{
        date:Date,
        grade: String,
        score:Number
    }],
    name: String,
    restaurant_id: String,
})

export default mongoose.model('Restaurant', restaurantSchema)
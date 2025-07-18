import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js';


const connectDB = async () => {
    try{
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\N MONGOdb CONNECTED!! DB HOST:' ${connectionInstance.connection.host}`)
    } catch(err) {
        console.log("Error:", err)
    }
}

export default connectDB;
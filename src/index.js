import dotenv from 'dotenv'
import {app} from './app.js'
// require('dotenv').config({path: './env'})
import connectDB from './db/db.js';

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080, ()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongo db Connection failed!!!",err)
})



// const app=express();

// (async ()=>{

//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("Error",(err) => {
//             console.log("Err",err);
//             throw err;
//         })
//     app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//     })

//     } catch(err){
//         console.log("Error:",err);
//         throw err
//     }

// })()
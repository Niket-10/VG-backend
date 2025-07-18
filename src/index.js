import dotenv from 'dotenv'

import connectDB from './db/db.js';

dotenv.configDotenv({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8080, ()=>{
        console.log(`0 server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db Connection failed!!!",err)
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
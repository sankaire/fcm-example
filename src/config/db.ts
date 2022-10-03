import  mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const mongoURI:any = process.env.MONGO_URI

export  function connectToDb(){
    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if(err){
            console.log(err.message)
            close()
        }
        else {
            console.log('db connected')
        }
   })
}
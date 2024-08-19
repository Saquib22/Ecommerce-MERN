import mongoose from "mongoose";

// import colors, { bgRed } from 'colors';

// const connectDB = async() =>{
//     try{
//         const conn = await mongoose.connect(process.env.MONGO_URL);
//         console.log(`MonogoDb connected successfully ${conn.connection.host}`);
//     }
//     catch(error){
//         console.log(`Error in MongoDB ${error}`);
//     }
// }
// export default connectDB
const MongoDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongodb connected successfully ${conn.connection.host}`);
    }
    catch(error){
        console.log(error);
    }
}
export default MongoDB
import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    name:{
        type: String,
        required : true,
        trime:true
    },
    email:{
        type :String,
        required :true,
        unique: true
    },
    password:{
        type:String,
        required : true,
    },
    phone:{
        type:String,
        required : true
    },
    address: {
        type: String,
        required :true
    },
    role:{
        type: Number,
        default : 0
    }
},{timeStamps:true})
export default mongoose.model('users',userSchema)
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    mame:{
        type:String,
        required:true,
        min:3,
        max:35,
    },
    email:{
type:String,
required:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }
},{
    timestamps:true,
}
);

const user = mongoose.model("user" , userSchema)
export default user;

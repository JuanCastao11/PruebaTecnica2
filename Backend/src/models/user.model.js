import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    }  
});

export default mongoose.model('user',userSchema);
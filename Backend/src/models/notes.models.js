import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    rol:{
        type:String,
        require:true 
    },
    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})

export default mongoose.model('notes',notesSchema);
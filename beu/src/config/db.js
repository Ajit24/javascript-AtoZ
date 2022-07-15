const mongoose=require("mongoose")

module.exports=()=>{
    return mongoose.connect("mongodb+srv://aj:12345@cluster0.wxo7a.mongodb.net/aj?retryWrites=true&w=majority")
}
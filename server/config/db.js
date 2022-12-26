import mongoose  from "mongoose"
mongoose.set("strictQuery", false);


export default  mongoose.connect("mongodb+srv://Shaik_Shakeer:Sshakeer7396@cluster0.muqcwcm.mongodb.net/?retryWrites=true&w=majority")

mongoose.connection.on("connected",()=>{
    console.log("connected to database successfully,");
})

mongoose.connection.on("error",(err)=>{
    console.log("Error while connection to database:" + err );
})

mongoose.connection.on("disconnected",(err)=>{
    console.log("Mongodb connection disconnected");
})
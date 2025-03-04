import mongoose from "mongoose";

export const connectDB = async () => {
    try{
      await mongoose.connect(process.env.MONGO_URI);
      console.log("server is connected to mongodb")
    }
    catch(error){
      console.error("database is not connected", error);
      process.exit(1);
    }
};
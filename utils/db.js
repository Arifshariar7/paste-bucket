import mongoose from "mongoose";

let isConnected = false;
const uri = "mongodb+srv://Arif:6d4xHrDVMb7BrteV@cluster0.3tw6k.mongodb.net/Arif?retryWrites=true&w=majority";
const localuri="mongodb://localhost/paste-buckets"

export const connect = async () => {
  if (!isConnected) {
    await mongoose.connect(localuri, {

      useNewUrlParser: true, 
      
      useUnifiedTopology: true 
      
      }, err => {
      if(err) throw err;
      console.log('Connected to MongoDB!!!')
      });
    isConnected = true;
  }
};

import mongoose from "mongoose";

let isConnected = false;
const uri = "mongodb+srv://Arif:UDXCW3AvEo5NEJVO@cluster0.3tw6k.mongodb.net/paste-buckets?retryWrites=true&w=majority";
const localuri="mongodb://localhost/paste-buckets"

export const connect = async () => {
  if (!isConnected) {
    await mongoose.connect(uri, {

      useNewUrlParser: true, 
      
      useUnifiedTopology: true 
      
      }, err => {
      if(err) throw err;
      console.log('Connected to MongoDB!!!')
      });
    isConnected = true;
  }
};

import mongoose from "mongoose";

let isConnected = false;
// const uri = "mongodb+srv://Arif:<password>@cluster0.3tw6k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const localUri="mongodb://localhost/paste-buckets"
export const connect = async () => {
  if (!isConnected) {
    await mongoose.connect(
      localUri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    isConnected = true;
  }
};
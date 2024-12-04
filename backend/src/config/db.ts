import colors from 'colors'
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    const url = `${connection.host}:${connection.port}`;
    console.log(colors.cyan.bold(`MondoDB conectado en ${url}`) );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;


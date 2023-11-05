import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const conncetDB = async()=>{
try {
    const connectInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB Host :
    ${connectInstance.connection.host}
    `);
} catch (error) {
    console.log("MONGODB Connection Error ",error);
    process.exit(1)
}
}

export default conncetDB
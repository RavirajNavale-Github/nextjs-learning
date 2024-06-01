import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB;
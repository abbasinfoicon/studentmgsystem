import mongoose from "mongoose";

const connectDB = async (DB_URL) => {
    try {
        const DB_OPTION = {
            dbName: 'student'
        }
        await mongoose.connect(DB_URL, DB_OPTION);
        console.log('Connection Start!!')
    } catch (error) {
        console.log('Connection Failed......!');
    }
}

export default connectDB;
import mongoose from "mongoose";

const dbConnection = async () => {
 
    const DB_URI = "mongodb+srv://user:jaydip123@job-portal.exyzgrb.mongodb.net/"; 

    try{
        await mongoose.connect(DB_URI, { useUnifiedTopology: true });
        console.log('Database connected successflly');
    } catch(err) {
        console.log("error while connecting to database", err.message);
    }
}

export default dbConnection;
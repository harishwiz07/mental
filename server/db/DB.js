import mongoose from "mongoose";

// MongoDB Connection
export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://h100xdevs_db_user:vFUsgN6HARB9UVYQ@cluster0.tnrl11t.mongodb.net/?appName=Cluster0"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed: ", error);
    process.exit(1);
  }
};
connectDB();

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);

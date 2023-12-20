import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    savedRecipes : [{type: mongoose.Schema.Types.ObjectId, ref: "recipes"}]
});

// "users" is our collections name 
// to make calls to this secific collections we need to "export"
export const UserModel = mongoose.model("users", UserSchema);
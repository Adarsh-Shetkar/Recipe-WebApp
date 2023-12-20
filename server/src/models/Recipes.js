import mongoose, { mongo } from "mongoose";

const RecipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: [{ type: String, required: true }],
    instructions: { type: String, required: true },
    imageUrl: { type: String, required: true },
    cookingTime: { type: Number, required: true },
    userOwner: {
        type: mongoose.Schema.Types.ObjectId,
        refs: "users", required: true,
    },
});

// "users" is our collections name 
// to make calls to this secific collections we need to "export"
export const RecipeModel = mongoose.model("recipes", RecipeSchema);
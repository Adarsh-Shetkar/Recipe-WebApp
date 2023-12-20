// setup express server here 

import dotenv from 'dotenv'
dotenv.config()
import express from "express"; // helps to server frontend with apis
import cors from "cors"; // helps to setup the routes between frontend and backend
import mongoose from "mongoose"; // for the database write queries and communicates with the database

import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json()); // apply middlewares "express.json" 
// because every data coming from frontend is converted to json  

app.use(cors());

const database = process.env.DATABASE_URL

// below is our endpoint
app.use("/auth", userRouter)
app.use("/recipes", recipesRouter);

mongoose.connect(database,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.listen(3001 || process.env.PORT, () => console.log("SERVER STARTED"));
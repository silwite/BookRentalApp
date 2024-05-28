import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { getBook } from "./controller/book.controller.js";



const app = express();
const router = express.Router();
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connection to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}
router.get("/", getBook);

app.use("/book",router);





app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
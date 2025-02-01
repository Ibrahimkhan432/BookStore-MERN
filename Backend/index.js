import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

app.use(express.json());
// connect to mongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected mongo");
} catch (error) {
  console.log("error", error);
}
// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

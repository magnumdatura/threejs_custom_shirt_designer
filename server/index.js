// setting up express server
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

// import DALL-E routes
import dalleRoutes from './routes/dalle.routes.js';

// to be able to use environment variables 
dotenv.config();

const app = express();
app.use(cors()); // set up middleware for app to use cors
app.use(express.json({ limit: "50mb" }));

// consume the DALL-E routes
app.use('/api/v1/dalle', dalleRoutes)

// demo route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" });
});

// set to listen to specific port
app.listen(8080, () => console.log("Server has started on port 8080"));

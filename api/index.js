const express = require("express");
const devicesRoutes = require("../routes/device-routes");
const expressApp = express();
const connectDB =  require("../config/db")
const dotenv = require("dotenv") ;
dotenv.config();
const port = 3000 || process.env.port
// const { connectDB } = require("../config/db");


expressApp.use(express.json());
//connectDB();
expressApp.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
      return res.status(200).json({});
    }
    next();
  });
expressApp.use('/devices', devicesRoutes);
expressApp.listen(port , ()=>console.log("listening on port 3000  ............."));


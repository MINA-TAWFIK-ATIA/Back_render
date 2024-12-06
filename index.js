const express = require("express");
const mongoose = require("mongoose");
const devicesRoutes = require("./routes/device-routes");
const expressApp = express();
const port = 3000 || process.env.port
expressApp.use(express.json());
mongoose.connect('mongodb://localhost:27017/voltify')
const connection = mongoose.connection
connection.on('open' , ()=>{console.log('Connected To Data Base')})
connection.on('error' , (err)=>{console.error(err)})

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


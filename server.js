const express=require('express')
const app=express();
require("dotenv").config();
const dbConnect = require("./dbConnect/dbConnect");
const cors = require("cors")
const routes = require("./routes");

//cors
app.use(
    cors({
        origin: "*",
    })
);

//body
app.use(express.json());
app.use(express.urlencoded({
    extended : false
}));

//routes
app.use("/Blog", routes);

//database connect
dbConnect();

//server
app.listen(process.env.PORT, () =>{
    
    console.log(`Server started on ${process.env.PORT}`);
    
});


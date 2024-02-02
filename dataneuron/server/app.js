require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4200;

const details_routes = require("./routes/details");

app.use(bodyParser.json());
app.use("/api/employee_details",details_routes);
app.use("/api/addemployee",details_routes);
app.use("/api/updateUserDetails",details_routes);

const start = async () =>{
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error){
        console.log(error);
    }
}
start();
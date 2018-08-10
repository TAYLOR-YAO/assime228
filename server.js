
//  Node packages
const express = require("express");
const bodyParser = require("body-parser");
const inventoryRoutes = require("./routes/inventory-routes")
const storeRoutes = require("./routes/stores-routes");
const cartRoutes = require("./routes/cart-routes");
const path = require("path");
//  =================================================

//  Connection with express modules
const app = express();
const PORT = process.env.PORT || 5000;
//  ========================================

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use (express.static("client/build"))

//Connection to mongoDB
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/assime228', ()=>{
    console.log("Succesfuly Connected to MongoDB")
});

app.use("/api",inventoryRoutes);
app.use("/api", storeRoutes);
app.use("/api", cartRoutes);


app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});




// PORT Listener
app.listen(PORT,()=>{
    console.log(`Listening on port: ${PORT}`);
})
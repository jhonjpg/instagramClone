const mongoose = require("mongoose");

mongoose.connect(process.env.URI).
then(() => {

    console.log("Data base has been Connected")

}).catch(e => {

    console.log("db fallo de conexion" + e)
})
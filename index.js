const express = require("express");
const { create } = require("express-handlebars");
require("dotenv").config()
require("./database/db")



const app = express();



const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"]
});


app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views")

app.use(express.urlencoded({ extended: true }))



app.use(express.static(__dirname + "/public"));

app.use("/", require("./routes/auth"))
app.use("/profile", require("./routes/profile"))



const PORT = process.env.PORT || 1000;


app.listen(PORT, () => {
    console.log("listo! 🚀 en el puerto  " + PORT);
});
const express = require("express");
const app = express()
const doctors = require("./routes/doctors")

app.use(express.json())

const index = require("./routes")

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Accessf-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.options("/*", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers")
    res.header(
        "Access-Control-Allow-Methods",
        "PUT,POST,GET,DELETE,OPTIONS,PATCH"
    );
    res.send("send some thing whatever")
})

app.use("/", index)
app.use("/doctors", doctors)

module.exports = app;
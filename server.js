require("dotenv").config();
const app = require("./src/app");

const port = process.env.PORT || 8089;

app.listen(port,()=>{
    console.log(`Listening port: ${port}`)
});
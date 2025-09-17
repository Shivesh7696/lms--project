import express from "express";
import dotenv from "dotenv";
import routes from "./routes/check.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(routes);


app.listen(PORT,()=>{
    console.log('App listen :', PORT);
})



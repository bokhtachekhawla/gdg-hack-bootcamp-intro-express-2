const express = require ("express")
const userRouter = require("./src/routes/userRoute")
const app = express ()
const port = 3002;

app.use(express.json())

app.use("/users",userRouter)

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})
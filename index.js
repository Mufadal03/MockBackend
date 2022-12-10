const express = require("express")
const { connection } = require("./config/db")
const { questionController } = require("./routes/questions.routes")
const app = express()
const cors = require("cors")
require("dotenv").config()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.send({"message":"RUNNING FINE"})
})

app.use("/quiz",questionController)








app.listen(PORT, async() => {
    try {
        await connection 
        console.log("Connected to DB")
    }
    catch(e) {
        console.log(e)
    }
    console.log(`Running on PORT ${PORT}`)
})
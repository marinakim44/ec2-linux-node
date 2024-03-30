const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Express node server is here from aws ec2 linux ami")
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Express server is running")
})

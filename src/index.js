const express = require("express");
const { PORT } = require("./config/serverConfig.js")
const bodyParser = require("body-parser")


const setUpAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true })); 


    app.get("/", (req, res) => {
        res.send("hey there its my home page ")

    })
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)

    })

}


setUpAndStartServer();
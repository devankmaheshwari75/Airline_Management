const express = require("express");

require('dotenv').config()



const setUpAndStartServer = async () => {
    const app = express();
    const PORT = process.env.PORT;

    app.get("/", (req, res) => {
        res.send("hey there its my home page ")

    })
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
       

    })

}


setUpAndStartServer();
const express = requrie("express")
const app = express()


const PORT = 3000;

app.get("/" ,(req,res) =>{
    res.send("hey there its my home page ")
    
})


app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`)

})
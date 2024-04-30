const express = requres("express")
const app = express()

app.get("/",(req,res) =>{
    console.log("Here")
    res.Status(500).send("Hi")
    
})
app.listen(3000)
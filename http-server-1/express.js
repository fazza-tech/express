const express = require("express")

const app = express();

app.get('/', (req,res) =>{
    throw new console.error("Errorrr abcd");
    
})

app.listen(3000)
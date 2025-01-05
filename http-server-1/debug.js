const express = require("express")

const app = express();

app.get('/profile',token,validation, (req,res,next) =>{
    res.send("<h1>Success</h1>")
    next()
},(req,res)=>{
    console.log("Last Middleware");
})

function token(req,res,next){
    console.log("Calling token");
    next()
}

function validation(req,res,next) {
    if(req.token){
        console.log("Token apporved");
        next()
    }
}

app.listen(3000)
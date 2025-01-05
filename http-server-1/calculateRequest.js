const express = require("express");

const app = express();

let numberOfRequests = 0;
function calculateRequest(req,res,next){
    numberOfRequests++;
    console.log(numberOfRequests);
    next()
}

app.get('/',calculateRequest,(req,res)=>{
    res.json({
        msg:"haha"
    })
})

app.listen(3000)
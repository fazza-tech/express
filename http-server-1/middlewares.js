const express = require("express");

const app  = express();

app.get('/health-checkup', (req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = Number(req.query.kidneyId);

    if(username !== 'Fasal' || password!=='pass'){
        res.status(400).json({"msg":"spmething up with ur output"})
        return
       
    } 

    if(kidneyId !== 1 && kidneyId !== 2){
        res.status(400).json({"msg":"spmething up with ur output"})
        return
    }
    
    
    res.json({
            msg:"Your kidney is fine"
        })
});

app.listen(3000);
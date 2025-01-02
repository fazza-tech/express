const express = require('express')
const app = express()
const port = 3001

app.use(express.json()); 

app.post('/backend-api/msg',(req,res) => {
    const message = req.body.message
    console.log(message);
    res.json({
        output:'2+2=4'
    })
})

app.listen(port, '0.0.0.0')

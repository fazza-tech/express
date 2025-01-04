const express = require('express')

const app = express()



const users = [{
    name: 'Jhon',
    kidneys: [{
        healthy: false,
    }]
},
{
    name: 'Sulaiman',
    kidneys: [{
        healthy: false,

    }]
}
]

app.use(express.json())

app.get('/', (req, res) => {
    const jhonkidneys = users[0].kidneys
    const numberOfKidneys = jhonkidneys.length
    let numberOfHealthKidnyes = 0;

    for (let i = 0; i < numberOfKidneys; i++) {
        if (jhonkidneys[i].healthy) {
            numberOfHealthKidnyes = numberOfHealthKidnyes + 1
        }
    }
    const numberOfUnHealthKidnyes = numberOfKidneys - numberOfHealthKidnyes
    res.json({
        numberOfKidneys,
        numberOfHealthKidnyes,
        numberOfUnHealthKidnyes

    })
})

app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done"
    })

})

app.put('/', (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true
    }
    res.json({})
})

app.delete('/', (req, res) => {
    if (isThereAtleastOneUnhealthyKedney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg:"done"})
    }else{
        res.status(411).json({
            msg:"You have no bad kidneys"
        })
    }

})

function isThereAtleastOneUnhealthyKedney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true
        }
        return atleastOneUnhealthyKidney;
    }
}

app.listen(3000)
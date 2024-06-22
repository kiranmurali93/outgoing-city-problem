const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const pgp = require('pg-promise')()
const db = pgp('postgres://username:password@localhost:5432/database')
const port = 3000

app.use(cors())
app.use(bodyParser.json({ type: ["application/json"] }));

app.post('/cityPath', async (req, res) => {
    if(!req.body['source'] || !req.body['destination']){
        res.status(400)
        res.send("Data incomplete")
        return
    }
    
    try {
        const addCity = await db.any(`insert into cities (name) values ('${req.body['source']}'), ('${req.body['destination']}') on conflict do nothing`)
        const addRel = await db.any(`insert into city_relation (source, destination) values ('${req.body['source']}', '${req.body['destination']}') on conflict do nothing`)
    } catch (error) {
        console.log(error)
        res.status = 500
        return res.send("some error")
    }
   
    res.send('Successfully added')
})

app.get('/deadEndCity', async (req, res) => {
    try {
        const getCityNotInDestination = await db.any(`select cities.name from cities left join city_relation  on cities.name = city_relation.source where city_relation.source is null`)
        console.log(getCityNotInDestination);
        res.status(200)
        res.json(getCityNotInDestination)
    } catch (error) {
        console.log(error);
        res.status(500)
        return res.json("some error")
    }

  })

app.get('/listAll', async (req,res) => {
   try {
    const cityPathFromDb = await db.any('select * from city_relation')
    return res.json(cityPathFromDb)
   } catch (error) {
    console.log(error);
    res.status(500)
    return res.json(error)
   }
   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

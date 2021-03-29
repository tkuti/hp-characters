const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 5000

app.use(cors())

app.get('/characters', (req, res) => {
    fs.readFile('./characters.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        let characters = JSON.parse(data);
        res.json(characters);
      })
  })


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
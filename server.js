const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

const jhuEdu = require('./api/jhu-edu')
const kcdc = require('./api/korea-kcdc')

app.use('/jhu-edu', jhuEdu)
app.use('/kcdc', kcdc)

app.get('/', (req, res) => res.send('API Service for tracking the COVID-19!'))

app.listen(port, err => {
    if(err) throw err;
    console.log("%c Server running", "color: green");
    console.log(`API Server listening on port ${port}!`)
});

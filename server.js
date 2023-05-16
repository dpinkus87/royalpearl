const express = require('express')
const app = express()
const port = 3000
const { db } = require('./src/config/firebase')
const routes = require('./routes')

app.use(express.json())

app.use(routes)

db.once('open', () => {
    app.listen(port, () => {
        app.listen(port, () => console.log(`Server has started on port: ${port}`))
    })
})


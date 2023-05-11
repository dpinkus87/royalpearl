const express = require('express')
const { FieldValue } = require('firebase-admin/firestore')
const app = express()
const port = 3000
const { db } = require('./firebase.js')

app.use(express.json())

const products = {
    'ring': 'gold',
    'bracelet': 'pearl',
    'earring': 'pearl',
    'necklace': 'black pearl',
}

app.get('/products', async (req, res) => {
    const productRef = db.collection('product').doc('')
    const doc = await productRef.get()
    if (!doc.exists) {
        return res.sendStatus(400)
    }

    res.status(200).send(doc.data())
})

app.get('/products/:name', (req, res) => {
    const { name } = req.params
    if (!name || !(name in products)) {
        return res.sendStatus(404)
    }
    res.status(200).send({ [name]: products[name] })
})

app.post('/addproduct', async (req, res) => {
    const { name, status } = req.body
    const productRef = db.collection('product').doc('')
    const res2 = await productRef.set({
        [name]: status
    }, { merge: true })
    // friends[name] = status
    res.status(200).send(products)
})

app.patch('/changestatus', async (req, res) => {
    const { name, newStatus } = req.body
    const productRef = db.collection('product').doc('')
    const res2 = await productRef.set({
        [name]: newStatus
    }, { merge: true })
    // friends[name] = newStatus
    res.status(200).send(products)
})

app.delete('/products', async (req, res) => {
    const { name } = req.body
    const productRef = db.collection('people').doc('associates')
    const res2 = await productRef.update({
        [name]: FieldValue.delete()
    })
    res.status(200).send(products)
})

app.listen(port, () => console.log(`Server has started on port: ${port}`))
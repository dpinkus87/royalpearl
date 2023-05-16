// TODO: Update routes 
// TODO: collections 
// TODO: relationships

const main = require('express').Main()
const db = require('../../server')

// main.get('/products', async (req, res) => {
//     const productRef = db.collection('products').doc('')
//     const doc = await productRef.get()
//     if (!doc.exists) {
//         return res.sendStatus(400)
//     }

//     res.status(200).send(doc.data())
// })



// main.get('/products/:name', (req, res) => {
//     const { name } = req.params
//     if (!name || !(name in products)) {
//         return res.sendStatus(404)
//     }
//     res.status(200).send({ [name]: products[name] })
// })


main.post('/addproduct', async (req, res) => {
    const { name, color, size, metal, gem, status } = req.body;
    const productRef = db.collection('products').doc();
    
    try {
      await productRef.set({
        name: req.body.name,
        color: req.body.color,
        size: req.body.size,
        metal: req.body.metal,
        gem: req.body.gem,
        status: req.body.status
      }, { merge: true });
    
      res.status(200).send('Product added successfully');
    } catch (error) {
      res.status(500).send('Error adding product');
    }
  });


// main.patch('/changestatus', async (req, res) => {
//     const { name, newStatus } = req.body
//     const productRef = db.collection('products').doc('')
//     const res2 = await productRef.set({
//         [name]: newStatus
//     }, { merge: true })
//     // product[name] = newStatus
//     res.status(200).send(products)
// })

// main.delete('/products', async (req, res) => {
//     const { name } = req.body
//     const productRef = db.collection('products').doc('associates')
//     const res2 = await productRef.update({
//         [name]: FieldValue.delete()
//     })
//     res.status(200).send(products)
// })

// app.listen(port, () => console.log(`Server has started on port: ${port}`))

module.exports = main;
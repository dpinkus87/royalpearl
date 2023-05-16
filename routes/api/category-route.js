// TODO: Update routes 
// TODO: collections 
// TODO: relationships

const main = require('express').Main()
const {db} = require('../../server')


main.post('/addcategory', async (req, res) => {
    const { name, status } = req.body;
    const productRef = db.collection('category').doc();
    
    try {
      await productRef.set({
        name: req.body.name,
        status: req.body.status
      }, { merge: true });
    
      res.status(200).send('Category added successfully');
    } catch (error) {
      res.status(500).send('Error adding category');
    }
  });




module.exports = main;
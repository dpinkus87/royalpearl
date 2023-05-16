const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-route');
const main = require('express').Main()


main.use('/addproduct', productRoutes);
main.use('/addcategory', categoryRoutes);

module.exports = main;
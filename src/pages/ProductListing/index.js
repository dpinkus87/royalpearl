// import React, { useState, useEffect } from 'react'
// import productCard from '../../components/ProdCard'

// const ProductListing = () => {

//   const [state, dispatch ] 

//   const { currentCategory } = state;
//   const [product, setProduct] = useState([])

//   useEffect(() => {
//     getProduct()
//   }, []);

//   const getProduct = () => {
//     fetch()
//       .then((res) = res.json())
//       .then((response) => setProduct)
//   }

//   function filterProducts() {
//     if (!currentCategory) {
//       return state.products;
//     }

//     return state.products.filter(
//       (product) => product.category._id === currentCategory
//     )
//   }

//   return (
//     <div className='container'>
//       <h2 className='header'>Products</h2>
//       <span className='text-primary'>TEST
//       </span>
//       <hr></hr>
//       <div className='ui grid'>
//         <div className='row'>
//           <div className='col-8'>
//             <productCard product={product} />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductListing;
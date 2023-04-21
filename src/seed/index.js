import React, { useState } from "react";

const productList = ([category]) => {
    const [product] = useState([

        {
            name: 'AA01',
            category: 'ring',
            image:''
        },
        {
            name: 'AA02',
            category: 'ring',
            image:''
        },
        {
            name: 'BB01',
            category: 'necklaces',
            image:''
        },
        {
            name: 'BB02',
            category: 'necklaces',
            image:''
        },
        {
            name: 'CC01',
            category: 'bracelets',
            image:''
        },
        {
            name: 'CC02',
            category: 'bracelets',
            image:''
        },

    ]
    )
}

const currentProducts = products.filter(product => product.category === category);

const [currentProduct, setCurrentProduct] = useState();

return (
    <div className="flex-row">
        {currentProducts.map((image, i) => (
            <img
            src={require(`../../src/Images/${category}/${i}.jpeg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name} />
        ))}
     </div>
)

export default productList;
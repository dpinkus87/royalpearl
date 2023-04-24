import React, { UseState } from "react";

const productList = ([category]) => {
    const [product] = UseState([

        {
            name: 'AA01',
            category: 'ring',
            image: ''
        },
        {
            name: 'AA02',
            category: 'ring',
            image: ''
        },
        {
            name: 'BB01',
            category: 'necklaces',
            image: ''
        },
        {
            name: 'BB02',
            category: 'necklaces',
            image: ''
        },
        {
            name: 'CC01',
            category: 'bracelets',
            image: ''
        },
        {
            name: 'CC02',
            category: 'bracelets',
            image: ''
        },

    ]
    )

    const currentProducts = product.filter(product => product.category === category);

    // const [currentProduct, setCurrentProduct] = seState(false);

    return (
        <div>
            <div className="flex-row">
                {currentProducts.map((image, i) => (
                    <img
                        src={require(`../../src/Images/${category}/${i}.jpeg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name} />
                ))}
            </div>
        </div>
    );
};

export default productList;
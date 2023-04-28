import React from "react";
import ProductCard from "../../components/ProdCard";

import { Container } from "react-bootstrap";
import useState from '../../data'


const styles = {
    gridlayout: {
        border: 'none'
    }
}
const ProductListing = () => {

    return (
        <Container>
            <div style={styles.gridlayout}>
                {useState.map((products) => {
                    return (<ProductCard key={products.id} id={products.id} />)
                })}
            </div>
        </Container>
    )
}

export default ProductListing

import ProductCard from "../../components/ProdCard";

import { Container } from "react-bootstrap";
import { ProductList } from '../../data';


const styles = {
    gridlayout: {
        border: 'none'
    }
}
const ProductListing = () => {

    return (
        <Container>
            <div style={styles.gridlayout}>
                {ProductList.map((item) => {
                    return (<ProductCard key={item.id} id={item.id} />)
                })}
            </div>
        </Container>
    )
}

export default ProductListing

import React, { useEffect, useState } from "react";
import { collection, query, orderBy, startAt, endAt, onSnapshot, where } from "firebase/firestore";
import CatalogItem from "../../components/CatalogItem";
import Footer from "../../components/Footer";
import Header from "../../components/Navigation";
import { db } from "../../config/firebase";
import hero from "../../Images/sabrianna-CCpQ12CZ2Pc-unsplash.jpg";
import { Carousel, Container, Row } from "react-bootstrap";
import PE90TW from "../../Images/PE90TW-S_200x200.JPG"
import OldFriendsItem from "../../components/OldFriendsItem";

const styles = {
    parallax: {
        backgroundImage: `url(${hero})`,
        minHeight: "500px",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
};

const OldFriends = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const displayItems = () => {
            const colRef = collection(db, "products");
            let q = query(colRef, orderBy("name", "asc"));

            onSnapshot(q, (snapshot) => {
                const filteredProducts = snapshot.docs
                    .map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                    .filter((product) => product.data.category2 == "OldFriend");
                setProducts(filteredProducts);
            });
        };

        displayItems();
    }, []);


    return (
        <div>
            <Header />

            <br></br>
            <br></br>
            <br></br>
            <br></br>
<Container>
{/* 
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block"
                        style={{ objectFit: "cover" }}

                        src={PE90TW}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ objectFit: "cover" }}
                        src={PE90TW}                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ objectFit: "cover" }}
                        src={PE90TW}                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel> */}

            </Container>
<br></br>
            <br />

            <h2 className="align-items-center text-white p-2">Old Friends</h2>
            <Container>

                <Row xxl={4} xl={3} lg={2} md={1} sm={1} xs={1} className="gx-0 p-1 m-4">
                    {products.map((product) => (
                        <OldFriendsItem
                            key={product.id}
                            name={product.data.name}
                            description={product.data.description}
                            category={product.data.category}
                            category2={product.data.category2}
                            image={product.data.image}
                        />
                    ))}
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default OldFriends;

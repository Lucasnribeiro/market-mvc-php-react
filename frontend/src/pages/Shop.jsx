import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import ShopItemCard from "../components/Cards/ShopItemCard"
import CentralizedSpinner from "../components/CentralizedSpinner";
import CartOverview from "../components/ShoppingCart/CartOverview"
import { useProducts } from "../hooks/useProducts";


export default function Shop({}){
    const { listProducts } = useProducts();
    const { products, isFetching: isFetchingProducts } = listProducts({filter: false});

    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col xs={8}>
                        <Row >
                            {isFetchingProducts ? 
                                <CentralizedSpinner />

                                :

                                products.map( product => 
                                    
                                        <Col xs={5} className="mt-4">
                                            <ShopItemCard 
                                                name={product.name} 
                                                price={product.price} 
                                                tax={product.tax} 
                                                id={product.id}
                                            />
                                        </Col>   
                                    )
                            }
                        </Row>

                    </Col>
                    <Col xs={4}>
                        <CartOverview />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
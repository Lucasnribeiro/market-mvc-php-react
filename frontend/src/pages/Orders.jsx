import { Container, Row } from "react-bootstrap";
import OrdersTable from "../components/Tables/OrdersTable";
import { useOrders } from "../hooks/useOrders";





export default function Orders(){
    const {listOrders} = useOrders();
    const {orders, isFetching} = listOrders({filter: false});

    return (
        <Container>
            <Row className="mt-5">
                <OrdersTable {...{orders, isFetching}} />
            </Row>
        </Container>
    )
}
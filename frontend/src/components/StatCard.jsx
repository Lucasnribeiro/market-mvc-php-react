import { Alert, Container, Row } from "react-bootstrap";
import CentralizedSpinner from "./CentralizedSpinner";






export default function StatCard({value, title, loading}){

    if(loading){
        return (
            <CentralizedSpinner/>
        )
    }else{
        return (
            <Container className="text-center">
                <Alert variant="success">
                    <Alert.Heading>
                        <Row><p>{value}</p></Row>
                    </Alert.Heading>
                    <Row><p>{title}</p></Row>
                </Alert>
            </Container>
        )
    }
}
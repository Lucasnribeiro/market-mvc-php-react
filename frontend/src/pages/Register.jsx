import { Col, Container, Row } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";

export default function Register({}){


    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col sm={4}>
                    <RegisterForm />
                </Col>
            </Row>
        </Container>
    )
}
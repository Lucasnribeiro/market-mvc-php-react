import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function Login({}){


    return (
        <Container>
            <Row className="justify-content-center mt-5 pt-5">
                <Col sm={4}>
                    <Image src="/images/login.jpg" fluid/>
                </Col>
                <Col sm={4} style={{marginTop: '5%'}}>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}
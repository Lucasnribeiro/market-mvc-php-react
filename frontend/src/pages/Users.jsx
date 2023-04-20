import { Container, Row } from "react-bootstrap";
import api from "../../axios";
import UsersTable from "../components/Tables/UsersTable";
import { useUsers } from "../hooks/useUsers";





export default function Users({}){

    const { listUsers } = useUsers();
    const { users, isFetching } = listUsers({filter: false});

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <UsersTable {...{users, isFetching}}/>
                </Row>
            </Container>
        </>
    )
}
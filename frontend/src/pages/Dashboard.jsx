import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import StatCard from "../components/StatCard"
import { useUsers } from "../hooks/useUsers";


export default function Dashboard({}){
    const { countUsers } = useUsers(); 
    const { count, isLoading: isLoadingUsersCount } = countUsers(); 


    return (
        <>
            <Row className="mt-5">
                <Col>
                    <Link to={'/users'}>
                        <StatCard value={count} title={'Users'} loading={isLoadingUsersCount}/>
                    </Link>
                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
                <Col>

                </Col>
            </Row>
        </>
    )
}
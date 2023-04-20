import { Table, Accordion, Container } from "react-bootstrap";
import CentralizedSpinner from "../CentralizedSpinner";
import BaseFormModal from "../Modals/BaseFormModal";
import {FiEdit} from "react-icons/fi"
import UserForm from "../Forms/UserForm";


export default function OrdersTable({orders, isFetching}){
    function tableHead(){

        return (
            <>
                <th>ID</th>
                <th>Imposto</th>
                <th>Total</th>
                <th>Total + Imposto</th>
                <th>Created At</th>
                <th>Deleted At</th>
                <th>Edit</th>
            </>
        )
    }

    if(isFetching){
        return <CentralizedSpinner />
    }else{
        return (
            <Table striped bordered hover style={{fontSize:"14px"}}>
                <thead>
                    <tr>

                    </tr>
                </thead>
                <tbody>
                    {orders.map((order => 
                    
                        <>
                            <tr>{tableHead()}</tr>
                            <tr>
                                <td>{order.sale.id}</td>
                                <td>{order.sale.tax}</td>
                                <td>{order.sale.total}</td>
                                <td>{Number(order.sale.total) + Number(order.sale.tax)}</td>
                                <td>{order.sale.created_at}</td>
                                <td>{order.sale.deleted_at}</td>
                                <td><BaseFormModal icon={<FiEdit />} form={<UserForm />} values={order}/></td>
                            </tr>
                            <tr>
                                <td colspan="7">

                                        <Container>
                                            <Accordion flush>
                                                <Accordion.Item eventKey={order.sale.id}>
                                                    <Accordion.Header>Items</Accordion.Header>
                                                    <Accordion.Body>
                                                        <Table striped bordered hover style={{fontSize:"12px"}}>
                                                            <thead>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Nome</th>
                                                                    <th>Preço</th>
                                                                    <th>Imposto</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {order.items.map((item) =>
                                                                    <tr>
                                                                        <td>{item.id}</td>
                                                                        <td>{item.name}</td>
                                                                        <td>{item.price}</td>
                                                                        <td>{item.tax}</td>
                                                                    </tr>
                                                                
                                                                )}
                                                            </tbody>
                                                        </Table>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </Container>

                                </td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </Table>
        )
    }
}
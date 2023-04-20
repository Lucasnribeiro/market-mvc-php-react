import { Table } from "react-bootstrap";
import CentralizedSpinner from "../CentralizedSpinner";
import BaseFormModal from "../Modals/BaseFormModal";
import {FiEdit} from "react-icons/fi"
import UserForm from "../Forms/UserForm";

export default function ProductsTable({products, isFetching}){


    if(isFetching){
        return <CentralizedSpinner />
    }else{
        return (
            <Table striped bordered hover style={{fontSize:"10px"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Imposto</th>
                        <th>Created At</th>
                        <th>Deleted At</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product => 
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.tax}</td>
                            <td>{product.created_at}</td>
                            <td>{product.deleted_at}</td>
                            {/* <td><BaseFormModal icon={<FiEdit />} form={<UserForm />} values={product}/></td> */}
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}
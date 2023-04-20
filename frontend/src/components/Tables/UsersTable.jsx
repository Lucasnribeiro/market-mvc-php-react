import { Table } from "react-bootstrap";
import CentralizedSpinner from "../CentralizedSpinner";
import BaseFormModal from "../Modals/BaseFormModal";
import {FiEdit} from "react-icons/fi"
import UserForm from "../Forms/UserForm";

export default function UsersTable({users, isFetching}){


    if(isFetching){
        return <CentralizedSpinner />
    }else{
        return (
            <Table striped bordered hover style={{fontSize:"10px"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Created At</th>
                        <th>Deleted At</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user => 
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.created_at}</td>
                            <td>{user.deleted_at}</td>
                            <td><BaseFormModal icon={<FiEdit />} form={<UserForm />} values={user}/></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}
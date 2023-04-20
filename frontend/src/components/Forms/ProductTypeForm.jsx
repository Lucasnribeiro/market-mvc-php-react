import { Col, Form, Row } from "react-bootstrap";
import SelectProductType from "../Selects/SelectProductType";




export default function ProductTypeForm({register}){


    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" {...register('title')}/>
            </Form.Group>
        
        </>
    )
}
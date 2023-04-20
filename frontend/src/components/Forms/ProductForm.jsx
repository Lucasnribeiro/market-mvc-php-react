import { Col, Form, Row } from "react-bootstrap";
import SelectProductType from "../Selects/SelectProductType";




export default function ProductForm({register}){


    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Name" {...register('name')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Preço</Form.Label>
                <Form.Control type="number" placeholder="10" {...register('price')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Imposto (Porcentagem)</Form.Label>
                <Form.Control type="number" placeholder="2" {...register('tax')}/>
            </Form.Group>
            
            <SelectProductType register={register}/>
        </>
    )
}
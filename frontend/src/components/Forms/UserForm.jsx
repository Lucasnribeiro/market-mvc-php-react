import { Col, Form, Row } from "react-bootstrap";




export default function UserForm({register}){


    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" {...register('name')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>created_at</Form.Label>
                <Form.Control type="text" placeholder="Name" {...register('created_at')}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>deleted_at</Form.Label>
                <Form.Control type="text" placeholder="Name" {...register('deleted_at')}/>
            </Form.Group>
        </>
    )
}
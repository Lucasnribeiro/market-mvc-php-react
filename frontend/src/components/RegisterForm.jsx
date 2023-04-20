import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../axios';

function RegisterForm() {
  const navigate = useNavigate();
  const {handleSubmit, register } = useForm();

  const onSubmitLogin = async (values) => {
    try{
        const {data} = await api.post('/register', values)
        toast.success('Usuário Cadastrado !')
        navigate("/")


    }catch(error){

    }
}

  return (
    <Form onSubmit={handleSubmit(onSubmitLogin)}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder=""  {...register('name')}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder=""  {...register('username')}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="****" {...register('password')}/>
      </Form.Group>
      
      <Form.Group className="mb-3" >
        <Form.Label>Role</Form.Label>
        <Form.Select {...register('role')}>
          <option value={1}>Admin</option>
          <option value={2}>User</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  );
}

export default RegisterForm;
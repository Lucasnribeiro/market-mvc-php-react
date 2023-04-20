import axios from 'axios';
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../axios';
import useAuth from '../hooks/useAuth'

function LoginForm() {
  const { login, checkAuth, logout } = useAuth()
  const navigate = useNavigate();
  const {handleSubmit, register } = useForm();

  const onSubmitLogin = async (values) => {
    try{
        const {data} = await api.post('/login', values)

        await login(data.user[0], data.token)
        
        if(data.user[0].role == 1){
          navigate("/dashboard")
        }else{
          navigate("/shop")
        }



    }catch(error){

    }
}

  return (
    <Form onSubmit={handleSubmit(onSubmitLogin)}>
      <Form.Group className="mb-3" >
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder=""  {...register('username')}/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="****" {...register('password')}/>
      </Form.Group>
      <Stack direction='horizontal' gap={2}>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button variant="primary" type="submit">
          <Link  style={{ textDecoration: 'none', color: 'white'}} to="/register">Novo Usuário</Link>
        </Button>
        </Stack>
    </Form>
  );
}

export default LoginForm;
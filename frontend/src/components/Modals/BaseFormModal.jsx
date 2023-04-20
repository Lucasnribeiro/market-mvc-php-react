import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';

export default function BaseFormModal({icon, title, buttonText, form, values, submitFunction}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { handleSubmit, register } = useForm({defaultValues: values});

  function registerForm(form){
    return React.cloneElement(form, {register: register})
  }

  return (
    <>
        {icon ?
        
            <button onClick={handleShow} > {icon} </button> : 
            
            <Button onClick={handleShow}>{buttonText}</Button>
        }
        

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            
            <form onSubmit={handleSubmit(submitFunction)}>
                <Modal.Body>
                    {registerForm(form)}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    </>
  );
}


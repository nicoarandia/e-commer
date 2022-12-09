import React from "react";
import '../../../style/styleForm.css'
import HomeProducts from "../../container/homeProducts";
import { useUserContext, useUserToggleContext } from "../../container/userLoginProvider";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {

    const user = useUserContext();
    const cambiaLogin= useUserToggleContext();

    const successLogin = (e) => {
        e.preventDefault();
        alert(" Inicio de seccion exitoso hola mundo  ")
        
        
    }

    console.log("hola mundo",user)
    

    if(user && (user.state === 1)){
        return(
        <div>
            <HomeProducts></HomeProducts>
        </div>
            
        )
    }else{
        return(

            <div className="container">
                <Form className="container-form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted" >
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="No soy un robot" />
                </Form.Group>
                <Button variant="primary"  onClick={cambiaLogin} >
                    Login
                </Button>
                </Form>

                
            </div>
            
        )
    }

    
};

export default LoginForm;

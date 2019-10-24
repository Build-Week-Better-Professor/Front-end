import React from "react";
import RegisterForm from "./RegisterForm";
import styled from "styled-components";
import Header from '../components/Header';

const Register = () => {

    const RegisterPage = styled.div`
        display: flex;
        flex-direction:column;
        align-items: center;
        border: 2px solid gray;
        padding-bottom: 3%;
        background-color: #457B9D;

        h2 {
            color:#F8F9F7;
        }
        
    `;
    return (
      <>  
    <Header />
    <RegisterPage>
        
        <h2>Register to gain access to premium features today!</h2>
        <RegisterForm />
    </RegisterPage>
    </> 
    );
}
export default Register;
import React from "react";
import RegisterForm from "./RegisterForm";
import styled from "styled-components";
import Header from '../components/Header';

const Register = () => {

    const RegisterPage = styled.div`
        display: flex;
        flex-direction:column;
        align-items: center;
        padding-bottom: 3%;

        h2 {
            color:#83365c;
            margin-bottom: 20px;
        }
        
    `;
    return (
      <>  
    <Header />
    <RegisterPage>
        
        <h1>Register to gain access</h1>
        <RegisterForm />
    </RegisterPage>
    </> 
    );
}
export default Register;
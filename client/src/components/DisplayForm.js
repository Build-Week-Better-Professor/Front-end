import React from "react";
import Register from "./Register";
import styled from "styled-components";

const DisplayForm = () => {

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
    <RegisterPage>
        <h2>Register to gain access to premium features today!</h2>
        <Register />
    </RegisterPage>
    );
}
export default DisplayForm;
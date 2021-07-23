import React, { useState } from 'react';
import styled from "styled-components";
import { AddDoc } from '../Components/AddDocumentPopUp/AddDoc';

const Container = styled.div`
    background: lightblue;
    margin: 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
   min-width: 100px;
   padding: 12px 32px;
   border-radius: 4px;
   border: none;
   background: red;
   color: #fff;
   font-size: 16px;
   cursor: pointer;

    
`


const ComplianceRegister = () => {
    const [showPopup, setShowPopup] = useState(false)

    const openPopup = () => {
        setShowPopup(prev => !prev);
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Compliance Register</h1>
            <Container>
                <Button  onClick={openPopup}>+ NEW</Button>
                
            </Container>
            <AddDoc showPopup={showPopup} setShowPopup={setShowPopup} />
        </>
    )
}

export default ComplianceRegister

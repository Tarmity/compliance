import React from 'react'
import styled from "styled-components";
import DocumentsCard from '../Components/MainCards/DocumentsCard';
import OverDueCard from '../Components/SmallCards/OverDueCard';
import ThirtyCard from '../Components/SmallCards/ThirtyCard';
import SixtyCard from '../Components/SmallCards/SixtyCard';
import ComplianceCard from '../Components/MainCards/ComplianceCard';
import ContractsAgreeCard from '../Components/MainCards/ContractsAgreeCard';


const SmallBoxContainer = styled.div`
    background-color: lightblue;
    height: 20vh;
    margin-top: 3rem;
    margin-left: 7rem;
    margin-right: 7rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1025px) {
        margin: 2rem 5rem; 
    }
    @media (max-width: 769px) {
        margin: 2rem 1rem;
        height:15vh;
        justify-content: space-between;
    }
    @media (max-width: 737px) {
        height: 40vh;
        flex-direction: column;
        margin-bottom: 3.5rem;
    }
    @media (max-width: 640px) {
        height: 45vh;
        flex-direction: column;
        margin-bottom: 3.5rem;
    }
    @media (max-width: 376px) {
        height: 42vh;
        flex-direction: column;
        margin-bottom: 3.5rem;
    }
    @media (max-width: 321px) {
        height: 50vh;
        flex-direction: column;
        margin-bottom: 3.5rem;
    }
   
`

const LargeBoxContainer = styled.div`
    background-color: lightblue;
     margin-top: 4rem;
     margin-left: 5rem;
     margin-right: 5rem;
     height: 40vh;
     display: flex;
     align-items: center;
     justify-content: space-between;
     @media (max-width: 1025px) {
        flex-direction: column;
        height: 65vh;
        margin-top: 1rem;
    }
    @media (max-width: 769px) {
        margin: 2rem 1rem;
        height: 65vh;
        justify-content: space-between;
    }
    @media (max-width: 541px) {
        margin: 2rem 1rem;
        height: 95vh;
        justify-content: space-between;
    }
    @media (max-width: 414px) {
        height: 100vh;
        flex-direction: column;
        margin-bottom: 3.5rem;
    }
    @media (max-width: 376px) {
        height: 90vh;
        flex-direction: column;
        margin-bottom: 3.5rem;
    }
    @media (max-width: 361px) {
        height: 110vh;
        flex-direction: column;
        margin-bottom: 3.5rem;
    }
    @media (max-width: 321px) {
        height: 120vh;
        flex-direction: column;
        margin-bottom: 3.5rem;
    }
    
  
`

const Dashboard = () => {
    document.body.style = 'background: #f9f9f9';


    return (
        <>
            <div classNaame='dashboard'>
                <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
                <SmallBoxContainer>
                    <OverDueCard />
                    <ThirtyCard />
                    <SixtyCard />
                </SmallBoxContainer>
                <LargeBoxContainer>
                    <ComplianceCard />
                    <ContractsAgreeCard />
                    <DocumentsCard />
                </LargeBoxContainer>

            </div>
        </>
    )
}

export default Dashboard;


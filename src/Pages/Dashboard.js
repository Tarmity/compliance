import React from 'react'
import styled from "styled-components";
import MainCard from '../Components/MainCards/MainCard';
import { Container } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';
import SmallCard from '../Components/SmallCards/SmallCard';



const smallContainStyle = {
    height: "20vh",
    background: 'lightblue',
    marginTop: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
}

const containerStyle = {
    marginTop: '4rem',
    height: "40vh",
    background: "lightblue",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

const mainCardStyle = {
    
    
}

const Dashboard = () => {
    return (
        <>
            <div classNaame='dashboard'>
                <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
                <Container fixed style={smallContainStyle}>
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                </Container>
                <Container fixed style={containerStyle}>
                    <MainCard style={mainCardStyle} />
                    <MainCard style={mainCardStyle} />
                    <MainCard style={mainCardStyle} />
                </Container>
            </div>
        </>
    )
}

export default Dashboard

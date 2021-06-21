import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    background: white;
    height: 250px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: .3rem;
    box-shadow: 1px 1px .3rem black;
`

const Box = styled.div`
    background: red;
    height: 150px;
    width: 330px;
    border-radius: .3rem;
    position: relative;
    top: -2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px .3rem grey;
`

const Header = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

`

const Button = styled(Link)`
    height: 50px;
    width: 100px;
    background: blue;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
`

const ComplianceCard = () => {
    return (
        <>
            <Container>
                <Box>
                    <Header>Compliance Register</Header>
                </Box>
                <Button>Learn More</Button>

            </Container>

        </>

    )
}

export default ComplianceCard;

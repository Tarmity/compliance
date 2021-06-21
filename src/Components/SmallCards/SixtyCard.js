import React from 'react';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as CgIcons from "react-icons/cg";
  
  const Container = styled.div`
    height: 100px;
    width: 250px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 10px black;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `
  
  const Box = styled.div`
    height: 60px;
    width: 60px;
    background-color: #3bb54a;
    border-radius: 5px;
    margin-left: 15px;
    position: relative;
    top: -.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px grey;
  `
  const Heading = styled.div`
    margin-right: 20px;
    font-size: 1rem;
  `
  
  const OverDueIcon = styled.div`
    color: #fff;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `
  
  const Number = styled.div`
      display: flex;
      justify-content: center;
      font-size: 2rem;
  `
  
  const SixtyCard = () => {
  
    return (
      <>
        <Container>
          <Box>
            <OverDueIcon>
              <AiIcons.AiOutlineShop />
            </OverDueIcon>
          </Box>
          <Heading>Next 60 Days
          <Number>0</Number>
          </Heading>
        
        </Container>
      </>
    )
  }
  
  export default SixtyCard;
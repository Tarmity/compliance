import React from 'react'
import styled from 'styled-components';

import AddDocForm from '../AddDocumentForm/AddDocForm';

const Background = styled.div`
    width: 100%;
    height: 60vh;
    background: white;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const PopupWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 1px 5px 16px #333;
    background: #fffafa;
    color: #000;
    z-index: 10;
    border-radius: 10px;
`

const Button = styled.button`
  height: 50px;
  width: 100px;
  padding: 12px 20px;
   border-radius: 4px;
   border: none;
   background: blue;
   color: #fff;
   font-size: 16px;
   cursor: pointer;
   
`
const FormDiv = styled.div`
    margin: 1rem;
`


export const PopUp = ({ showPopup, setShowPopup }) => {



    return (
        <>
            {showPopup ? (
                <Background>
                    <PopupWrapper showPopup={showPopup}>
                        <FormDiv >
                            <AddDocForm />
                        </FormDiv>
                        <Button onClick={() => setShowPopup(prev => !prev)}>Submit</Button>
                    </PopupWrapper>
                </Background>

            ) : null}



        </>
    )
}
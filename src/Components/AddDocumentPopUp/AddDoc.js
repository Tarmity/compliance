import React from 'react'
import styled from 'styled-components';

const Background = styled.div`
    width: 100%;
    height: 60vh;
    background: white;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.1;
`

const PopupWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 5px 5px 10px 16px #333;
    background: #f5f5f5;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`


export const AddDoc = ({ showPopup, setShowPopup }) => {


    return (
        <>
            {showPopup ? (
                <Background>
                    <PopupWrapper showPopup={showPopup}>

                    </PopupWrapper>
                </Background>

            ) : null}



        </>
    )
}
'use client'
import { styled } from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: gray;
    font-size: 4vh;
`
export default function Crypto() {
    return (
        <StyledDiv>
            <h3> What is cryptocurrency? </h3>
            <p> A cryptocurrency is a digital currency designed to work through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.</p>
            <h3> How does it work? </h3>
            <p> The cryptocurrency is verified and recorded with blockchain technology, creating an unchangeable ledger that tracks trades and the purchase of digital assets</p>
        </StyledDiv>
    );
}
'use client'
import { styled } from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
    font-size: 4vh;
`
export default function AboutPage() {
    return (
        <StyledDiv>
            <h3> Cryptocurrency List App</h3>
            <p> This is my project showcasing all the top 100 cryptocurrencies available to trade today! </p>
            <p> I have listed their name, price, rank, ticker, and market cap for comparison. </p>
        </StyledDiv>
    );
}
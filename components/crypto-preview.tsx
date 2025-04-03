'use client'

import { Currency } from "@/types";
import styled from "styled-components";

const CoinContainer = styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: #ea4d4d;
`;

const Coin = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    width: 300px;
    padding: 2%;
    margin: 1%;
    border: 7px red solid;
    border-radius: 4px;
    font: bold calc(6px + 1vw) Roboto;
    text-align: center;
    background-color: #a4a4a4;
`;

const StyledH1 = styled.h1`
  justify-self: center;
  color: #434343;
`

export default function CryptoPreview (props : { data: Currency[] } ){
    return (
        <>
        <StyledH1>Top 100 Cryptocurrencies</StyledH1>
        <CoinContainer>
            {
                props.data.map((coin: Currency) =>
                    <Coin key={coin.id}>
                        <h1>{coin.name}</h1>
                        <h3>Ticker: {coin.symbol}</h3>
                        <p>Price: ${Number(coin.quote.USD.price)}</p>
                        <p>Rank: {coin.cmc_rank}</p>
                        <p>Market Cap: {coin.quote.USD.market_cap}</p>
                    </Coin>
                )
            }
        </CoinContainer>
        </>
    );
}
'use client'

import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    background: rgb(97, 97, 97);
    text-align: center;
    margin: auto;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`

const StyledNav = styled.nav`
    width: 100%;
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    font-size: calc(2px + 2vw);
    list-style: none;
    margin: 0;
`;

const StyledLi = styled.li`
    font-size: calc(3px + 3vw);
    padding: 1vh 0;
    margin: 1vh auto;
    color: white;
`;

export default function Header() {
    return (
        <StyledHeader> 
            <h2>CS391 Mini Project 4 </h2>
            <StyledNav>
                <StyledUl>
                    <StyledLi><StyledLink href={"/"}> Home </StyledLink></StyledLi>
                    <StyledLi><StyledLink href={"/about"}> About </StyledLink></StyledLi>
                </StyledUl>
            </StyledNav>
        </StyledHeader>
    );
}
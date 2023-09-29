import { createGlobalStyle, styled } from "styled-components"

export const GlobalBookMarkStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: "Poppins", sans-serif;
    }

    #root {
        display: flex;
        width: 100dvw;
        height: 100dvh;
        background-color: #0e0e0e;
        color: #fff;
    }
`
export const SideBar = styled.aside`
    display: flex;
    flex-direction: column;
    flex-basis: 284px;
    padding: 50px;
    overflow-y: auto;

    @media only screen and (max-width: 700px) {
        display: none
    }
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 2rem;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
`
export const User = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 64px;
    border-bottom: 1px solid #252424;
    margin-bottom: 64px;

    & img {
        width: 54px;
        height: 54px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
`
export const UserName = styled.div``
export const UserEmail = styled.div`
    margin-top: 6px;
    color: #5c5c5c;
    font-size: 14px;
`
export const SideBarMenu = styled.div`
    display: inline-flex;
    flex-direction: column;
`
export const SideBarItem = styled.a`
    color: #5c5c5c;
    text-decoration: none;
    margin-top: 24px;
    font-size: 20px;
    font-weight: 500;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`
export const MainHeader = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    @media only screen and (max-width: 700px) {
        justify-content: space-around;
    }
`
export const MainHeaderTitle = styled.h1`
   font-size: 28px;
   font-weight: 600;
   margin-right: 24px; 
`
export const AddButton = styled.button`
    background-color: #ea4e34;
    border: none;
    color: #fff;
    padding: 4px;
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    font-size: 1.50rem;

    &:hover {
        opacity: 50%;
    }
`
export const MainHeaderNav = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 20px 0;

    @media only screen and (max-width: 700px) {
        justify-content: center;
    }
`
export const MainNavItem = styled.a`
    color: #5c5c5c;
    text-decoration: none;
    padding-bottom: 6px;
    transition: 0.3s;
    border-bottom: 1px solid transparent;
    margin-left: 24px;

    &:hover {
        color: #fff;
        border-bottom: 1px solid #fff;
        transform: scale(1.35)
    }

    @media only screen and (max-width: 700px) {
        justify-content: center;
        margin-left: 15px;
    }
`
export const MainContent = styled.div`
    overflow-y: auto;
`

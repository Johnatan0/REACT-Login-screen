import { createGlobalStyle, styled } from "styled-components";
import { MoonIcon, SunIcon } from './icons/ThemeIcons';

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
        position: relative;
        display: flex;
        width: 100dvw;
        height: 100dvh;
        background-color: ${props => props.theme.bgColor};
        color: ${props => props.theme.textColor};
    }
`
export const SideBar = styled.aside`
    display: flex;
    flex-direction: column;
    flex-basis: 284px;
    padding: 50px;
    overflow-y: auto;
    background-color: inherit;

    @media only screen and (max-width: 700px) {
        display: none;
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
    color: ${props => props.theme.mutedText};
    font-size: 14px;
`
export const SideBarMenu = styled.div`
    display: inline-flex;
    flex-direction: column;
`
export const SideBarItem = styled.a`
    color: ${props => props.theme.mutedText};
    text-decoration: none;
    margin-top: 24px;
    font-size: 20px;
    font-weight: 500;
    transition: 0.3s;
    transform-origin: left;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.textColor};
        transform: scale(1.25)
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
    color: ${props => props.theme.mutedText};
    text-decoration: none;
    padding-bottom: 6px;
    transition: 0.3s;
    border-bottom: 1px solid transparent;
    margin-left: 24px;

    &:hover {
        color: ${props => props.theme.textColor};
        border-bottom: 1px solid ${props => props.theme.textColor};
        transform: scale(1.25);
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        justify-content: center;
        margin-left: 15px;
    }
`
export const MainContent = styled.div`
    overflow-y: auto;
`

export const SwitchToggle = styled.div`
    width: 60px;
    height: 32px;
    padding: 4px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    background-color: ${props => props.SwitchStatus === true ? '#ea4e34' : 'white'};

    &:before {
        display: flex;
        justify-content: center;
        align-items: center;
        content: url(MoonIcon);
        width: 25px;
        height: 25px;
        margin: 2px;
        border-radius: 50%;
        background-color: ${props => props.theme.bgColor};
        color: black;
        position: absolute;
        left: ${props => props.SwitchStatus === true ? '29px' : '0'};
        transition: 0.50s;
    }
`

export const ThemeSlider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: auto;

    & svg {
        height: 32px;
    }
`

export const lightTheme = {
    reverseTheme: 'Dark mode',
    bgColor: '#f5f5f5',
    textColor: 'black',
    mutedText: 'gray'
}

export const darkTheme = {
    reverseTheme: 'Light mode',
    bgColor: '#0e0e0e',
    textColor: '#fff',
    mutedText: '#5c5c5c'
}

import {styled, createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    line-height: 1.5;
    color: #1a1a1a;
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 1750px) {
    html {
      font-size: 80%
    }
  }
  
  @media only screen and (max-width: 1200px), (max-height: 1300px){
    html {
        font-size: 60%;
    }
  }

  @media only screen and (max-width: 400px), (max-height: 800px){
    html {
      font-size: 40%
    }
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-rows: minmax(min-content, 100dvh);
  grid-template-columns: repeat(2, 50vw);
`

export const SignupContainer = styled.main`
  grid-column: 1 / 2;
  grid-row: 1;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50vw;
  padding: 3rem;
  align-items: center;
  justify-content: center;
  overflow: auto;

  @media only screen and (max-width: 1000px){
    width: 100dvw;
  }
`

export const HeadingPrimary = styled.h1`
  font-size: 5rem;

  & span {
    color: #2196f3
  }
`
export const MutedText = styled.p`
  color: #aaa;

  & a {
    color: #2196f3;
    text-decoration: none;
}
`
export const GoogleButton = styled.a`
  color: #222;
  background: #fff;
  border: solid 1px #eee;
  border-radius: 1rem;
  padding: 1.5rem;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 1px 2px #00000020;

  & img {
    width: 3rem;
    margin-right: 1rem
  }
`

export const LineBreaker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  margin: 3rem 0;

  span:not(:nth-child(2)) {
    width: 50%;
    height: 1px;
    background: #eee;
  }

  span:nth-child(2) {
    margin: 0 2rem; 
  }
`

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 45rem;
  width: 100%;
`

export const LoginWrapper = styled.div`
  max-width: 45rem;
  width: 100%;
`

export const WelcomeContainer = styled.div`
  background: #eeeeee75;
  grid-column: 2 / 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10rem;

  & h1 {
    width: 100%;
    text-align: center;
    font-size: 3rem;
  }

  & h1 > span {
    font-size: 6rem;
  }

  & img {
    padding-top: 5rem;
    width: 100%;
  }

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

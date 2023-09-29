import Input from '../components/Input.tsx';
import Btn from '../components/SubmitButton.tsx';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import {GlobalStyle, Container, SignupContainer,HeadingPrimary, MutedText, GoogleButton, LineBreaker, SignUpForm, LoginWrapper, WelcomeContainer} from "./LoginPageStyles.tsx"
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <Container>
      <GlobalStyle/>
        <SignupContainer>
          <HeadingPrimary>Log in<span>.</span></HeadingPrimary>
          <MutedText>Enter your credentials to access your account.</MutedText>
          <LoginWrapper>
            <GoogleButton href="#">
              <img src="https://img.icons8.com/fluency/48/000000/google-logo.png" />
              Log In with Google
            </GoogleButton>
            <LineBreaker>
              <span></span>
              <span>or</span>
              <span></span>
            </LineBreaker>
          </LoginWrapper>
          <SignUpForm>
            <Input label='Username' type='text'iconTag={<FaUser/>} lenght={15}/>
            <Input label='Email' type='email' iconTag={<FaEnvelope/>}/>
            <Input label='Password' type='password' iconTag={<FaLock/>}/>
            <Link to={'/dashboard'}><Btn>Login</Btn></Link>
          </SignUpForm>
          <MutedText>Not a member? <Link to={"/SignUp"}>Sign up</Link></MutedText>
        </SignupContainer>
        <WelcomeContainer>
          <h1>Welcome to <span>Planner Buddy!</span></h1>
          <img src='https://png2.cleanpng.com/sh/ddf21bc6b9873600692fc418aad2d44a/L0KzQYm3VMI4N6JBiZH0aYP2gLBuTgJme6F0huVydnWwh7bpTfRme5pshp9CZXKwdLb9hfxweJ5qhuY2cnX2gLF1kBl3bV5pfeVyZ36wRbLsUvRiQJZqSaU7NEKxQISBVsYzQWk2TaQ9OEG5RYO9WcIzPF91htk=/kisspng-responsive-web-design-web-development-responsive-design-5ae2da8ee13242.0386629815248165269224.png' alt=""/>
      </WelcomeContainer>
    </Container>
  )
}

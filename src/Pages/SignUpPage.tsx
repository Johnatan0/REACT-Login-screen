import Input from '../components/Input.tsx';
import Btn from '../components/SubmitButton.tsx';
import { FaUserEdit, FaLock, FaEnvelope } from 'react-icons/fa';
import {GlobalStyle, Container, SignupContainer,HeadingPrimary, MutedText, SignUpForm, WelcomeContainer, InputWrapper} from "./SignUpPageStyles.tsx"
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  return (
    <Container>
      <GlobalStyle/>
        <SignupContainer>
        <MutedText>START FOR FREE</MutedText>
        <HeadingPrimary>Create new account<span>.</span></HeadingPrimary>
        <MutedText>Already A Member? <Link to={'/'}>Log in.</Link></MutedText>
        <SignUpForm>
            <InputWrapper>
                <Input label='First Name' type='text'iconTag={<FaUserEdit/>} lenght={15}/>
                <Input label='Last Name' type='text'iconTag={<FaUserEdit/>} lenght={15}/>
        </InputWrapper>
        <Input label='Email' type='email' iconTag={<FaEnvelope/>}/>
        <Input label='Password' type='password' iconTag={<FaLock/>}/>
        <Btn>Create account</Btn>
        </SignUpForm>
        </SignupContainer>
        <WelcomeContainer>
          <h1>Welcome to <span>Planner Buddy!</span></h1>
          <img src='https://png2.cleanpng.com/sh/ddf21bc6b9873600692fc418aad2d44a/L0KzQYm3VMI4N6JBiZH0aYP2gLBuTgJme6F0huVydnWwh7bpTfRme5pshp9CZXKwdLb9hfxweJ5qhuY2cnX2gLF1kBl3bV5pfeVyZ36wRbLsUvRiQJZqSaU7NEKxQISBVsYzQWk2TaQ9OEG5RYO9WcIzPF91htk=/kisspng-responsive-web-design-web-development-responsive-design-5ae2da8ee13242.0386629815248165269224.png' alt=""/>
      </WelcomeContainer>
    </Container>
  )
}

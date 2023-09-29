import styled from "styled-components"

const Container = styled.label`
    position: relative;
`
const InputField = styled.input`
    font-family: inherit;
    font-size: 1.8rem;
    padding: 3rem 5rem 1rem 2rem;
    border: none;
    border-radius: 2rem;
    background-color: #eee;
    width: 100%;

    &:focus {
        outline-color: #2196f3;
    }

    &:not(:placeholder-shown) + span, 
    &:focus + span {
        color: #2196f3;
        transform: scale(0.75);
        top: 0.6rem
    }

    &:not(:focus) + span {
        color: #1a1a1a;
    }
`
const Label = styled.span`
    pointer-events: none;
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: #aaa;
    font-weight: 500;
    font-size: 1.8rem;
    transition: 250ms;
    transform-origin: left;
`
const Icon = styled.span`
    position: absolute;
    top: 2rem;
    right: 2rem;
`


function Input({label, type, iconTag, lenght = 30}: {label: string, type: string, iconTag: any, lenght?: number}) {
    return (
        <Container>
            <InputField type={type} maxLength={lenght} placeholder=''/>
            <Label>{label}</Label>
            <Icon>{iconTag}</Icon>
        </Container>
    )
}

export default Input;


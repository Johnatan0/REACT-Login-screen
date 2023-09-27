import styled from "styled-components";

const Btn = styled.button`
    width: 100%;
    margin-top: 1rem;
    box-shadow: 0 3px 3px #00000020;

    padding: 2rem 3rem;
    border: none;
    background: #2196f3;
    color: #fff;
    border-radius: 1rem;
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
    font-size: inherit;

    &:hover {
        background: #2180f9;
    }

    &:active {
        box-shadow: none;
    }
`

function LoginButton() {
    return (
        <Btn>Login</Btn>
    )
}

export default LoginButton;
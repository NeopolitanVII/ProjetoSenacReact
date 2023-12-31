import styled from "styled-components"

export const PaginaFundo = styled.img`
    background-image: url(../../Imagens/FundoLogin.gif);
    width: 99.99vw;
    height: 99vh;
    position: absolute;
    top: 1%;
    z-index: -10;
`
export const LabelEmail = styled.p`
    color: white;
    font-size: 107%;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
    position: absolute;
    top: 33%;
    left: 25.2%;
`

export const BarraEmail = styled.input`
    width: 47%;
    height: 2%;
    border: 3px solid black;
    border-style: outset;
    padding: 1%;
    position: absolute;
    left: 25%;
    top: 40%;
`

export const LabelSenha = styled.p`
    color: white;
    font-size: 107%;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
    position: absolute;
    top: 47%;
    left: 25.2%;
`

export const BarraSenha = styled.input`
    width: 47%;
    width: 47%;
    height: 2%;
    border: 3px solid black;
    border-style: outset;
    padding: 1%;
    position: absolute;
    left: 25%;
    top: 54%;
`

export const LoginBotao = styled.button`
    background-color: black;
    text-size-adjust: 100%;
    color: #ffffff;
    padding: 0.5rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    width: 10%;
    display: flex;
    margin: auto;
    justify-content: center;
    font-size: 133%;
    text-decoration: none;
    position: absolute;
    bottom: 23%;
    left: 45%;
`
export const Registro = styled.p`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 100%;
    color: white;
    position: absolute;
    bottom: 10%;
    left: 44.7%;
    cursor: pointer;
`
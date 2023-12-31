import styled from "styled-components"

export const HeaderC = styled.header`
    background-color: #620A59;
    padding: 1rem;
    text-align: center;
    border-radius: 0px 0px 30px 30px;
    width: 96.3vw;
    margin-bottom: 5rem;
    display: flex;
`
export const StyledLogo = styled.img`
    height: 90px;
    z-index: 100;
    margin-right: 30rem;
`

export const GameSense = styled.p`
    font-size: 236%;
    font-family: 'Gill Sans','Gill Sans MT','Calibri','Trebuchet MS',sans-serif;
    color: #C0C0C0;
    text-align: center;
    margin-block: auto;
    position: absolute;
    top: 6%;
    left: 43.22%;
`
export const PaginaFundo = styled.img`
    background-image: url(../../Imagens/FundoRegistro.gif);
    width: 98.9vw;
    height: 115vh;
    position: absolute;
    top: 0%;
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
export const LabelName = styled.p`
    color: white;
    font-size: 107%;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
    position: absolute;
    top: 47%;
    left: 25.2%;
`

export const BarraName = styled.input`
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
export const LabelSenha = styled.p`
    color: white;
    font-size: 107%;
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
    position: absolute;
    top: 63%;
    left: 25.2%;
`

export const BarraSenha = styled.input`
    width: 47%;
    height: 2%;
    border: 3px solid black;
    border-style: outset;
    padding: 1%;
    position: absolute;
    left: 25%;
    top: 70%;
`

export const LoginBotao = styled.button`
    background-color: black;
    text-size-adjust: 100%;
    color: #ffffff;
    padding: 0.8rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    width: 12%;
    display: flex;
    margin: auto;
    justify-content: center;
    font-size: 133%;
    text-decoration: none;
    position: absolute;
    bottom: 7%;
    left: 45%;
`
export const RegistroLogin = styled.p`
    font-family: 'Gill Sans','Gill Sans MT',Calibri,'Trebuchet MS',sans-serif;
    font-size: 105%;
    color: white;
    position: absolute;
    bottom: -7%;
    left: 46.1%;
    cursor: pointer;
`
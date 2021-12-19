import styled from "styled-components";
//import { Link } from "react-router-dom";
import { Link as LinkR} from 'react-router-dom'

export const NavBtn2 = styled.nav`
display: flex;
align-items: center;



`

export const NavBtnLink2 = styled(LinkR)`
border-radius: 50px;
background:#916d13;        /*#01bf71*/
white-space: nowrap;
padding: 10px 22px;
color:#010606;
font-size: 16px;
outline: none;
border none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;





&:hover{
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
}
`;
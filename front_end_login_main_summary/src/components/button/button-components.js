import styled from "styled-components";
import { Regular, themeColor, whiteColor } from "../../styles";

export const ButtonContainer = styled.button`
height: 40px;
line-height: 40px;
background-color: ${props => props.primary ? themeColor : "grey"};
color: ${props => props.primary ? whiteColor : ""};
border-radius: 6px;
padding: 0 24px;
font-size: 14px;
${Regular};
outline: none;
border: none;
cursor: pointer;
`
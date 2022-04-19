import styled from 'styled-components';
import { borderColor, Medium, Regular, SemiBold, textColor, themeColor, whiteColor } from '../../styles';

export const Layout = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`

export const FlexedContainer = styled.div`
flex: 1;
overflow: hidden;
`

export const Wrapper = styled.div`
padding: 24px;
display: flex;
flex-direction: column;
`

export const FlexWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin: 0 -8px 24px;
&:last-of-type{
    margin-bottom: 0;
}
.flex-child{
    margin: 0 8px;
}
&.two-child-layout{
    .flex-child{
        width: calc(100%/2 - 16px);
    }
}
&.three-child-layout{
    .flex-child{
        width: calc(100%/3 - 16px);
    }
}
&.four-child-layout{
    .flex-child{
        width: calc(100%/4 - 16px);
    }
}
`

export const FlexLayout = styled.div`
display: flex;
align-items: center;
`

export const ColLayout = styled.div`
display: flex;
flex-direction: column;
`

export const LabelTextWrapper = styled.div`
&:not(:last-of-type){
    margin-bottom: 16px;
}
`

export const CommonLabel = styled.label`
font-size: 14px;
${Medium};
display: block;
margin: 0 0 4px;
`

export const CommonText = styled.p`
font-size: 14px;
${Regular};
line-height: 1.5;
margin: 0;
`

export const TabContentWrapper = styled.div`
height: 100%;
display: flex;
`

export const TabsWrapper = styled.div`
height: 100%;
width: 240px;
background-color: ${themeColor};
display: flex;
flex-direction: column;
padding: 12px 0 0 12px;
`

export const Tab = styled.div`
min-height: 40px;
padding: 0 24px;
background-color: transparent;
border-radius: 18px 0 0 18px;
line-height: 40px;
font-size: 14px;
${Regular};
color: ${whiteColor};
cursor: pointer;
&:not(.active){
    opacity: 0.75
}
&:hover{
    opacity: 1;
    &:not(.active){
        background-color: rgba(255,255,255,0.1);
    }
}
&.active{
    background-color: ${whiteColor};
    color: ${themeColor};
    ${Medium}
}
`

export const TabContentHolder = styled.div`
flex: 1;
overflow: hidden;
background-color: ${whiteColor};
`

export const TabContent = styled.div`
height: 100%;
overflow: auto;
display: flex;
flex-direction: column;
padding: 24px;
`

export const DialogWrapper = styled.div`
width: 100vw;
height: 100vh;
background: rgba(0,0,0,0.5);
backdrop-filter: blur(5px);
display: flex;
align-items: center;
justify-content: center;
position: fixed;
top: 0;
left: 0;
z-index: 20;
`

export const DialogContainer = styled.div`
min-width: 600px;
width: 40vw;
background-color: ${whiteColor};
border-radius: 6px;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
overflow: hidden;
`

export const DialogHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 24px;
border-bottom: 1px solid ${borderColor};
`

export const DialogTitle = styled.h3`
font-size: 18px;
${SemiBold};
color: ${themeColor};
margin: 0;
`

export const CloseDialog = styled.span`
opacity: 0.75;
cursor: pointer;
&:hover{
    opacity: 1;
}
`

export const DialogContentWrapper = styled.div`
&.form-wrapper{
    .form-content{
        padding: 24px;
        min-height: 200px;
        max-height: 70vh;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
    .form-footer{
        padding: 16px 24px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-top: 1px solid ${borderColor};    
    }    
}
`

export const DialogFooter = styled.div`
padding: 16px 24px;
display: flex;
align-items: center;
justify-content: flex-end;
border-top: 1px solid ${borderColor};
`

export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
:not(:last-of-type){
    margin-bottom: 16px;
}
`

export const InputContainer = styled.input`
padding: 12px;
border: 1px solid ${borderColor};
border-radius: 4px;
outline: none;
font-size: 14px;
${Medium};
color: ${textColor};
&:placeholder{
    color: ${textColor};
}
`

export const TextArea = styled.textarea`
padding: 12px;
outline: none;
border: 1px solid ${borderColor};
border-radius: 4px;
font-family: 'Roboto', sans-serif;
font-size: 14px;
${Regular};
color: ${textColor};
line-height: 1.5;
&:placeholder{
    color: ${textColor};
}
`
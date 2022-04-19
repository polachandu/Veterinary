import styled from "styled-components";
import { bgGray, borderColor, whiteColor } from "../../styles";

export const DetailsWrapper = styled.div`
display: flex;
align-items: center;
background-color: ${bgGray};
border-radius: 6px;
padding: 12px;
`

export const UserImageWrapper = styled.div`
width: 120px;
height: 120px;
background-color: ${whiteColor};
border-radius: 6px;
overflow: hidden;
&.mr-2{
    margin-right: 16px;
}
`

export const ImageDetailsWrapper = styled.div`
background-color: ${whiteColor};
border: 1px solid ${borderColor};
border-radius: 6px;
display: flex;
flex-direction: column;
padding: 8px;
margin-bottom: 16px;
position: relative;
`

export const DeleteAction = styled.span`
width: 24px;
height: 24px;
background-color: ${bgGray};
border-radius: 50%;
padding: 4px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 16px;
right: 16px;
opacity: 0.85;
cursor: pointer;
&:hover{
    opacity: 1;
}
&.no-position{
    position: relative;
    top: unset;
    right: unset;
}
`

export const ImageWrapper = styled.div`
width: 100%;
height: 200px;
background-color: ${bgGray};
border-radius: 6px;
overflow: hidden;
margin-bottom: 8px;
`

export const ButtonsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 24px;
button:not(:last-of-type){
    margin-right: 8px;
}
`

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
border: 1px solid ${borderColor};
border-radius: 6px;
`

export const FormRow = styled.div`
display: flex;
&:not(:last-child){
    border-bottom: 1px solid ${borderColor};
}
&:nth-child(even){
    background-color: ${bgGray};
}
`

export const FormField = styled.div`
padding: 12px 24px;
&:not(:last-child){
    border-right: 1px solid ${borderColor};
}
&.w-5{
    min-width: 5%;
}
&.w-15{
    min-width: 15%;
}
&.w-20{
    min-width: 20%;
}
&.flexed{
    flex: 1;
}
`

export const CommentsWrapper = styled.div`
background-color: ${bgGray};
border-radius: 12px;
padding: 16px;
&:not(:last-of-type){
    margin-bottom: 24px;
}
`

export const DefaultContainer = styled.div`
min-height: 250px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
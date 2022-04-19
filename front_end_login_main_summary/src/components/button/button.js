import { ButtonContainer } from "./button-components"


const Button = (props) => {
    return (
        <ButtonContainer type={props.type} primary={props.primary} onClick={props.onClick}>{props.children}</ButtonContainer>
    )
}

export default Button
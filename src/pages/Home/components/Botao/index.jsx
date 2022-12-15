import {BsFillArrowRightSquareFill as Arrow} from "react-icons/bs"
import { ButtonCard } from "../../../../style/components/StyledBotao"

export const Botao = (props) =>{

    return(
        <ButtonCard onClick={props.onClick} type={props.type}>{props.text}<Arrow/></ButtonCard>
    )
}
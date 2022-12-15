import  {RiInstagramLine as Ig} from "react-icons/ri"
import {AiOutlineTwitter as Twwt} from "react-icons/ai"
import {FaFacebook as Face} from "react-icons/fa"
import { DivBaseFooter,DivContentFooter } from "../../../style/StyledFooter" 

export const Footer = () =>{
    return(
        <DivBaseFooter>
            <DivContentFooter>
                <ul>
                    <li><Ig/></li>
                    <li><Twwt/></li>
                    <li><Face/></li>
                </ul>
                <p>Para mais contato: <span>borala@email.com.br</span></p>
            </DivContentFooter>
        </DivBaseFooter>
    )
}
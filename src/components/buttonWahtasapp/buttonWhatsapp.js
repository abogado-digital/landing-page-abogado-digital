import Image from "next/image";
import img_Whatsapp from '../../../public/whatsapp.png'
import styleBtnW from '../../styles/btnWhatsapp.module.css';

export default function ButtonWhatsapp(){

    return(
        <a href="#contactanos" className={styleBtnW.content}>
            <Image  src={img_Whatsapp}>

            </Image>
        </a>
    )
}
import { useState } from 'react';
import styleMenuOption from '../../styles/menuOption.module.css';
import src_png_logo from '../../../public/logo1.png';
import Image from 'next/image';


export default function MenuOption(){

    // const menuOptions = [
    //     {
    //         title:'Iniocio',
    //         link:''
    //     }
    
    // ]

    const [menuActive, setMenuActive] = useState(false);

    return(
        <div className={styleMenuOption.containerOption}>
            <div className={styleMenuOption.content_logo}>
                <div className={styleMenuOption.logo}>
                    <Image src={src_png_logo}>

                    </Image>
                </div>
                <div className={styleMenuOption.logo_text_content}>
                    <h2>
                        Legalbo
                    </h2>
                    <p>
                        Defiende tus derechos
                    </p>
                </div>
            </div>
            <div onClick={()=>{setMenuActive(!menuActive)}} className={styleMenuOption.icon_content}>
                    <i className="fa-solid fa-bars"></i>
            </div>
            
            <div className={`${styleMenuOption.menuOption_content} ${menuActive? styleMenuOption.menuActive:styleMenuOption.menuDisactive}`}>
                <div onClick={()=>{setMenuActive(!menuActive)}} className={styleMenuOption.icon_close_icon}>
                        <i className="fa-solid fa-xmark"></i>
                </div>
                <a onClick={()=>{setMenuActive(!menuActive)}}  className={styleMenuOption.content_option}>
                    Inicio
                </a>
                <a onClick={()=>{setMenuActive(!menuActive)}} href='#servicios' className={styleMenuOption.content_option}>
                    Servicios
                </a>
                <a onClick={()=>{setMenuActive(!menuActive)}} href='#dfamilia' className={styleMenuOption.content_option}>
                    Derecho Familia
                </a>
                <a onClick={()=>{setMenuActive(!menuActive)}} href='#contactanos' className={styleMenuOption.content_option}>
                    Contactanos
                </a>
            </div>
          
        </div>
    );
}
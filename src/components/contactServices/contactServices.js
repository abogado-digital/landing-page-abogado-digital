import Image from 'next/image';
import styleContactS from '../../styles/contactServices.module.css';
import img_calender  from '../../../public/icons/calender.png'
import { useState } from 'react';
import configMessageWhatsappWeb from '@/utils/configWhatsapp/whatsappMessage';

export default function ContactServices(){

    const [inputName, setInputName] = useState('');
    const [inputAsunto, setInputAsunto] = useState('Hola, necesito ayuda en un caso de custodia y pensión alimenticia para mis hijos. ¿Podrías asesorarme?');


    const handleInput=(e)=>{
        const {value, name} = e.target;

        name==='inputName'?setInputName(value):'';
        name==='inputAsunto'?setInputAsunto(value):''
    }

    const sendData = (e)=>{
        e.preventDefault();
        const usertData = {
            name:inputName,
            message:inputAsunto.replace('Hola','')
        }

        configMessageWhatsappWeb(usertData);
    }
    return(
        <div id='contactanos' className={styleContactS.content}>
            <div className={styleContactS.waves}></div>
            <div className={styleContactS.content_title_section}>
                <div><h2 className={styleContactS.title}>Contactanos</h2></div>
                <div><h2 className={styleContactS.subtitle}>Consultas gratuitas</h2></div>
                <div className={styleContactS.contact_description}><span >
                    Si necesita servicios de abogados de derecho de familia en Bolivia, no dude en contactarnos. Nuestro equipo de abogados expertos en derecho de familia está aquí para ayudarle con cualquier problema legal relacionado con asuntos familiares, como el divorcio, la custodia de los hijos, la pensión alimenticia, la adopción, entre otros.
                </span></div>
            </div>
            <div className={styleContactS.container_all_calender}>
                <div className={styleContactS.img_content_calender}>
                    <Image src={img_calender} width={120}>
                    </Image>
                </div>
                <div className={styleContactS.form_contact}>
                    <form>
                        <div className={styleContactS.content_input}>
                            <label>Nombre</label>
                            <input onChange={(e)=>handleInput(e)} type="text" name="inputName" value={inputName}/>
                        </div>
                        {/* <div>
                            <label>Asunto</label>
                            <input onChange={(e)=>{console.log(e.target.value)}} type="tezt" name="name" value=""/>
                        </div> */}
                        <div className={styleContactS.content_input}>
                            <label>Mensaje</label>
                            <textarea onChange={(e)=>handleInput(e)} type='area' name='inputAsunto' value={inputAsunto} />
                        </div>
                        <button onClick={(e)=>sendData(e)} className={styleContactS.button_send}> 
                            <span>
                                Contactar
                            </span> 
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
}

import derechoStyle from '../../../styles/derechoFalimia.module.css';
import DATA from './data';
import RAZONRES from './data_rasones';

import Image from 'next/image';

export default function DerechoFamilia(){

    return(
        <div id='dfamilia' className={derechoStyle.content}>
            <h2 className={derechoStyle.titleSection}>Derecho Familia</h2>
            {/* <div className={derechoStyle.logoSection}></div>     */}
            <div className={derechoStyle.sectionDescription}>
                <p>
                    Nuestro equipo de expertos te brinda un apoyo integral y personalizado para ayudarte a resolver cualquier problema y proteger tus derechos. Ya sea que necesites asesoramiento en temas de custodia, divorcio, distribución de bienes o cualquier otra cuestión relacionada con el derecho de familia, estamos aquí para ayudarte. Contáctanos hoy para obtener más información sobre cómo podemos ayudarte a navegar por cualquier desafío de manera efectiva
                </p>
            </div>
            <div className={derechoStyle.title_buscas_legal}><h2>BUSCAS ASISTENCIA LEGAL</h2></div>
            <div className={derechoStyle.listCards}>
            
                {
                    DATA.map((d,i)=>{
                        return(
                        <div key={i.toString()+'D'} className={derechoStyle.card}>
                            <div className={derechoStyle.conteText}>
                                {
                                    d.title==''
                                    ?''
                                    :
                                    <div  className={derechoStyle.title}>
                                    {/* <h3>¿Buscas asistencia en temas de familia?</h3> */}
                                </div>
                                }
                                <div className={derechoStyle.description}>
                                    <p>
                                        {
                                            d.description
                                        }
                                    </p>
                                </div>
                                <div className={derechoStyle.location}>
                                    <div><i className="fa-sharp fa-solid fa-location-dot"></i></div>
                                    <div>Potosí - Potosí, Bolivia</div>
                                </div>
                            </div>
                            {/* <div className={derechoStyle.contactContent}>
                                <div className={derechoStyle.icon}>
                                    <i className="fa-brands fa-whatsapp"></i>
                                </div>
                                <div className={derechoStyle.contact}>
                                    Contactar
                                </div>
                            </div> */}
                            <div className={derechoStyle.conten_imga_card}>
                                <Image
                                    src={d.image}
                                ></Image>
                            </div>
                        </div>);
                    })
                }
            </div>
            <div className={derechoStyle.contentRazones}>
                <div className={derechoStyle.conteCardsRazones}>
                <h3 className={derechoStyle.titleRazones}> ¿Cuando es necesario acudir a un abogado? </h3>
                <hr/>
                <div className={derechoStyle.bgDark}></div>
                  {
                    RAZONRES.map((d,i)=>{
                        return(
                            <div key={i.toString()+'R'} className={derechoStyle.cardRazones}>
                                <i className="fa-regular fa-circle-check"></i>
                                <span className={derechoStyle.textRazon}>
                                    {
                                        d.title
                                    }
                                </span>
                            </div>
                        );
                    })
                  }
                </div>
            </div>
        </div>
    );
}
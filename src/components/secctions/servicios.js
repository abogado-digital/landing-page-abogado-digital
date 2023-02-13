
import serviciosStyle from '../../styles/servicios.module.css'

import LIST_SERVICES from './listServices';


export default function Servicios(){



    return(
        <div id='servicios' className={serviciosStyle.container}>
            <div className={serviciosStyle.titleSection}> <h2>Nuestros servicios</h2></div>
            <div className={serviciosStyle.contenCards}>
                {
                    LIST_SERVICES.map((d,i)=>{
                        if(d.state){
                            return(
                                <div key={i} className={`${serviciosStyle.card} ${i===0?serviciosStyle.cardSelected:''}`}>
                                <div className={serviciosStyle.conten_img}>
                                    {/* <i className="service-icon  fa-solid fa-scale-unbalanced-flip"></i> */}
                                    {d.image}
                                </div>
                                <div className={serviciosStyle.title_card}>
                                    <span> {d.title}</span>
                                </div>
                            </div>
                            );
                        }
                    })
                }

               
            </div>
        </div>
    );
}
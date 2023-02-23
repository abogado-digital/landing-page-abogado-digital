import stylePasos from '../../../styles/pasosProcesoLegal.module.css';


export default function PasosProcesoLegal(){

    return(
        <div className={stylePasos.content}>
            
            <div className={stylePasos.content_title}> <h2>Pasos a seguir en derecho de familia</h2> </div>
            <div className={stylePasos.conttainer_box}>
                {/* contenet esperas */}
                <div className={stylePasos.content_all_esferas}>
                    
                    <div className={stylePasos.content_espera}>
                        <div className={stylePasos.espera1}></div>
                        <div className={stylePasos.content_detail}>
                            <div className={stylePasos.title}> Identificación de los problemas y objetivos:</div>
                            <div className={stylePasos.description}> La primera etapa es identificar los problemas y objetivos que se desean abordar en el proceso de derecho de familia, como la custodia de los hijos, la manutención, la distribución de bienes, entre otros.</div>
                        </div>

                    </div>
                    <div className={stylePasos.linea1}></div>
                    <div className={stylePasos.content_espera}>
                        <div className={stylePasos.espera1}></div>
                        <div className={stylePasos.content_detail}>
                            <div className={stylePasos.title}> Preparación y presentación de la demanda:</div>
                            <div className={stylePasos.description}> Una vez identificados los problemas y objetivos, se preparará y presentará una demanda ante un juez de derecho de familia, especificando los hechos relevantes y las solicitudes que se quieren hacer.</div>
                        </div>

                    </div>
                    <div className={stylePasos.linea1}></div>
                    <div className={stylePasos.content_espera}>
                        <div className={stylePasos.espera1}></div>
                        <div className={stylePasos.content_detail}>
                            <div className={stylePasos.title}> Notificación y contestación:</div>
                            <div className={stylePasos.description}> Después de la presentación de la demanda, el juez notificará a la otra parte, quien tendrá la oportunidad de contestar y presentar sus propios argumentos y pruebas.</div>
                        </div>

                    </div>
                    <div className={stylePasos.linea1}></div>
                    <div className={stylePasos.content_espera}>
                        <div className={stylePasos.espera1}></div>
                        <div className={stylePasos.content_detail}>
                            <div className={stylePasos.title}> Audiencia de instrucción y pruebas: </div>
                            <div className={stylePasos.description}> La audiencia de instrucción es una etapa en la que ambas partes presentarán sus pruebas y argumentos y el juez decidirá si hay suficiente evidencia para continuar con el juicio.</div>
                        </div>

                    </div>

                    <div className={stylePasos.linea1}></div>
                    <div className={stylePasos.content_espera}>
                        <div className={stylePasos.espera1}></div>
                        <div className={stylePasos.content_detail}>
                            <div className={stylePasos.title}> Sentencia: </div>
                            <div className={stylePasos.description}> Finalmente, el juez emitirá una sentencia en la que se resolverán los asuntos en disputa. La sentencia será definitiva y vinculante, a menos que sea apelada.</div>
                        </div>

                    </div>
                </div>
                {/* content descriptios */}
                <div className={stylePasos.content_all_de}>

                </div>
            </div>
        </div>
    );
}
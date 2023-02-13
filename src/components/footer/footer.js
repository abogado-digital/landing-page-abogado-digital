import Image from 'next/image';
import footerStyle from '../../styles/footer.module.css';
import imagePotosi from '../../../public/mapPotosi.jpg'

export default function Footer(){

    return(
        <div className={footerStyle.content}>
            <div className={footerStyle.information}>
                <div className={footerStyle.ubicacion}>
                    <h5>UBICACIÓN</h5>
                    <hr></hr>

                    <p>Todos nuestros servcios estan ubicados en la ciudad de Potosi</p>
                    <div className={footerStyle.mapContent}>
                        <i className="fa-sharp fa-solid fa-location-dot"></i>
                        <Image src={imagePotosi}>

                        </Image>
                    </div>
                </div>
                <div className={footerStyle.contactanos}>
                    <h5>CONTACTANOS</h5>
                    <hr></hr>
                    <div className={footerStyle.icon}>
                        <i className="fa-brands fa-whatsapp"></i>
                        <h4>Contacto directo</h4>
                    </div>
                </div>
                {/* <div className={footerStyle.externos}>
                    <h5>EXTERNOS</h5>
                </div> */}
                
            </div>
            <div className={footerStyle.copyrigh}>
            <hr/>
                <div>
                    © {new Date().getFullYear()} - LegalBo
                </div>
            </div>
        </div>
    );
}
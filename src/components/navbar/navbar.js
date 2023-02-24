import Image from 'next/image';
import sytleNavbar from '../../styles/navbar.module.css';
import src_img_facebook from '../../../public/facebook.png';

import src_png_logo from '../../../public/logo1.png';

export default function Navbar(){

    const redesSociales =[
        {
            name:'facebook',
            srcImg:src_img_facebook,
            link:'https://www.facebook.com/profile.php?id=100090351753976'
        },
        // {
        //     name:'tiktok',
        //     srcImg:src_img_facebook,
        //     link:''
        // },
        // {
        //     name:'twiter',
        //     srcImg:src_img_facebook,
        //     link:''
        // },
        // {
        //     name:'instagram',
        //     srcImg:src_img_facebook,
        //     link:''
        // },{
        //     name:'youtube',
        //     srcImg:src_img_facebook,
        //     link:''
        // }
    ]



    return <div className={sytleNavbar.navbar}>
        
        <div className={sytleNavbar.container}>
            <div className={sytleNavbar.content_logo}>
                <div className={sytleNavbar.logo}>
                    <Image src={src_png_logo}>

                    </Image>
                </div>
                <div>
                    <h2>Legalbo</h2>
                    <p>Ejerce tú derecho</p>
                </div>
            </div>
            <div className={sytleNavbar.redes_sociales}>
                <div>
                    {
                        redesSociales.map((d,i)=>{
                            return <a key={i.toString()+'redes'} href={d.link} rel="noopener">
                                <Image
                                src={d.srcImg}
                                width={34}
                                height={34}
                                key={i.toString()+'resd'}
                                >
                                </Image>
                            </a>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}
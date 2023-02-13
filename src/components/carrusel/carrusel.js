
import { useEffect, useState } from 'react';

import styleCarrusel from '../../styles/carrusel.module.css'

import srcImage from '../../../public/carrusel_1.jpg';
import srcImage2 from '../../../public/carrusel_2.jpg'
import Image from 'next/image';

export default function Carrusel(){

    const[indexImage, setIndexImage]=useState(0);

  

    const arrImages =[
        {
            name : 'image1',
            sourceFile : srcImage
        },{
            name : 'image2',
            sourceFile : srcImage2
        },{
            name : 'image3',
            sourceFile : srcImage
        },{
            name : 'image4',
            sourceFile : srcImage2
        }
    
    ]

    const handleIndexImage=(direction='next')=>{
        if(direction=='next'){
            indexImage<arrImages.length-1 ? setIndexImage(indexImage+1) : setIndexImage(0)
        }
        if(direction=='back'){
            indexImage<1 ? setIndexImage(arrImages.length-1) : setIndexImage(indexImage-1)
        }
    }

    useEffect(()=>{
        setTimeout(()=>{handleIndexImage('next')},3000)
    })

    return (
        <div className={styleCarrusel.content}>
            <div onClick={()=>handleIndexImage('back')}  className={styleCarrusel.back}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div className={styleCarrusel.images} >
                {/* <h2>{indexImage}</h2>d */}
               <Image alt='imag' src={arrImages[indexImage].sourceFile}>

               </Image>
            </div>
            <div onClick={()=>handleIndexImage('next')} className={styleCarrusel.next}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div>
    );

}


import { useEffect, useRef, useState } from 'react';

import styleCarrusel from '../../styles/carrusel.module.css'

import srcImage from '../../../public/carrusel_1.jpg';
import srcImage2 from '../../../public/carrusel_2.jpg'
import Image from 'next/image';

export default function Carrusel(){

    const[indexImage, setIndexImage]=useState(1);

    const myRef = useRef();

    const [widthForScroll, setWdthForScroll] = useState(0)

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

    // useEffect(()=>{
    //     setTimeout(()=>{handleIndexImage('next')},4000)
    // })

    useEffect(()=>{
       var setinterval  = setInterval((()=>{
        controlScroll('next')
       }),4000) 
       return () => clearInterval(setinterval);
    },[widthForScroll])

 const controlScroll=(direction='next')=>{
//    console.log(myRef.current.childNodes[3])
//    console.log(myRef.current.innerHTML)
//    myRef.current.innerHTML=myRef.current.childNodes[1].outerHTML


//    console.log(myRef.current.scrollLeftMax)
//    console.log(window.innerWidth)
    

    if(direction=='next'){
        widthForScroll<arrImages.length-1 ? setWdthForScroll(widthForScroll+1) : setWdthForScroll(0)
    }
    if(direction=='back'){
        widthForScroll<1 ? setWdthForScroll(arrImages.length-1) : setWdthForScroll(widthForScroll-1)
    }
    var width = window.innerWidth * widthForScroll
    // console.log(width)
    myRef.current.scroll(width,0);
    // setWdthForScroll(widthForScroll+1);
    
 }


    return (
        <div className={styleCarrusel.content}>
            <div onClick={()=>controlScroll('back')}  className={styleCarrusel.back}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <div ref={myRef} className={styleCarrusel.images} >
                {/* <h2>{indexImage}</h2>d */}
               {/* <Image alt='imag' src={arrImages[indexImage].sourceFile}>

               </Image> */}

               {
                arrImages.map((d,i)=>{
                    return  <Image key={i.toString()+'ima_carrusel'} alt='imag' id={`image${i}`} src={d.sourceFile}>

                    </Image>
                })
               }
            </div>
            {/* <div onClick={()=>handleIndexImage('next')} className={styleCarrusel.next}> */}
            <a  onClick={()=>controlScroll('next')} className={styleCarrusel.next}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </a>
        </div>
    );

}

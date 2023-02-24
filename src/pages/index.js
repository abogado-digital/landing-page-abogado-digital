import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import Navbar from '../components/navbar/navbar'
import MenuOption from '../components/menuOption/menuOption'
import Carrusel from '@/components/carrusel/carrusel'
import Servicios from '@/components/secctions/servicios'
import DerechoFamilia from '@/components/secctions/detaild_services/derecho_familia'
import Footer from '@/components/footer/footer'
import PasosProcesoLegal from '@/components/secctions/pasosProcesos/pasosProcesoLegal'
import ContactServices from '@/components/contactServices/contactServices'
import ButtonWhatsapp from '@/components/buttonWahtasapp/buttonWhatsapp'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
      <Head>
        <title>AbogdoDigitalBo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://kit.fontawesome.com/54e18076f4.js" crossorigin="anonymous"></script> */}
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" /> */}
      </Head>
      <Navbar/>
      <MenuOption/>
      <Carrusel/>
      <main className={styles.main}>
        <Servicios/>
        <DerechoFamilia/>
        {/* <div className={styles.description}>
        </div> */}

        <PasosProcesoLegal/>
        <ContactServices />
      </main>
        <ButtonWhatsapp></ButtonWhatsapp>
      <Footer/>
    </>
  )
}

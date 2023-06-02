import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from "@/components/header/header";
import Menu from "@/components/menu/menu";
import Mobile from "@/components/menu/mobile-menu/mobile";
import Banner from "@/components/banner/banner";
import Consultation from "@/components/consultation/consultation";
import Info from "@/components/info/info";
import Price from "@/components/price/price";
import Diagnostics from "@/components/diagnostics/diagnostics";
import Reviews from  "@/components/reviews/reviews";
import Diploms from "@/components/diploms/diploms";
import Subs from "@/components/subs/subs";
import Parlor from "@/components/parlor/parlor";
import Documents from "@/components/documents/documents";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Policy from "@/components/policy/policy";
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [modalActive, setModalActive] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  
  return (
    <>
      <Head>
        <title>«МАКСМЕД» - Клиника мануальной терапии и массажа Гаркина Максима</title>
        <meta name="description" content="КЛИНИКА МАНУАЛЬНОЙ ТЕРАПИИ И МАССАЖА" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header setMobileActive={setMobileActive} mobileActive={mobileActive} setModalActive={setModalActive}/>
        <Menu />
        {
          mobileActive && <Mobile setMobileActive={setMobileActive} />
        }
        <Banner setModalActive={setModalActive} />
        <Consultation openModal={modalActive} setOpenModal={setModalActive} />
        <Info />
        <Price />
        <Diagnostics />
        <Reviews />
        <Diploms />
        <Subs />
        <Parlor setModalActive={setModalActive} />
        <Documents />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

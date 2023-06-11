import Head from "next/head";
import Header from "@/components/header/header";
import Menu from "@/components/menu/menu";
import Mobile from "@/components/menu/mobile-menu/mobile";
import Footer from "@/components/footer/footer";
import {useState} from "react";
import Policy from "@/components/policy/policy";


export default function Privacy() {
  const [mobileActive, setMobileActive] = useState(false);
  return (
    <>
      <Head>
        <title>«МАКСМЕД» - Клиника мануальной терапии и массажа Гаркина Максима</title>
        <meta name="description" content="КЛИНИКА МАНУАЛЬНОЙ ТЕРАПИИ И МАССАЖА" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <main>
        <Header setMobileActive={setMobileActive} mobileActive={mobileActive} />
        <Menu />
        {
          mobileActive && <Mobile setMobileActive={setMobileActive} />
        }
        <Policy />
        <Footer />
      </main>
    </>
  )
}

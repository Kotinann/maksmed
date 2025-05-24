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
          <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/apple-touch-icon-152x152.png" />
          <link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196" />
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/favicon-128.png" sizes="128x128" />
          <meta name="application-name" content="&nbsp;"/>
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="mstile-144x144.png" />
          <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
          <meta name="msapplication-square150x150logo" content="mstile-150x150.png" />
          <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
          <meta name="msapplication-square310x310logo" content="mstile-310x310.png" />
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

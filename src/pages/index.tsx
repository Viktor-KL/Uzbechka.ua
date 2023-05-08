import Head from 'next/head'
import type { NextPage } from 'next'
import Offer from 'components/screens/Offer/Offer';
import About from 'components/screens/About/About';
import Menu from 'components/screens/Menu/Menu';
import BannerMenu from 'components/screens/BannerMenu/BannerMenu';
import BannerInstagram from 'components/screens/BannerInstagram/BannerInstagram';
import Benefits from 'components/screens/Benefits/Benefits';
import Faq from 'components/screens/Faq/Faq';
import Feedback from 'components/screens/Feedback/Feedback';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Uzbechka.ua</title>
      </Head>
      <Offer />
      <About />
      <Menu />
      <BannerMenu />
      <Benefits />
      <BannerInstagram />
      <Feedback />
      <Faq />
    </div>
  )
}

export default Home;
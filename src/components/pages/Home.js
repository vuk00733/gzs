import React from 'react';
import '../../App.css';
import Numbers from '../Numbers';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Divider from '../Divided';
import CardsHome from '../CardsHome';
import Sponsors from '../Sponsors';
import { homeObjOne, homeObjTwo, homeObjThree} from '../Data';
import { SponsorOne, FriendOne, PartnerOne } from '../Data';

function Home() {
  return (
    <>
      <HeroSection />
      {/*<Cards />*/}
      <Divider {...homeObjThree} />
      <Divider {...homeObjOne} />
      <Numbers />
      <Divider {...homeObjTwo} />
      <CardsHome />
      <Sponsors {...SponsorOne} />
      <Sponsors {...FriendOne} />
      <Sponsors {...PartnerOne} />
      <Footer />
    </>
  );
}

export default Home;

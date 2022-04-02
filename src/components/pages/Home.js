import React from 'react';
import '../../App.css';
import Numbers from '../Numbers';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Divider from '../Divided';
import Sponsors from '../Sponsors';
import Groups from '../Groups';
import { homeObjOne, homeObjTwo, homeObjThree} from '../Data';
import { SponsorOne, FriendOne, PartnerOne } from '../Data';

function Home() {
  return (
    <>
      <HeroSection />
      <Numbers />
      <Divider {...homeObjThree} />
      <Divider {...homeObjOne} />
      <Divider {...homeObjTwo} />
      <Groups />
      <Sponsors {...SponsorOne} />
      <Sponsors {...FriendOne} />
      <Sponsors {...PartnerOne} />
      <Footer />
    </>
  );
}

export default Home;

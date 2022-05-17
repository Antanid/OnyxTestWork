import React from 'react';
import Additional from './Additional/Additional';
import Contacts from './Contact/Contact';

import Footer from './Footer/Footer';

import CountdownTimer from './CountdownTimer/CountdownTimer'
import OurAdvantages from './OurAdvantages/OurAdvantages';
import OurRoute from './OurRoute/OurRoute';
import Photo from '../components/Photo/Photo';
import PreEnd from './PreEnd/PreEnd';
import Questions from './Quest/Questions';
import Gift from './Gift/SectionGift';
import Service from './Service/Service';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Team from './Team/Team';
import Test from './Test/Test';
import Video from './Video/Video';

function AllHead() {

    return (
        <div>
            <OurAdvantages />
            <OurRoute />
            <Test />
            <Photo />
            <Video />
            <Team />
            <Service />
            <SpecialOffer />
            <Gift />
            <Questions />
            <Additional />
            <Contacts />
            <PreEnd />
            <Footer />
        </div>
    )
}

export default AllHead;
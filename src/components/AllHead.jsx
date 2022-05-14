import React from 'react';
import Additional from './Additional/Additional';
import Contacts from './Contact/Contact';

import Footer from './Footer';

import OurAdvantages from './OurAdvantages/OurAdvantages';
import OurRoute from './OurRoute/OurRoute';
import Photo from '../components/Photo/Photo';
import PreEnd from './PreEnd/PreEnd';
import Questions from './Quest/Questions';
import Gift from './SectionGift';
import Service from './Service';
import SpecialOffer from './SpecialOffer';
import Team from './Team/Team';
import Test from './Test';
import Video from './Video';

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
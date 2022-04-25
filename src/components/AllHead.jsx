import React from 'react';
import Additional from './Additional';
import Contacts from './Contact';
import Footer from './Footer';

import OurAdvantages from './OurAdvantages';
import OurRoute from './OurRoute';
import Photo from './Photo';
import PreEnd from './PreEnd';
import Questions from './Quest/Questions';
import Gift from './SectionGift';
import Service from './Service';
import SpecialOffer from './SpecialOffer';
import Team from './Team';
import Test from './Test';
import Video from './Video';

function AllHead() {



    return (
        <div>
            <OurAdvantages />
            <OurRoute />
            <Test />
            <Photo/>
            <Video/>
            <Team/>
            <Service/>
            <SpecialOffer/>
            <Gift/>
            <Questions/>
            <Additional/>
            <Contacts/>
            <PreEnd/>
            <Footer/>
        </div>
    )
}

export default AllHead;
import React from 'react'
import NavManu from './Navmenyone'
import Banner from './Banner'
import HotLocation from './HotLocation'
import TopDevelopers from './TopDevelopers'
import TrendingProject from './TrendingProject'
import Footer from './Footer'
import '@fontsource/montserrat'; // Defaults to weight 400
import ConnectPropertyExperts from './ConnectWithPropertyExperts'
import PlanSiteVisit from './PlanVisit'
import WhatsAppWidget from './Whatsapp'
import { whatsappData } from '../data'
import Faq from './Faq'

const Home = () => {
    return (
        <div>
            <NavManu />
            <Banner />
            <PlanSiteVisit />
            <div id='developer'>
                <TrendingProject />
            </div>
            <div id='location'>
                <HotLocation />
            </div>
            <TopDevelopers />
            <ConnectPropertyExperts />
            <Faq />
            <WhatsAppWidget whatsappData={whatsappData} />
            <Footer />
        </div>
    )
}

export default Home

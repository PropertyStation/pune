import React from 'react'
import Navbar from './components/NavBar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Overview from './components/Overview'
import ResidencialProjects from './components/HotLocation'
import PlanSiteVisit from './components/PlanSiteVisit'
import ConnectPropertyExperts from './components/ConnectPropertyExperts'

import Home from './components/Home'
import WhatsAppWidget from './components/Whatsapp'
import { whatsappData } from './data'
import FAQ from './components/FAQ'
function Homepage() {
    return (
        <>

            <div>
                <Navbar />
                <Banner />
                <div id='overview'>
                    <Overview />
                </div>
                <PlanSiteVisit />
                <div id='residential'>
                    <ResidencialProjects />
                </div>
                <ConnectPropertyExperts />
                <FAQ/>
                <WhatsAppWidget whatsappData={whatsappData}/>
                <Footer />
            </div>
        </>
    )
}

export default Homepage

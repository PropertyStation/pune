import React from 'react'
import Navbar from './components/NavBar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Overview from './components/Overview'
import ResidencialProjects from './components/HotLocation'
import PlanSiteVisit from './components/PlanSiteVisit'
import ConnectPropertyExperts from './components/ConnectPropertyExperts'
function Thanks() {
  return (
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
                <Footer />
    </div>
  )
}

export default Thanks

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Banner from './Banner'
import Overview from './Overview'
import ResidencialProjects from './HotLocation'
// import TopDevelopers from './components/TopDevelopers'
import ConnectPropertyExperts from './ConnectPropertyExperts'
import PlanSiteVisit from './PlanSiteVisit'
const Home = () => {
    return (

        <div>
            <div id='overview'>
                <Overview />
            </div>
            <div id='residential'>
                <ResidencialProjects />
            </div>


        </div>
    )
}

export default Home

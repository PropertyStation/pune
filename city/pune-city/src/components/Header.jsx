import React from 'react'

import HotLocation from './HotLocation'
import TrendingProject from './TrendingProject'

const Home = () => {
    return (

        <div>
            <div id='location'>
                <HotLocation />
            </div>
            <div id='developer'>
                <TrendingProject />
            </div>


        </div>
    )
}

export default Home

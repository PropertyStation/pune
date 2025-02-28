import React,{useState} from 'react'
import Banner from '../../components/Banner'
import NavManu from '../../components/Navmenyone'
import WhatsAppWidget from '../../components/Whatsapp'
import {form, whatsappData } from '../../data'
import PlanSiteVisit from '../../components/PlanVisit'
import PropertyCard from './Card'
import TopDevelopers from '../../components/TopDevelopers'
import Faq from '../../components/Faq'
import ConnectPropertyExperts from '../../components/ConnectWithPropertyExperts'
import Footer from '../../components/Footer'
import { puneWestData } from './data'
const WestPune = () => {
  const [propertyData, setPropertyData] = useState(puneWestData['West Pune']);
  return (
    <div>
      <WhatsAppWidget whatsappData={whatsappData}/>
      <NavManu/>
      <Banner/>
      <PlanSiteVisit/>
      <PropertyCard carddata={propertyData} form={form}/>
      <ConnectPropertyExperts/>
      <TopDevelopers/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default WestPune

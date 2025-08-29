import { useState } from 'react'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Hero from './components/hero.jsx'
import BadgeCard from './components/trustbadges'
import FeaturedCategories from './components/categories'
import ServicesStrip from './components/services.jsx'
import CategoryCard from './components/categoryCard'
import  FeatureItem from './components/prescriptions'
import  StoreLocator from './components/storeLocator'
import  InfoTiles from './components/infofiles.jsx'
import  Newsletter from './components/newsletter.jsx'

 




import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Hero/>
    <BadgeCard/>
    <ServicesStrip/>
    <FeaturedCategories/>
    <ServicesStrip/>
    <CategoryCard/>
    < FeatureItem/>  
    <StoreLocator></StoreLocator>
    <InfoTiles/> 
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App

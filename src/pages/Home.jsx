import React from 'react'
import TrendingApps from './TrendingApps'
import Container from '../components/Container/Container'
import AppCard from '../components/AppCard/AppCard'
import HeroSection from '../components/HeroSection/HeroSection'
import LoadImg from "../assets/logo.png";

const Home = () => {
  return (
    <div className='bg-[#e9e9e9] min-h-screen'>
      <HeroSection></HeroSection>
        <Container>
                <TrendingApps ></TrendingApps>
        </Container>
    </div>
  )
}

export default Home;
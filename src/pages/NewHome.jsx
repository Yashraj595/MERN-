import React from 'react'
import Navigation from '../components/Navigation' ;
import './NewHome.css'
import Footer from '../components/Footer';
import HomePageDesign from '../components/HomePageDesign'
import SecondHome from '../components/SecondHome';
// import Box from '../components/Box'

const NewHome = () => {
  return (
    <>
      <Navigation />

      <HomePageDesign  />
    
    <SecondHome/>

      <Footer />
    </>
  );
}

export default NewHome ;

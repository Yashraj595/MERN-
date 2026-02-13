import React from 'react'
import Navigation from '../components/Navigation' ;
import './NewHome.css'
import Footer from '../components/Footer';
import HomePageDesign from '../components/HomePageDesign'

const NewHome = () => {
  return (
    <>
      <Navigation />

      <HomePageDesign  />
      <HomePageDesign />
      <HomePageDesign />

      <Footer />
    </>
  );
}

export default NewHome ;

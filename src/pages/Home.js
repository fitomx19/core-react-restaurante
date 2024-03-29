import React from 'react'
import Layout from '../components/Layout';
import PanelInicio from '../components/Panel_Inicio';
import Caracteristicas from '../components/Caracteristicas';
import Precio from '../components/Precio';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Faq from '../components/Faq';
import '../App.css';
import Items from '../components/items';


const Home = () => (
    
    <Layout>
        <NavBar/>
        <PanelInicio/>
        <Caracteristicas/>
        <Items/>
        <Precio/> 
        <Faq/>
        <Footer/>
    </Layout>
)

export default Home
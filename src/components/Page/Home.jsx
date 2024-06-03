import React from 'react';
import Hero from '../Hero';
import Services from '../Services';
import CasesOfSuccess from '../CasesOfSuccess';
import Team from '../Team';
import Contact from '../Contact';
import Footer from '../Footer';
import Header from '../Header';
import Head from '../Head';
import Articles from '../Articles';

function Home() {
    return (
        <div>
            <Head />
            <div className="app">
                <Header />
                <main>
                    <Hero />
                    <Services />
                    <Articles />
                    <CasesOfSuccess />
                    <Team />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
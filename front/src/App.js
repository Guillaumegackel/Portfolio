import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Work } from './container';

import { Navbar } from './components';

import './App.scss'

// const txtAnim = document.getElementById('txt-anim');

// console.log(new Typewriter(txtAnim));


const App = () => {
  return <div className='app'>
	  <Navbar />
	  <Header />
	  <About />
	  <Skills />
	  <Work />
	  <Testimonials />
	  <Footer />


  </div>;


};

export default App;

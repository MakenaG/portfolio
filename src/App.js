import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;

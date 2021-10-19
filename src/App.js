import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MainPage from './Pages/MainPage';
import Details from './Pages/Details';
import About from './Pages/About';
import Comments from './Pages/Comments';


function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={ MainPage } />
        <Route path="/details" component={ Details } />
        <Route path="/about" component={ About } />
        <Route path="/comments" component={ Comments } />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

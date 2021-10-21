import React from 'react';
import { HashRouter as BrowserRouter, Route } from 'react-router-dom';
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
      <BrowserRouter basename='/my-app-movies'>
        <Route exact path="/" component={ MainPage } />
        <Route exact path="/details" component={ Details } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/comments" component={ Comments } />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

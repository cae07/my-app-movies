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
        <Route exact path="/my-app-movies" component={ MainPage } />
        <Route exact path="/my-app-movies/details" component={ Details } />
        <Route exact path="/my-app-movies/about" component={ About } />
        <Route exact path="/my-app-movies/comments" component={ Comments } />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

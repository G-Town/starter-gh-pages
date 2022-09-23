import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header'
import Home from './Home';
import About from './About';

class Main extends Component {

  render() {
    const HomePage = () => {
      return (
        <Home>

        </Home>
      );
    }

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    )
  }
}

export default Main;
import React, { Component } from 'react';
import Router from "./components/Router/Router";
import Footer from "./components/Pages/Footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router/>
        <Footer/>
    </div>
    );
  }
}

export default App;

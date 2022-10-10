import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Home/Landing";
import Movie from "./components/Home/Movie";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <div className="footer">
              <Footer />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

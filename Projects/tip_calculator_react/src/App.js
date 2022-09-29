import React from 'react';
import Footer from './Footer';
import Header from './Header';
import InputField from './InputField';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="appDivision">
        <Header />
        <InputField />
        <Footer />
      </div>
    );
  }
}

export default App;

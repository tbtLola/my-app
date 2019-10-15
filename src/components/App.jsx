import Flexbox from 'flexbox-react';
import React from 'react';
import Heading from './Heading'
import Content from './Content'
import Footer from './Footer'
import '../App.css';
import './App.css'

class App extends React.Component {
  render() {
    return (
      
      <Flexbox className="mainApp" flexDirection="column" minHeight="100vh">

      <Heading></Heading>
      <Content></Content>
      <Footer></Footer>
      </Flexbox>
    
    );
  }
}

export default App;

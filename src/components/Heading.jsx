import React from 'react';
import Flexbox from 'flexbox-react';
import './Heading.css'

const Heading = props => (
    // <header className="top" style={{flex: 1, flexDirection: 'row',  background:'red'} }>TEST</header>
  <Flexbox className="Heading" element="header" height="60px">
    <h1 className="Title">
    Header
    </h1>
  </Flexbox>
);

export default Heading; 
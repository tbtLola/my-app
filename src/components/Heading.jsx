import React from "react";
import Flexbox from "flexbox-react";
import "./Heading.css";
import portpic from "./portpic.png";

const Heading = props => (
  // <header className="top" style={{flex: 1, flexDirection: 'row',  background:'red'} }>TEST</header>
  <Flexbox className="Heading" element="header" height="60px">
    <div class="item">
      <h1 className="Title">Tony Tea</h1>
      <img className="profilePic" src={portpic}></img>
    </div>
  </Flexbox>
);

export default Heading;

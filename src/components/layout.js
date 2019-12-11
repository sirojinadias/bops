import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Intro from "./intro";
import Bio from "./bio";
import Player from "./player";
import Contact from "./contact";

import styled from "styled-components";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Header />
    <Intro />
    <Columns className="columns is-gapless is-vcentered">
      <div className="column">
        <Bio />
      </div>
      <div className="column">
        <Player />
      </div>
    </Columns>
    <Contact />
  </div>
);

const Columns = styled.div`
  background: #d6938a;
  margin-bottom: 0;
`

export default Layout;
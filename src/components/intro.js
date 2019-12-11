import React from "react";

import "./style.scss";

import styled from "styled-components";

const Intro = ({ siteTitle }) => (
  <Section className="hero is-small center">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">Garage pop from Paris</h1>
        <h2 className="subtitle">
          For fans of : <Hl>Beach Boys</Hl> / <Hl>Kinks</Hl> /{" "}
          <Hl>Lemon Twigs</Hl> / <Hl>Ty Segall</Hl> / <Hl>Girlband</Hl>
        </h2>
        <h2 className="subtitle">
          Labels : <Hl>RCR (En)</Hl> / <Hl><a href="https://mauvaisefoirecords.bandcamp.com/" target="_blank">Mauvaise Foi Records (Fr)</a></Hl>
        </h2>
        <h2 className="subtitle">
          Management : <Hl><a href="#contacts">La Pieuvre</a></Hl>
        </h2>
      </div>
    </div>
  </Section>
);

export default Intro;

const Section = styled.section`
  background: #fff;
  padding: 1vh;
`;

const Hl = styled.span`
  font-weight: bold;
  color: #bababa;
  a {
    color: #bababa;
  }
`;

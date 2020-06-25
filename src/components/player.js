import React from "react";

import "./style.scss";

import styled from "styled-components";

const Player = ({ siteTitle }) => (
  <Section className="hero center">
    <div className="hero-body">
      <div className="container">
        <iframe title="listentobops" width="100%" height="340" scrolling="no" frameborder="no" src="https://fidbak.audio/bops/embed/9bb57d3c8ab7bc72faa6b545/02fb4f"></iframe>
      </div>
    </div>
  </Section>
);

export default Player;

const Section = styled.section`
  background: #adbd9e;
  color: #1f1f1f;
`;

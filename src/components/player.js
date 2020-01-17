import React from "react";

import "./style.scss";

import styled from "styled-components";

const Player = ({ siteTitle }) => (
  <Section className="hero center">
    <iframe title="listentobops" width="100%" height="340" scrolling="no" frameborder="no" src="https://fidbak.audio/bops/embed/9bb57d3c8ab7bc72faa6b545"></iframe>
  </Section>
);

export default Player;

const Section = styled.section`
  background: #d6938a;
  color: #1f1f1f;
`;

import React from "react";

import "./style.scss";

import styled from "styled-components";

const Player = ({ siteTitle }) => (
  <Section className="hero center">
    <div className="hero-body">
      <div className="container">
        <iframe
          style={{ border: 0, width: "400px", height: "472px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3074666298/size=large/bgcol=1f1f1f/linkcol=cacaca/artwork=small/transparent=true/"
          seamless
        >
          <a href="http://bops.bandcamp.com/album/bops">BOPS by BOPS</a>
        </iframe>
      </div>
    </div>
  </Section>
);

export default Player;

const Section = styled.section`
  background: #adbd9e;
  color: #1f1f1f;
`;

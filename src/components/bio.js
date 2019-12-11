import React from "react";

import "./style.scss";

import styled from "styled-components";

const Bio = ({ siteTitle }) => (
  <Section className="hero center">
    <div className="hero-body">
      <div className="container">
        <p>
          Fondé par trois frères, <strong>BOPS</strong> est un groupe de garage
          pop qui voit le jour en 2015 sur la scène rennaise avec un premier EP
          “156”. Avec un duo de voix au centre de leurs compositions, les trois
          frères partagent une vision ingénieuse de la chanson pop. Pourtant
          loin de se cantonner à quelques références esthétiques, leur album
          frappe par sa diversité et fait naître une pop espiègle mais
          puissante. Les trois frères ont eu le temps de digérer les chœurs des
          Beach Boys, la pop des Kinks ou les premiers albums de Supergrass
          avant de s’attaquer aux sons tonitruants de la scène garage et indé
          américaine des frères D’Addario des Lemon Twigs, de Ty Segall ou de
          Girlband. Il aura fallu moins de deux ans aux BOPS pour sortir leur
          premier album éponyme. Sorti sous le label parisien Mauvaise Foi
          Records et sur le label anglais RCR à l’hiver 2017, cet opus éponyme
          permet aux trois frères de partir à la conquête de l’Europe en une
          soixante de dates.{" "}
        </p>
      </div>
    </div>
  </Section>
);

export default Bio;

const Section = styled.section`
  background: #d6938a;
  color: #1f1f1f;
  height: 100%;
`;

import React from "react";

import "./style.scss";

import styled from "styled-components";

const Bio = ({ siteTitle }) => (
  <Section className="hero center">
    <div className="hero-body">
      <div className="container">
        <H3>Bio</H3>
        <p>
          Aux visages d’anges les enfants terribles se muent.
Grâce à un premier album aux accents garage-pop, le trio se fait remarquer et confirme en live l’exubérance de sa musique.
Une série de concerts européens, et la réalisation d’un clip de 40 minutes bouclées, BOPS retourne maintenant en studio avec des projets tout aussi ambitieux.
Les influences du passé sont apprivoisées (Kinks, Supergrass), le groupe embrasse à présent une vision ingénieuse et résolument personnelle de la pop.
Rejoints sur scène par un quatrième membre au clavier et à la guitare, <strong>BOPS</strong> évoque l’audace de BC Camplight, la nonchalance de la Fat White Family et la puissance de Ty Segall. {" "}
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

const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

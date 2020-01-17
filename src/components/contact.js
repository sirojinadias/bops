import React from "react";
import "./style.scss";
import Pieuvre from "./pieuvre";

import styled from "styled-components";

const Contact = () => (
  <Section className="footer center" id="contacts">
    <div className="content has-text-centered">
      <H3>Management / Promotion</H3>
      <p className="media center">
        <Pieuvre />
      </p>
      <p className="is-size-4">
        Alexia Vittori :{" "}
        <a href="mailto:alexia@lapieuvre-mgmt.fr">
          alexia@lapieuvre-mgmt.fr
            </a>
        <br />
        Mike Jamelot :{" "}
        <a href="mailto:mike@lapieuvre-mgmt.fr">mike@lapieuvre-mgmt.fr</a>
      </p>
      &nbsp;
          <H3 className="is-size-4">Groupe</H3>
      <p className="is-size-4">
        <a href="mailto:bopsbrother@gmail.com">bopsbrother@gmail.com</a>
      </p>
    </div>
  </Section>
)

export default Contact;

const Section = styled.footer`
  background: #adbd9e;
  margin-bottom: 0;
`;


const H3 = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
`;

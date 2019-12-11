import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";
import Pieuvre from "./pieuvre";

import styled from "styled-components";

const Contact = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            facebook
            instagram
            youtube
          }
        }
      }
    `}
    render={data => (
      <Section className="footer center" id="contacts">
        <div className="content has-text-centered">
          <p className="is-size-4">MANAGEMENT / PROMOTION</p>
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
          <p className="is-size-4">GROUPE</p>
          <p className="is-size-4">
            <a href="mailto:bopsbrother@gmail.com">bopsbrother@gmail.com</a>
          </p>
          <article className="media center">
            <span className="icon">
              <a
                href={data.site.siteMetadata.facebook}
                target="_blank"
                title="Facebook"
              >
                <FaFacebook size="fa-3x" color="#d6938a" style={{ marginRight: "1vw" }} />
              </a>
            </span>
            &nbsp;
            <span className="icon" style={{ paddingRight: "1vw" }}>
              <a
                href={data.site.siteMetadata.instagram}
                target="_blank"
                title="Instagram"
              >
                <FaInstagram size="fa-3x" color="#d6938a" style={{ marginRight: "1vw" }} />
              </a>
            </span>
            &nbsp;
            <span className="icon">
              <a
                href={data.site.siteMetadata.youtube}
                target="_blank"
                title="YouTube"
              >
                <FaYoutube size="fa-3x" color="#d6938a" />
              </a>
            </span>
          </article>
        </div>
      </Section>
    )}
  />
);

export default Contact;

const Section = styled.footer`
  background: #fefefe;
`;

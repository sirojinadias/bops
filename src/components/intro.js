import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { StaticQuery, graphql } from "gatsby";

import "./style.scss";

import styled from "styled-components";

const Intro = ({ siteTitle }) => (
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
      <Section className="hero is-small center">
        <div className="hero-body">
          <div className="container">
            <h2 className="title" style={{ marginBottom: '0.5rem' }}>Garage pop</h2>
            <h3 className="title" style={{ marginBottom: '1rem', fontSize: '1.4em' }}>Paris (FR)</h3>
            <p>
              Influences : <Hl>B.C Camplight</Hl> / <Hl>Ty Segall</Hl> /{" "}
              <Hl>Kinks</Hl> / <Hl>Lemon Twigs</Hl> / <Hl>Girlband</Hl>
            </p>
            <article className="media" style={{ marginTop: '2rem' }}>
              <span className="icon is-medium" style={{ marginRight: "10px" }}>
                <a
                  href={data.site.siteMetadata.facebook}
                  target="_blank"
                  title="Facebook"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size="fa-xs" color="#333" />
                </a>
              </span>
              &nbsp;
            <span className="icon is-medium" style={{ marginRight: "10px" }}>
                <a
                  href={data.site.siteMetadata.instagram}
                  target="_blank"
                  title="Instagram"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size="fa-xs" color="#333" />
                </a>
              </span>
              &nbsp;
            <span className="icon is-medium">
                <a
                  href={data.site.siteMetadata.youtube}
                  target="_blank"
                  title="YouTube"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size="fa-xs" color="#333" />
                </a>
              </span>
            </article>
          </div>
        </div>
      </Section>)
    }
  />
);

export default Intro;

const Section = styled.section`
  background: #fafaf6;
  padding: 1vh;
`;

const Hl = styled.span`
  font-weight: bold;
  color: #a9a9a9;
`;

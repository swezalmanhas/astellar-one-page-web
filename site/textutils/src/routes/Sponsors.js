import React from "react";
import { Container, Row } from "react-bootstrap";
import SponsorItem from "./SponsorItem";
import SponsorTier from "./SponsorTier";
import Button from "react-bootstrap/Button";
import "./Sponsors.css";

const TierList = [
  {
    text: "Youth Incorporated",
    title: "YOUTH MEDIA SPONSOR",
    link: {
      // src: require("../../Assets/youthinc.png"),
      url: "https://youthincmag.com/",
    },
  },

  {
    text: "Infynas",
    title: "EDUCATION PARTNER",
    link: {
      // src: require("../Assets/infynas.png"),
      url: "https://infynaslearn.com/",
    },
  },
];

const sponsorList = [
  {
    text: "Taskade",
    link: {
      // src: require("../Assets/taskade.webp"),
      url: "https://www.taskade.com/",
    },
  },

  {
    text: "Dunk Dudes",
    link: {
      // src: require("../../Assets/prtk.png"),
      url: "https://www.instagram.com/dunkdudes.in/",
    },
  },
];

const tSpons = {
  text: "Internship & Training",
  title: "TITLE SPONSOR",
  link: {
    src: require("../Assets/inp.png"),
    url: "https://www.linkedin.com/company/internship-training/",
  },
};

function Sponsors() {
  return (
    <>
      <Container fluid className="sponsor-section" id="Sponsors">
        <Container>
          <h1 className="white"
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              letterSpacing: "0.5rem",
              paddingBottom: "3rem",
            }}
          >
            SPONSORS
          </h1>
          <Row>
            <div className="title-sponsor">
              <a
                href={tSpons.link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    letterSpacing: "0.1rem",
                    paddingBottom: "0.7rem",
                  }}
                >
                  <span className="white"> {tSpons.title} </span>
                </h1>
                <div className="title-sponsor-tier-item">
                  <div className="tBox">
                    <img src={tSpons.link.src} alt={tSpons.text}></img>
                    <span style={{ textAlign: "center" }}>
                      {tSpons.text}{" "}
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="popup"
                        fill="none"
                        height="16"
                        stroke="#eeeeee"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        width="16"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8"></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>

            <div className="tier-sponsors">
              {TierList.map((data, idx) => (
                <SponsorTier data={data} key={idx} />
              ))}
            </div>

            <h1 className="white"
              style={{
                fontSize: "1.7rem",
                fontWeight: "600",
                letterSpacing: "0.5rem",
                paddingBottom: "0.7rem",
              }}
            >
              GENERAL SPONSORS 
            </h1>
            <div className="general-sponsor">
              {sponsorList.map((data, idx) => (
                <SponsorItem data={data} key={idx} />
              ))}
            </div>
            <div className="sponsorUS">
              <style type="text/css">
                {`
        .btn-outline-light:hover{
         color: white;
         transform:scale(1.2);}    
             `}
              </style>
              <Button
                variant="outline-light"
                href="mailto:mscdb@thapar.edu"
                type="submit"
                style={{
                  fontSize: "1.5rem",
                  width: "auto",
                  height: "auto",
                  background: "#EF4931",
                  fontWeight:"500",
                }}
              >
                BECOME A SPONSOR!
              </Button>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default Sponsors;

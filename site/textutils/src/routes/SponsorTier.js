import React from "react";
import './Sponsors.css'
const SponsorTier = ({ data }) => (
  <a href={data.link.url} target="_blank" rel="noopener noreferrer">
    <h1 
      style={{
        fontSize: "1.1rem",
        fontWeight: "400",
        letterSpacing: "0.1rem",
        paddingBottom: "0.7rem",
      }}
    >
      <span className="purple"> {data.title} </span>
    </h1>
    <div className="sponsor-tier-item">
      <img src={data.link.src} alt={data.text}></img>
      <span style={{ textAlign: "center" }}>
        {data.text}{" "}
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
  </a>
);
export default SponsorTier;

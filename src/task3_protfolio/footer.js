import React from "react";
import "./Footer.css"; // Import your custom CSS
import Insta from "./assets/insta.png";
import linkedin from "./assets/linkedin.png";
import github from "./assets/github.png";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "rgb(199, 196, 196)",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1 style={{ padding: "20px" }}>CONTACT ME</h1>
        <h2 style={{ padding: "20px" }}>Get in Touch with Me</h2>
      </div>
      <div style={{ margin: "10px" }}>
        <a
          href="mailto:bakkavamshi0701@gmail.com"
          style={{ textDecoration: "none", color: "rgb(199, 196, 196)" }}
        >
          Email: bakkavamshi0701@gmail.com
        </a>
      </div>
      <div style={{ margin: "20px", padding: "10px" }}>
        <a>
        <img
          src={Insta}
          alt="insta"
          style={{ height: "100px", width: "100px" }}
        />
        </a>
        <a href="https://github.com/bakkavamshi0171">
          <img
            src={github}
            alt="LinkedIn"
            style={{ height: "100px", width: "100px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/bakka-vamshi-104388279/">
        <img
          src={linkedin}
          alt="github"
          style={{ height: "100px", width: "100px" }}
        /></a>
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "center",
            gap: "50px",
            fontSize: "larger",
          }}
        >
          <li>
            <a
              href="#"
              style={{ textDecoration: "none", color: "rgb(199, 196, 196)" }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ textDecoration: "none", color: "rgb(199, 196, 196)" }}
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ textDecoration: "none", color: "rgb(199, 196, 196)" }}
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ textDecoration: "none", color: "rgb(199, 196, 196)" }}
            >
              ABOUT
            </a>
          </li>
        </ul>
        <hr style={{ border: "2px solid white", margin: "50px 0px" }} />
        <p className="footer-copy-right">© Copyright by bakka vamshi, 2024</p>
      </div>
    </div>
  );
}

export default Footer;

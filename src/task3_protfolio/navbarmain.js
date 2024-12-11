import Nav from "react-bootstrap/Nav";
import "./main.css";
import profile from "./assets/profile.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className=" portfolio-nav" >
        <Container>
          <Navbar.Brand href="#" className="portfolio-nav">My Portfolio</Navbar.Brand>
        <Nav.Item>
          <Nav.Link className="portfolio-item" href="">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="portfolio-item" eventKey="link-1">
            About me
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="portfolio-item" eventKey="link-2">
            Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="portfolio-item" eventKey="link-3">
            Projects
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="portfolio-item" eventKey="link-3">
            Contact Me
          </Nav.Link>
        </Nav.Item>
      
        </Container>
      </Navbar>
      

      <MainHomeCom />
    </div>
  );
}

function MainHomeCom() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "100vh",
        // gap: "30px",
        backgroundColor: "black",
        color: "rgb(199, 196, 196)",
      }}
    >
      <div>
        <img
          src={profile}
          alt="myProfile"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(199, 196, 196)",
            borderRadius: "0px",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center",
          marginLeft:"30px"
        }}
      >
        <h1 style={{ textAlign: "left", fontSize: "75px" }}>
          BAKKA <p style={{ textAlign: "left", fontSize: "120px" }}>VAMSHI</p>{" "}
        </h1>
        <p style={{ textAlign: "left", fontSize: "larger" }}>
          A passionate Frontend Developer dedicated to crafting user-friendly,
          responsive, and visually appealing web interfaces. I thrive on turning
          creative ideas into seamless digital experiences, with a focus on
          functionality and attention to detail
        </p>
        <div style={{ textAlign: "left" }}>
          <a
            href="https://docs.google.com/document/d/1guibQxSkLkduOIbtPkb0HsHn3acjDZVN/edit?usp=drive_link&ouid=117064114230344147517&rtpof=true&sd=true"
            target="__blank"
          >
            <button
              style={{
                backgroundColor: "rgb(199,196,196)",
                fontSize: "1.8rem",
                marginRight: "20px",
                padding:"5px", border:"none", borderRadius:"8px"
              }}
            >
              Resume
            </button>
          </a>
          <a href="https://github.com/bakkavamshi0171" target="__blank">
            <button
              style={{
                backgroundColor: "rgb(199,196,196)",
                fontSize: "1.8rem",
                padding:"5px", border:"none", borderRadius:"8px"
              }}
            >
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

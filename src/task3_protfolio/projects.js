import HandM from "./assets/H&M.png";
import Strategy from "./assets/strategy.png";
import wheather from "./assets/wheather.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./main.css"

function Projectsection() {
  return (
    <div>
        <Skillsection/>
        <h1 style={{backgroundColor:"black", color:"rgb(199,196,196)", margin:"0px", padding:"20px", fontSize:"50px"}}>Recent Projects</h1>
      <div
        style={{
          backgroundColor: "black",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          padding: "50px",
          gap: "50px",
        }}
      >
        <div className="project_1">
          <Card
            style={{
              width: "100%",
              backgroundColor: "rgb(199, 196, 196)",
              height: "100%",
            }}
          >
            <Card.Img
              variant="top"
              src={Strategy}
              style={{ padding: "20px" }}
            />
            <Card.Body>
              <Card.Title>
                <h3>Strategy Template</h3>
              </Card.Title>
              <Card.Text>
                The Strategy template is designed using HTML and CSS to deliver
                a clean, professional layout. It emphasizes responsiveness and
                adaptability for diverse screen sizes. With a focus on user
                experience, it ensures seamless navigation and modern aesthetics
              </Card.Text>
              <a href="https://bakkavamshi0171.github.io/Strategy-project/">
                <Button variant="dark">Click Here to see more</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div
          className="project_2"
          style={{
            gridArea: "1/2/span 4/ span 2",
            justifySelf: "center",
            alignSelf: "center",
          }}
        >
          <Card
            style={{
              width: "100%",
              backgroundColor: "rgb(199, 196, 196)",
              height: "100%",
            }}
          >
            <Card.Img variant="top" src={HandM} />
            <Card.Body>
              <Card.Title>
                <h3>H&M Clone</h3>
              </Card.Title>
              <Card.Text>
                The H&M Clone is a fully responsive web application built using
                HTML, CSS, JavaScript, and Bootstrap. It replicates the design
                and functionality of the H&M website, offering interactive
                features and a seamless shopping experience. The project
                emphasizes modern styling and efficient navigation for an
                authentic user experience
              </Card.Text>
              <a href="https://bakkavamshi0171.github.io/H-M-Project/">
                <Button variant="dark">Click Here to see more</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="project_3">
          <Card
            style={{
              width: "100%",
              backgroundColor: "rgb(199, 196, 196)",
              height: "100%",
            }}
          >
            <Card.Img variant="top" src={wheather} />
            <Card.Body>
              <Card.Title>
                <h3>Wheather forecast</h3>
              </Card.Title>
              <Card.Text>
                The Weather App is built using HTML, CSS, and JavaScript to
                provide real-time weather forecasts. It features a dynamic
                interface that updates based on user location or search queries.
                The app ensures responsiveness and delivers an intuitive user
                experience for accurate weather insights
              </Card.Text>
              <a href="https://bakkavamshi0171.github.io/weather_app/">
                <Button variant="dark">Click Here to see more</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Projectsection;

function Skillsection(){
    return(
      <>
      <h1 style={{backgroundColor:"black", color:"rgb(199,196,196)", margin:"0px", padding:"20px", fontSize:"50px"}}>My Skills</h1>
        <div className="skillsec">          
            <div className="skills-left">
              <div className="skills-frontEnd">
                  <h3>Front-End Technologies</h3>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>ReactJs</li>
                    {/* <li>Redux</li> */}
                  </ul>
              </div>
            </div>
            <div className="skills-right">
              <div className="skills-backEnd">
                <h3>Back-End Technologies</h3>
                <ul>
                    <li>NodeJS</li>
                    <li>Basics of Python</li>
                    <li>MySql</li>
                    <li>Git</li>
                    <li>GitHub</li>
                  </ul>
              </div>
            </div>
        </div>
        </>
    )
}

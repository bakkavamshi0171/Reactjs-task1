import "./main.css";

function About() {
  return (
    <>
      <div className="aboutMe">
        <div className="aboutMe-left" style={{ textAlign: "left" }}>
          <div className="aboutMe-section">
            <h2 className="aboutMe-header">Introduction</h2>
            <hr style={{ border: "1px solid rgb(199,196,196)" }}/>
            <p className="aboutMe-para">
              I am Bakka Vamshi, a passionate Frontend Developer with a focus on
              creating user-friendly and visually appealing web interfaces. I
              enjoy bringing creative ideas to life by developing responsive and
              functional designs that provide seamless user experiences.
              Attention to detail is a priority for me, ensuring every element
              of a website serves its purpose effectively. <br /> <br />
              I hold a BSc in Computer Science, which I completed in 2022 from
              Osmania University, and I am currently pursuing an MCA, set to
              graduate in 2025. My technical skills include HTML, CSS,
              JavaScript, Bootstrap, SQL, Node.js, and React.js, which I utilize
              to craft efficient and innovative solutions. <br /> <br />
            </p>
          </div>
        </div>
        <div className="aboutMe-right">
          <div className="aboutMe-rightSec">
            <h2 className="aboutMe-Rightheader">About Me</h2>
            <hr style={{ border: "1px solid black" }} />
            <p className="aboutMeRightPara">
              I am committed to staying updated with the latest trends and
              technologies in web development, continuously honing my skills to
              deliver innovative solutions. My approach to development
              emphasizes clean and efficient code, prioritizing both performance
              and maintainability. I thrive on problem-solving and tackling
              challenges in dynamic projects, which allows me to grow and
              improve my expertise. Collaboration is an essential part of my
              process, as I believe great projects are the result of teamwork
              and open communication. Whether working on a small feature or a
              complete design overhaul, I put my best into every task, striving
              to deliver value and exceed expectations. For me, web development
              is not just a profession—it's a craft where creativity meets
              technology to shape meaningful experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

import React,{ Component } from "react";
import { NavBar } from "./navbarmain";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./about";
import Projectsection from "./projects";
import Footer from "./footer";



class Home extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <About/>
        <Projectsection/>
        <Footer/>
      </>
    )
  }
}
export default Home;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  leadership,
  skills,
  getInTouch,
s
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import Projects from "./components/home/Projects/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import {resumeProjects} from "./editable-stuff/config";
import Education from "./components/home/Education/Education";
import Experience from "./components/home/Experience/WorkExperience";
import GetInTouch from "./components/home/GetInTouch.jsx";
import { Jumbotron } from "react-bootstrap";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      
      <Education/>
      <Experience/>
      <Projects
          resumeProjects={resumeProjects}
       />
     
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (

    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Jumbotron style={bgStyle}>
        <Footer>
          {getInTouch.show && (
            <GetInTouch
              heading={getInTouch.heading}
              message={getInTouch.message}
              email={getInTouch.email}
            />
          )}
        </Footer>
      </Jumbotron>
      
    </BrowserRouter>
  );
};

export default App;

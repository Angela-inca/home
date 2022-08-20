import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal.js";
import {resumeProjects} from "../../../editable-stuff/config";
import AwesomeSliderStyles from "./Project.scss";
import {Container,Jumbotron } from "react-bootstrap";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };
    

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    
    if (resumeProjects) {
      var projects = this.props.resumeProjects.projects.map(function (projects) {
        return (
    
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(projects)}>
                <div>
                  <img
                    src={projects.images[0]}
                    alt="projectImages"
                    height="280"
                    width="380"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <p className="project-title-settings pb-3 mt-3">
                    {projects.title}
                  </p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }
    const bgStyle = { backgroundColor: "#f5f5f5" };
    return (
      <Jumbotron  style={bgStyle} id="projects" className="pb-5">
      
      <section id="portfolio" className="">
        <div className="col-md-12 mt-auto ">
          <h2 className="display-4 pb-4 md-4 text-center">Projects</h2>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
          
        </div>
      </section>
  
      </Jumbotron>
    );
  }
}

export default Projects;

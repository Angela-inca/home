import React from "react";
import "./Education.scss";
import EducationCard from "./EducationCard";
import {educationInfo} from "../../../editable-stuff/config";
import {Container,Jumbotron } from "react-bootstrap";

export default function Education() {
  const bgStyle = { backgroundColor: "#f5f5f5" };
  if (educationInfo.display) {
    return (
      <Jumbotron style={bgStyle} id="education">
        <Container>
          <div className="education-section pb-5">
            <h2 className="display-4  text-center">Education</h2>
            <div className="education-card-container">
              {educationInfo.schools.map((school, index) => (
                <EducationCard key={index} school={school} />
              ))}
              
            </div>
          </div>
        </Container>
      </Jumbotron>
    );
  }
  return null;
}
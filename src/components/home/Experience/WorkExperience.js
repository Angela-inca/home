import React from "react";
import "./WorkExperience.scss";
import ExperienceCard from "./ExperienceCard";
import {workExperiences} from "../../../editable-stuff/config";
import {Fade} from "react-reveal";
import {Container,Jumbotron } from "react-bootstrap";


export default function WorkExperience() {
  

  if (workExperiences.display) {
    return (
      <Jumbotron  id="experience" >
        
        <div  className="pb-5">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" >
            <div>
              <h2 className="display-4  text-center">Experience</h2>
              <div className="experience-cards-div py-5">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                        color:card.color,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
      </Jumbotron>
     

   
    );
  }
  return null;
}
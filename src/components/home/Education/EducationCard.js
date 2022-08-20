import React, {createRef} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
import Geisel from "../../../assets/img/geisel.png"


export default function EducationCard({school}) {
  const imgRef = createRef();

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
;
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <img
              crossOrigin={"anonymous"}
              ref={imgRef}
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
            
              
             <h5 className="education-text-school">{school.schoolName}</h5>
            
              <h5
                className={ "education-text-subHeader"}
              >
                {school.subHeader}
              </h5>
              <p
                className={`education-text-duration`}
              >
                {school.duration}
              </p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
                
              </div>
            </div>       
      </Fade>
    </div>
  );
}


// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Yingjia",
  middleName: "",
  lastName: "Gu",
  message: " Programmer | Developer | Data Scientist | Learner",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Angela-inca",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/yingjia.gu/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/angela_inca/",
    },
    {
      image: "fa-linkedin",
      url: "www.linkedin.com/in/yingjiagu",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",




const resumeProjects = {
  projects:[
    {
      title: "TritonLink Database",
      startDate: "2021",
      description: "A database of UCSD’s class sign-up system in JSP, JavaScript, and SQL.",
      images: [
        require('../editable-stuff/database.webp'),
      ],
      url: "https://www.notion.so/LaunchIt-Unite-to-Ignite-2af186c1404e4697ae0b41116d9000cf",
      descBullets: [
        "Designed the Entity-Relationship schema covering the university work and converted it into the 3rd Normal Form relational schema",
        "Built entry forms for queries to search students, courses, faculties, and degree information",
        "Handled extensive data maintenance through the use of constraints, views, and triggers"
      ],
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Apache Tomcat"
        },
        {
          class: "devicon-typescript-plain",
          name: "JSP"
        },
        {
          class: "devicon-csharp-plain",
          name: "JDBC"
        },
        {
          class: "devicon-csharp-plain",
          name: "JavaScript"
        },
        {
          class: "devicon-csharp-plain",
          name: "SQL"
        },
      ]
    },
    {
      title: "LaunchIt",
      startDate: "2020",
      description: "A web-based platform that connects fast-growing projects with other brilliant minds that thinks alike. ",
      images: [
        require('../editable-stuff/launchit2.png'),
        require('../editable-stuff/launchit1.png'),
      ],
      url: "https://www.notion.so/LaunchIt-Unite-to-Ignite-2af186c1404e4697ae0b41116d9000cf",
      descBullets: [
        "Implemented the sider with the message notification functionality and the user profile page",
        "Incorporated caching and loading metadata asynchronously for better user experience",
        "Improved the responsiveness of the UI by refactoring the code using the Ant Design Framework",
      ],
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "React"
        },
        {
          class: "devicon-typescript-plain",
          name: "HTML/CSS/JavaScript"
        },
        {
          class: "devicon-csharp-plain",
          name: "Ant Design Framework"
        }
      ]
    },
    {
      title: "XPlore",
      startDate: "2020",
      description: "A self-guided tour app launched in July 2020 on Google Play Store. Officially endorsed by UC San Diego and San Diego Architecture Foundation (SDAF), Xplore will be accepted as the official app for visiting UC San Diego.",
      images: [
        require('../editable-stuff/xplore2.png'),
        require('../editable-stuff/xplore1.png'),
      ],
      descBullets:[
        "Led a team of 6 using the Agile methodology",
        "Implemented the search page using my own algorithm where users can filter the landmarks based on the name or amenities",
        "Implemented the places page with an alphabetical scroll bar and used Google/Apple Maps API for getting the distances and directions to the landmark",
      ],
      url: "https://apps.apple.com/qa/app/xplore-ucsd/id1534251313",
      technologies: [
        {
          "class": "devicon-react-original",
          "name": "Swift"
        },
        
      ]
    },
    {
      title: "Recommender System on Stream’s datasets",
      startDate: "2020",
      description: "Built the recommender system based on Stream's video game review dataset (~200,000), with accuracy ranking 16th out of 401 (4%) on Kaggle.",
      images: [
        require("../editable-stuff/thumb.png"),
      ],
      url: "",
      descBullets: [
        "Pre-processed the text data using stemming and lemmatization, designed the  game category classifier by building  a pipeline using Scikit-Learn’s CountVectorizer, TfidfTransformer, and linear SVM",
        "Predicted whether a user would play a specific game by building a weighted-KNN with Jaccard Similarity as the distance measure and the game's popularity as the weight"
      ],
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Python"
        },
        {
          class: "devicon-typescript-plain",
          name: "Machine Learning"
        },
      ]
    },
    {
      title: "Research: Front-end for automatic generetor for phonological rules ",
      startDate: "2019",
      description: "Worked with Nadia Polikarpova to enhance the front-end for the engine that automatically generates phonological rules based on data",
      images: [
        require("../editable-stuff/phonological.png"),
      ],
      descBullets: [
        "Added more than 5 new features such as error notification, rule-generation analysis, and layout modification based on the input",
        "Used Python's Beautiful Soup and Urllib to do web scraping to get data",
        "Received 90% positive feedbacks from undergraduate linguists in the pilot survey"
      ],
      url: "",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Python"
        },
        {
          class: "devicon-typescript-plain",
          name: "Flask"
        },
        {
          class: "devicon-csharp-plain",
          name: "HTML/CSS/JavaScript"
        }
      ]
    },
    {
      title: "Hackathon: the hack",
      startDate: "2019",
      description: "",
      descBullets: [
        "Implemented the front end of an integrated study platform specifying AI tutor and efficient note-taking",
        "Ranked the 4th out of more than 65 teams and won the bonus of 1000"
     
      ],
      images: [
        require("../editable-stuff/thehack.jpeg"),
      ],
      url: "",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "React"
        },
        {
          class: "devicon-typescript-plain",
          name: "HTML/CSS/JavaScript"
        },
      ]
    }
  ]
}


// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 85 },
    { name: "Java", value: 85},
    { name: "SQL", value: 85 },
    { name: "Swift", value: 85},
    { name: "HTML/CSS", value: 80 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 70 },
    { name: "C/C++", value: 70},
    { name: "R", value: 70},
    
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for SWE opportunities! If you know any positions available or if you just want to say hi, please feel free to email me",
  email: "yingjia.gu@yale.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, San Diego",
      logo: require("../assets/img/circle.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2018 - March 2022",
      desc: "GPA: 3.82 | Major GPA: 3.87",
    },
    {
      schoolName: "Yale University",
      logo: require("../assets/img/yale.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2023",
    }
  ]
};
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("../assets/img/ucsd.jpeg"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("../assets/img/ucsd.jpeg"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Apple",
      companylogo: require("../assets/img/apple.png"),
      date: "April 2022 – August 2022",
      descBullets: [
        "Developed a macOS app that runs tests on multiple devices and integrated features that improve automation for result tracking",
"Took advantage of multi-threading and defined the class for screen logs and test results to enable switching between devices",
"Utilized interoperability between objective-c, python, shell command, and swift;  maintained states on updates from different technologies",
"Used Realm Database for storing local metrics and enabled customization for case sets"
      ],
      color: "rgb(28,43,71)",
    
    },
    {
      role: "Data Scientist Intern",
      company: "Tencent",
      companylogo: require("../assets/img/tencent.png"),
      date: "May 2021 – July 2021",
      descBullets: [
        "Used MapReduce and SQL to connect users' segments of vehicle trajectories (~1TB data) and analyzed their departure & destination districts, and their routes",
        "Identified the functionality of a region using the DMR model with the input of both the people flow data and the POI information, with 85% accuracy",
        "Ranked the importance of road intersections using a modified version of the PageRank algorithm taking advantage of the static road structure data and the dynamic car flow data"
      ],
      color: "rgb(49,85,155)"
    },
    {
      role: "Software Engineer Intern",
      company: "OmniSync Incorporated",
      companylogo: require("../assets/img/omni.png"),
      date: "June 2020 – Sep 2020",
      descBullets: [
        "Implemented the backend application that fetched and stored more than 100k government grant entries into Google Firestore using REST API and GraphQL with filtering mechanisms",
        "Implemented the email-sending feature which offered different email templates using the SendGrid API",
        "Built the Project Pitch page using React.js and RMWC framework"
      ],
      color: "rgb(218,96,56)",
    },  
  ]
};

export { navBar, resumeProjects, openSource, mainBody,  skills, leadership, getInTouch, experiences, educationInfo, workExperiences};

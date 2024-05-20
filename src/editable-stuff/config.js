
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
      title: "ESN Platform",
      startDate: "2024",
      description: "An Emergency Social Network (ESN) platform to facilitate communication and assistance during emergencies.",
      images: [
        require('../editable-stuff/database.webp'),
      ],
      url: "https://s24esna3.onrender.com/",
      descBullets: [
        "Integrated Socket.IO to enable seamless real-time communication, enhancing user experience and system reliability.",
        "Implemented session token management for secure authentication and role-based access control using Passport.js and JWT.",
        "Utilized diverse design patterns to enhance code structure and maintainability, while integrating CI/CD pipelines and comprehensive testing methodologies for quality and agility."
      ],
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Socket.IO"
        },
        {
          class: "devicon-typescript-plain",
          name: "MongoDB"
        },
        {
          class: "devicon-csharp-plain",
          name: "Express.js"
        },
        {
          class: "devicon-csharp-plain",
          name: "Node.js"
        },
        {
          class: "devicon-csharp-plain",
          name: "Passport.js"
        },
      ]
    },
    {
      title: "TritonLink Database",
      startDate: "2022",
      description: "A database of UCSD’s class sign-up system in JSP, JavaScript, and SQL.",
      images: [
        require('../editable-stuff/database.webp'),
      ],
      descBullets: [
        "Developed a robust database system for class sign-up platform, leveraging JSP, JavaScript, and SQL.",
        "Designed an optimized Entity-Relationship schema to model the intricate relationships between students, courses, faculties, and degree information, ensuring efficient data searching, filtering, and retrieval.",
        "Utilized constraints, views, and triggers to maintain data integrity and consistency, facilitating extensive data maintenance."
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
          name: "PostgreSQL"
        },
      ]
    },
    {
      title: "Recommender System on Stream’s datasets",
      startDate: "2021",
      description: "Built the recommender system based on Stream's video game review dataset (~200,000), with accuracy ranking 16th out of 401 (4%) on Kaggle.",
      images: [
        require("../editable-stuff/thumb.png"),
      ],
      url: "",
      descBullets: [
        "Designed the game category classifier by building a pipeline using Scikit-Learn’s CountVectorizer, TfidfTransformer, and linear SVM, pre-processed the text data using stemming and lemmatization.",
        "Predicted whether a user would play a specific game by building a Weighted-KNN with Jaccard Similarity as the distance measure and the game's popularity as the weight."
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
        {
          class: "devicon-typescript-plain",
          name: "Scikit-Learn"
        },
        {
          class: "devicon-typescript-plain",
          name: "Pandas"
        },
      ]
    },
    {
      title: "LaunchIt",
      startDate: "2021",
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
      startDate: "2021",
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
      technologies: [
        {
          "class": "devicon-react-original",
          "name": "Swift"
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
    { name: "Python", value: 90 },
    { name: "Java", value: 90},
    { name: "C/C++", value: 70},
    { name: "F#", value: 70},
    { name: "SQL", value: 90 },
    { name: "Swift", value: 85},
    { name: "HTML/CSS", value: 80 },
    { name: "JavaScript", value: 70 },
    { name: "React.js", value: 70 },
    { name: "Node.js", value: 70 },
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
      schoolName: "Carnegie Mellon University, Silicon Valley",
      logo: require("../assets/img/cmu.jpeg"),
      subHeader: "Master of Science in Software Engineering",
      duration: "January 2024 - December 2024",
    },
    {
      schoolName: "Yale University",
      logo: require("../assets/img/yale.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - May 2023",
    },
    {
      schoolName: "University of California, San Diego",
      logo: require("../assets/img/circle.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2018 - March 2022",
      desc: "GPA: 3.82 | Major GPA: 3.87",
    },
    
   
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
      company: "Bosch Rexroth",
      companylogo: require("../assets/img/rexroth.png"),
      date: "July 2023 – January 2024",
      descBullets: [
        "Implemented robust data processing pipeline tool in Python/Tkinter to streamline table manipulation with extracting files by year/month and logging invalid inputs.",
        "Developed a Spring Boot and Vue.js based web application with MyBatis to facilitate user data submission through online forms and local Excel uploads, enabling efficient data ingestion into an SQL database; implemented comprehensive data retrieval, calculation, and visualization functionalities, empowering users with valuable insights.",
        "Employed dynamic routing techniques and the Apache Shiro framework to implement authentication and authorization.",
      ],
      color: "rgb(28,43,71)",
    
    },
    {
      role: "Software Engineer Intern",
      company: "Apple",
      companylogo: require("../assets/img/apple.png"),
      date: "April 2022 – August 2022",
      descBullets: [
        "Developed a macOS app facilitating test execution across multiple devices, with enhanced automation for result tracking.",
        "Leveraged multi-threading to manage screen logs and test results, enabling seamless test execution across multiple devices.",
        "Employed interoperability among Objective-C, Python, shell commands, and Swift to facilitate the execution of diverse test suites and accommodate state updates across different technologies.",
        "Integrated Realm Database for robust local storage of test metrics, results and customized test cases."
      ],
      color: "rgb(28,43,71)",
    
    },
    {
      role: "Data Scientist Intern",
      company: "Tencent",
      companylogo: require("../assets/img/tencent.png"),
      date: "May 2021 – July 2021",
      descBullets: [
        "Leveraged MapReduce and SQL to develop a scalable data pipeline for analyzing large-scale users' vehicle trajectory data, identifying departure and destination districts, and their routes.",
        "Implemented a custom LDA model to identify regional functionality by integrating people flow data and Points of Interest (POI), achieving 85% accuracy.",
        "Developed a modified PageRank algorithm to rank road intersections based on static road structure data and dynamic car flow data, enabling real-time traffic management strategies."
      ],
      color: "rgb(49,85,155)"
    },
    {
      role: "Software Engineer Intern",
      company: "OmniSync Incorporated",
      companylogo: require("../assets/img/omni.png"),
      date: "June 2020 – Sep 2020",
      descBullets: [
        "Architected a high-performance backend application to efficiently manage and process government grant entries, utilizing a RESTful API architecture and GraphQL to ensure seamless data retrieval and storage in Google Firestore.",
        "Engineered a robust email-sending feature with customizable templates by using the SendGrid API and Google Cloud Pub/Sub.",
        "Leveraged React.js and RMWC framework to implement project-pitch pages with intuitive user experience."
      ],
      color: "rgb(218,96,56)",
    },  
  ]
};

export { navBar, resumeProjects, openSource, mainBody,  skills, leadership, getInTouch, experiences, educationInfo, workExperiences};

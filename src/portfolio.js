/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vikrant's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vikrant's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "VIKRANT VERMA",
  logo_name: "VikrantVerma",
  nickname: "vikku",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1Dw960AF2WlQn_9Guy7BeosvgL0m7kMoK/view?usp=sharing",
  portfolio_repository: "https://github.com/vikku8999?tab=repositories",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/vikku8999",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vikrant-verma-893175171/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:vikrant8999verma8999@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vikrantverma8999/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    /*{
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },*/
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Developing mobile applications using Figma , Adobe XD , Adobe Illustrater, React Native",
        "⚡ Creating application backend in Node, Express",

      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react.js",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [

        "⚡ Basic working in cloud platform",
        "⚡ Posting and maintaining websites on virtual machine instences along with integration of databases",

      ],
      softwareSkills: [
        {
          skillName: "mySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/vikrant8999verm1",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/vikku89",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@vikrant8999verma8999",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bhilai Institute of Tecgnology , Raipur",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "bitrlogo.png",
      alt_name: "BIT Raipur",
      duration: "2018npm - Present",
      descriptions: [
        "⚡ I have studied basic software engineering ",
        "⚡ Apart from this, I have done courses on Full Stack Development , Video Editing , graphic designing.",
        ],
      website_link: "https://bitraipur.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML5",
      subtitle: "- University Of Michigan",
      logo_path: "uom.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5EFG7WGJ49EA",
      alt_name: "University Of Michigan",
      color_code: "darkblue",
    },
    {
      title: "JavaScript",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-d2e79c15-b260-4149-872d-b963a4786d4e/",
      alt_name: "JavaScript for React.js",
      color_code: "#00000099",
    },
    {
      title: "Bootstrap 4",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-374cc5da-c150-44aa-99b9-b16551d449cb/",
      alt_name: "Bootstrap 4",
      color_code: "#0C9D5899",
    },
    {
      title: "Advanced CSS3",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-822b125e-de42-4ed2-8eb6-b1762fbd60e4/",
      alt_name: "CSS",
      color_code: "#1F70C199",
    },
    {
      title: "Full Stack Web Development",
      subtitle: "- Angela Yu",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-7b656e93-2605-4503-b87a-d9d313a991b2/",
      alt_name: "Web Development",
      color_code: "#D83B0199",
    },
    {
      title: "Java Masterclass",
      subtitle: "- Tim Buchalak",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2853a480-0463-4712-9e6c-e9e97060a90a/",
      alt_name: "Java",
      color_code: "#1F70C199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I'm starting my career now , I'm a quick learner not a workaholic find easy ways to complete my work and do fast as I can. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        
        {
          title: "currently seeking ",
          company: "",
          company_url:
            "",
          logo_path: "search.jpg",
          duration: "",
          location: "",
          description:
            "",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "currently seeking ",
          company: "",
          company_url:
            "",
          logo_path: "search.jpg",
          duration: "",
          location: "",
          description:
            "",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "2nd INTERNATIONAL CONFERERENCE",
          company: "BHILAI INSTITUTE OF TECHNOLOGY",
          company_url: "https://bitraipur.ac.in/",
          logo_path: "bitrlogo.png",
          duration: "30-31 January 2020",
          location: "Raipur , Chattishgarh",
          description:
            "RECENT TRENDS IN RENEWABLE ENERGY AND SUSTAINABLE DEVELOPMENT",
          color: "#4285F4",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "avatar.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with , React, HTML5 & CSS3 , AFTER EFFECT , Video Editing .",
  },
  blogSection: {
    title: "Linkedin",
    subtitle:
      "Contact me on  Linkedin .",
    link: "https://www.linkedin.com/in/vikrant-verma-893175171/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ruabandha, Bhilai, Chhattisgarh 490006 ",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/3aRS1RhBSMV1dTkw8",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};

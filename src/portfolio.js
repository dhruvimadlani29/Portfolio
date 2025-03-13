/* Change this file to get your personal Porfolio */

import React, { useEffect, useState } from "react";

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dhruvi's Portfolio",
  subTitle:
    "I am an experienced full-stack developer with 4 years of expertise in building scalable and responsive web applications. Skilled in modern technologies like React (for dynamic UI/UX components) and Node.js (for efficient backend architecture). ",
  og: {
    title: "Dhruvi Madlani Portfolio",
    type: "website",
    url: "http://dhruvimadlani.com/",
  },
};

//Home Page
const greeting = {
  title: "Dhruvi Madlani",
  logo_name: "DM",
  // nickname: "dhruvi",
  subTitle:
    "I am an experienced full-stack developer with 4 years of expertise in building scalable and responsive web applications. Skilled in modern technologies like React (for dynamic UI/UX components) and Node.js (for efficient backend architecture). ",
  resumeLink:
    "https://drive.google.com/file/d/1FO89kEEu5rQNnOqn5WB2nL8-GpWgtT2z/view?usp=sharing",
  portfolio_repository: "https://github.com/dhruvimadlani29/",
  githubProfile: "https://github.com/dhruvimadlani29",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/dhruvimadlani29",
  // linkedin: "https://www.linkedin.com/in/dhruvi-madlani/",
  // gmail: "dhruvimadlani2902@gmail.com",
  // gitlab: "https://gitlab.com/dhruvimadlani2902",
  // facebook: "https://www.facebook.com/dhruvi.madlani/",
  // twitter: "https://twitter.com/dhruvimadlani",
  // instagram: "https://www.instagram.com/dhruvi_madlani/"

  {
    name: "Github",
    link: "https://github.com/dhruvimadlani29",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dhruvi-madlani/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:dhruvimadlani2902@gmail.com",
    fontAwesomeIcon: "fab fa-google", // OR "fas fa-envelope"
    backgroundColor: "#D14836",
  },

  {
    name: "X-Twitter",
    link: "https://x.com/dhruvi_madlani",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/dhruvi.madlani/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Medium",
    link: "https://medium.com/@@dhruvimadlani2902", // Replace with your actual Medium profile URL
    fontAwesomeIcon: "fa-medium", // FontAwesome icon for Medium (you can check the icons here: https://fontawesome.com/icons/medium?f=brands)
    backgroundColor: "#00AB6C", // The color associated with Medium (Reference: https://simpleicons.org/?q=medium)
  },
];

const skills = {
  data: [
    //   {
    //     title: "Full Stack Development",
    //     fileName: "FullStackImg",
    //     skills: [
    //       "⚡ Building scalable and responsive web applications using React.js, Redux, and TypeScript",
    //       "⚡ UI/UX design implementation for dynamic and interactive web interfaces",
    //       "⚡ Performance optimization, improving web app efficiency from 7% to 85% using lazy loading, code splitting, and efficient state management",
    //       "⚡ Experience with real-time applications using Firestore for notifications and Google Maps for location services",
    //       "⚡ Integration of payment gateways including PayPal, Razorpay, Google Pay, and UPI services",
    //       "⚡ Backend development with Node.js, Express.js, and databases like MySQL & MongoDB",
    //       "⚡ Cloud services experience with AWS and Azure, and CI/CD setup using Jenkins and Git",
    //   ],
    //   softwareSkills: [
    //     {
    //         skillName: "React.js",
    //         fontAwesomeClassname: "logos-react",
    //         style: {
    //             backgroundColor: "transparent",
    //         },
    //     },
    //     {
    //         skillName: "Redux",
    //         fontAwesomeClassname: "simple-icons:redux",
    //         style: {
    //             backgroundColor: "white",
    //             color: "#764ABC",
    //         },
    //     },
    //     {
    //         skillName: "JavaScript",
    //         fontAwesomeClassname: "logos-javascript",
    //         style: {
    //             backgroundColor: "transparent",
    //             color: "#F7DF1E",
    //         },
    //     },
    //     {
    //         skillName: "TypeScript",
    //         fontAwesomeClassname: "logos-typescript",
    //         style: {
    //             backgroundColor: "transparent",
    //             color: "#3178C6",
    //         },
    //     },
    //     {
    //         skillName: "Node.js",
    //         fontAwesomeClassname: "logos-nodejs",
    //         style: {
    //             backgroundColor: "transparent",
    //         },
    //     },
    //     {
    //         skillName: "Express.js",
    //         fontAwesomeClassname: "simple-icons:express",
    //         style: {
    //             backgroundColor: "black",
    //             color: "white",
    //         },
    //     },
    //     {
    //         skillName: "MongoDB",
    //         fontAwesomeClassname: "logos-mongodb",
    //         style: {
    //             backgroundColor: "transparent",
    //         },
    //     },
    //     {
    //         skillName: "MySQL",
    //         fontAwesomeClassname: "logos-mysql",
    //         style: {
    //             backgroundColor: "transparent",
    //         },
    //     },
    //     {
    //         skillName: "AWS",
    //         fontAwesomeClassname: "logos-aws",
    //         style: {
    //             backgroundColor: "transparent",
    //         },
    //     },
    //     {
    //         skillName: "Azure",
    //         fontAwesomeClassname: "logos-microsoft-azure",
    //         style: {
    //             backgroundColor: "transparent",
    //         },
    //     },
    //     {
    //         skillName: "Git",
    //         fontAwesomeClassname: "logos-git",
    //         style: {
    //             backgroundColor: "transparent",
    //         },
    //     },
    // ],

    //   },
    {
      title: "Full Stack Development",
      fileName: "javascript",
      skills: [
        "⚡ Building responsive and scalable web applications using React.js, Redux, and TypeScript",
        "⚡ Developing dynamic and interactive UI/UX with HTML, CSS, Bootstrap, and Ant Design",
        "⚡ Managing state efficiently in React applications using Redux and Context API",
        "⚡ Creating and optimizing backend services using Node.js, Express.js, and MySQL/MongoDB",
        "⚡ Implementing authentication and user management with JWT, Firebase Auth, and OAuth",
        "⚡ Enhancing performance with lazy loading, code splitting, and server-side optimizations",
        "⚡ Deploying and managing applications on AWS, Azure, and Firebase",
        "⚡ Working with DevOps tools like Jenkins and Git for CI/CD automation",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: { color: "#764ABC" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs", // Updated Node.js icon
          style: { color: "#8CC84B" },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfra",
      skills: [
        "⚡ Experience working with cloud platforms like AWS and Azure",
        "⚡ Hosting and maintaining web applications on cloud servers with database integration",
        "⚡ Deploying and managing applications using AWS EC2, Azure App Services, and Firebase",
        "⚡ Implementing CI/CD pipelines with Jenkins, GitHub Actions, and Azure DevOps",
        "⚡ Managing database services using MySQL, MongoDB, and Firestore on cloud platforms",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: { color: "#D24939" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly responsive and interactive user interfaces for web applications",
        "⚡ Implementing UI/UX designs using React.js, Redux, HTML, CSS, and Bootstrap",
        "⚡ Creating wireframes, prototypes, and design mockups for web applications",
        "⚡ Optimizing user experience by ensuring seamless navigation and accessibility",
        "⚡ Ensuring cross-browser compatibility and mobile responsiveness",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: { color: "#F24E1E" },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: { color: "#FF2BC2" },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: { color: "#7952B3" },
        },
        {
          skillName: "Ant Design",
          fontAwesomeClassname: "simple-icons:antdesign",
          style: { color: "#0170FE" },
        },
        {
          skillName: "UIKit",
          fontAwesomeClassname: "simple-icons:uikit",
          style: { color: "#0058A3" },
        },
        {
          skillName: "Sketch",
          fontAwesomeClassname: "simple-icons:sketch",
          style: { color: "#F7B500" },
        },
        {
          skillName: "InVision",
          fontAwesomeClassname: "simple-icons:invision",
          style: { color: "#FF5B5B" },
        },
        {
          skillName: "Zeplin",
          fontAwesomeClassname: "simple-icons:zeplin",
          style: { color: "#00B0A0" },
        },
        {
          skillName: "Marvel App",
          fontAwesomeClassname: "simple-icons:marvel",
          style: { color: "#F3A4A3" },
        },
        {
          skillName: "Balsamiq",
          fontAwesomeClassname: "simple-icons:balsamiq",
          style: { color: "#E7A400" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/dhruvi",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@dhruvi",
    // },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Marwadi University",
      subtitle: "Bachelor of Engineering in Computer Engineering",
      logo_path: "marwadi_university_logo.png",
      alt_name: "Marwadi University",
      duration: "Sept 2018 - Jun 2021",
      descriptions: [
        "⚡ Relevant coursework: Advanced JAVA, Software Engineering, Data Mining & Business Intelligence, Data Structures, and Algorithms.",
      ],
      location: "Rajkot, India",
      website_link: "https://www.marwadiuniversity.ac.in",
    },
    {
      title: "Government Polytechnic Porbandar",
      subtitle: "Diploma in Engineering in Computer Engineering",
      logo_path: "govt_polytechnic_porbandar_logo.png",
      alt_name: "Government Polytechnic Porbandar",
      duration: "Aug 2015 - May 2018",
      descriptions: [
        "⚡ Relevant coursework: Dynamic Web Page Development, Advanced DBMS, .Net Programming, Mobile Computing, and Application Development.",
      ],
      location: "Porbandar, India",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "MERN Stack",
      // subtitle: "- Andrew Ng",
      logo_path: "MERN-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1gIbrOeJqTfy_FyqbGnaWnffT_eQgujgA/view?usp=sharing",
      alt_name: "Stanford University",
      color_code: "#FFFFFF",
    },
    {
      title: "Rising Star Award",
      // subtitle: "- Andrew Ng",
      logo_path: "risingStarAward.webp",
      certificate_link:
        "https://www.linkedin.com/posts/dhruvi-madlani_activity-6932056445966254080-wfS9?utm_source=share&utm_medium=member_ios&rcm=ACoAACzuIpkBEnkLCHU9LTkkv9nHrKhXMxLQ5mk",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with startups and established companies, focusing on building scalable and responsive web applications. My expertise includes React.js, Redux, TypeScript, and Node.js, along with cloud platforms like AWS and Azure. I specialize in UI/UX development, performance optimization, backend services, and cloud infrastructure. Additionally, I have experience mentoring interns and collaborating with cross-functional teams to deliver high-quality software solutions. I am passionate about developing efficient, user-friendly applications and continuously enhancing my technical skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Sufalam Technologies",
          company_url: "https://www.sufalamtech.com/",
          logo_path: "sufalam_logo.png",
          duration: "Jan 2025 – Present",
          location: "Ahmedabad, India",
          description:
            "Developing and maintaining full-stack applications using JavaScript, React.js, Node.js, and TypeScript. Contributed to multiple projects, including a US-based real estate platform for managing closing documents and stakeholders.",
          color: "#0879bf",
        },
        {
          title: "Senior Frontend Developer",
          company: "Dvij Infotech",
          company_url: "https://www.dvijinfotech.com/",
          logo_path: "dvij_logo.png",
          duration: "Apr 2024 – Oct 2024",
          location: "Ahmedabad, India",
          description:
            "Developed and optimized web applications using React.js, Redux, and TypeScript. Led frontend development, ensuring cross-browser compatibility and performance enhancements. Mentored interns and collaborated with teams to improve UI/UX design and application efficiency.",
          color: "#000000",
        },
        {
          title: "Frontend Developer",
          company: "Sufalam Technologies",
          company_url: "https://www.sufalamtech.com/",
          logo_path: "sufalam_logo.png",
          duration: "May 2021 – Apr 2024",
          location: "Ahmedabad, India",
          description:
            "Worked on React.js and Redux for developing scalable web applications. Engaged in UI/UX design, API integration, and cloud services (AWS, Azure). Focused on performance optimization, real-time features, and payment gateway integrations.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Development Intern",
          company: "Sufalam Technologies",
          company_url: "https://www.sufalamtech.com/",
          logo_path: "sufalam_logo.png",
          duration: "Jan 2021 – Apr 2021",
          location: "Ahmedabad, India",
          description:
            "Assisted in frontend development using React.js and Bootstrap. Gained experience in state management, UI components, and optimizing web applications.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have developed and deployed a variety of web applications using the latest technologies, including React.js, Node.js, and cloud platforms like AWS and Azure. My experience spans across real estate scheduling platforms, payment gateway solutions, and asset tracking systems, where I focused on performance optimization, secure authentication, and seamless integrations. I am passionate about creating scalable, user-friendly applications that enhance efficiency and improve user interactions.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

const MediumArticles = ({ theme }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dhruvimadlani2902"
        );
        const data = await response.json();

        if (data.status === "ok") {
          const mediumPosts = data.items.map((item) => ({
            id: item.guid,
            name: item.title,
            createdAt: item.pubDate,
            description: item.description.replace(/<[^>]+>/g, ""),
            url: item.link,
          }));

          setArticles(mediumPosts);
        }
      } catch (error) {
        console.error("Error fetching Medium articles:", error);
      }
    };

    fetchMediumArticles();
  }, []);

  return (
    <div style={{ ...styles.container, backgroundColor: theme }}>
      <div style={{ ...styles.contentWrapper, backgroundColor: theme }}>
        <h2 style={styles.heading}>📝 My Medium Articles</h2>
        {articles.length === 0 ? (
          <p>Loading articles...</p>
        ) : (
          <ul style={styles.list}>
            {articles.map((article) => (
              <li
                key={article.id}
                style={{ ...styles.card, backgroundColor: theme.highlight }}
              >
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  <h3 style={styles.title}>{article.name}</h3>
                  <p style={styles.description}>
                    {article.description.substring(0, 100)}...
                  </p>
                  <small style={styles.date}>
                    Published on: {new Date(article.createdAt).toDateString()}
                  </small>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#f0f8ff",
  },
  contentWrapper: {
    maxWidth: "800px",
    width: "100%",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#1f3a93",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  link: {
    textDecoration: "none",
    color: "black",
    display: "block",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#1f3a93",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  date: {
    fontSize: "12px",
    color: "#888",
  },
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "dhruvimadlani_vectorized.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can assist with Software Development using  React for the frontend and Node.js for the backend.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.dhruvimadlani.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "3100 Carling Avenue, Ottawa, Ontario, Canada K2B 6J6",
    locality: "Carling Avenue",
    country: "CA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Carling Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/xY96LySjub3b9KHR7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
  publications,
  contactPageData,
  MediumArticles,
};

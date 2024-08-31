const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "GSAP",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "RESTful APIs",
      "Authentication",
    ],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "Docker", "CI/CD", "Webpack", "Babel", "VS Code"],
  },
  {
    category: "Programming",
    items: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    category: "Mobile Development",
    items: ["React Native"],
  },
  {
    category: "Other Skills",
    items: ["Agile Methodologies", "Problem-Solving", "Version Control"],
  },
];

const projects = [
  {
    name: "Demo portfolio",
    imgUrl: "/images/projects/demo-portfolio.png",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl: "https://darkx-dev-portfolio.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    description:
      "A personal portfolio showcasing my web development skills and projects, built with React and deployed on Vercel.",
    features: ["Responsive design", "Single page application", "Dark mode"],
    challenges: ["Setting up deployment on Vercel", "Optimizing performance"],
    dateCompleted: "2023-07-10",
  },
  {
    name: "Space tourism",
    imgUrl: "/images/projects/space-tourism.png",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl: "https://space-tourism-theta-eight.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Vercel"],
    description:
      "A space tourism website offering details on destinations and experiences for space travel, featuring interactive UI.",
    features: [
      "Dynamic content",
      "User-friendly interface",
      "Responsive design",
    ],
    challenges: [
      "Creating a smooth scrolling experience",
      "Handling large media assets",
    ],
    dateCompleted: "2023-08-15",
  },
  {
    name: "Easybank",
    imgUrl: "/images/projects/easy-bank.png",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl: "https://darkx-dev.github.io/easy-bank-landing-page/",
    repoUrl: "https://github.com/Darkx-dev/easy-bank-landing-page/",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A landing page for Easybank, designed to promote digital banking services with a modern, responsive layout.",
    features: ["Interactive UI", "Modern design", "Fast load times"],
    challenges: [
      "Building responsive layouts",
      "Ensuring cross-browser compatibility",
    ],
    dateCompleted: "2023-05-22",
  },
  {
    name: "Jobs Listing",
    imgUrl:
      "https://github.com/Darkx-dev/job-listing-app/blob/main/screenshot.jpg?raw=true",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl: "https://job-listing-app-dev.vercel.app/",
    repoUrl: "https://github.com/Darkx-dev/job-listing-app/",
    technologies: ["React", "TypeScript", "CSS"],
    description:
      "A job listing web app that filters jobs based on categories and skills.",
    features: ["Job filtering", "Dynamic job categories", "Responsive design"],
    challenges: [
      "Efficiently managing state with filters",
      "Building a fluid user interface",
    ],
    dateCompleted: "2023-06-18",
  },
  {
    name: "Sneakers",
    imgUrl:
      "https://github.com/Darkx-dev/sneakers-frontend/blob/main/design/desktop-design.jpg?raw=true",
    projectType: "web" as "web",
    status: "completed" as "completed",
    liveUrl: "https://darkx-dev.github.io/sneakers-frontend/",
    repoUrl: "https://github.com/Darkx-dev/sneakers-frontend",
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "An e-commerce product page for sneakers, featuring image galleries and add-to-cart functionality.",
    features: [
      "Image gallery",
      "Add to cart functionality",
      "Responsive design",
    ],
    challenges: [
      "Building an interactive image gallery",
      "Handling dynamic cart interactions",
    ],
    dateCompleted: "2023-04-28",
  },
  {
    name: "Music Player(APP)",
    imgUrl:
      "https://github.com/Darkx-dev/music-player-react-native/raw/main/screenshot.jpg",
    projectType: "mobile" as "mobile",
    status: "completed" as "completed",
    liveUrl:
      "https://github.com/Darkx-dev/music-player-react-native/releases/tag/1.0.0",
    repoUrl: "https://github.com/Darkx-dev/music-player-react-native",
    technologies: ["React Native", "JavaScript", "Expo"],
    description:
      "A mobile music player app built with React Native, featuring media playback and playlist management.",
    features: [
      "Play, pause, and skip tracks",
      "Playlist management",
      "Mobile optimized interface",
    ],
    challenges: [
      "Handling media playback across devices",
      "Building smooth UI animations",
    ],
    dateCompleted: "2023-03-14",
  },
];

export { skills, projects };

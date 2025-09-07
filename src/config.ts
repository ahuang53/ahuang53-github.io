export const siteConfig = {
  name: "Andy Huang",
  title: "Computer Systems Engineering Student",
  description: "Portfolio website of Andy Huang",
  accentColor: "#e4bfa4",
  social: {
    email: "huanga9@rpi.edu",
    linkedin: "https://linkedin.com/in/ahuang35",
    github: "https://github.com/ahuang53",
    resume: "/resume.pdf",
  },
  aboutMe:
    "As a Computer Systems Engineering major, I have a deep passion for embedded software, firmware, and all things microcontroller related. Integrating software and hardware to create projects that make life easier and more efficient is what drives my work.",
  skills: ["C/C++", "Python", "HTML", "CSS", "Javascript", "FreeRTOS","Docker","SQL"],
  projects: [
    {
      name: "OLED Weather Display",
      description:
        "WiFi enabled weather monitor built with FreeRTOS to demonstrate a basic understanding of Real Time Operating Systems.",
      link: "https://andyhu35.wixsite.com/ahuangdac/oled-weather",
      skills: ["FreeRTOS", "C", "UART & I2C","ESP32"],
    },
    {
      name: "SMART Fire Alarm System",
      description:
        "IoT Fire Alarm System with smoke, carbon monoxide, temperature detection",
      link: "https://andyhu35.wixsite.com/ahuangdac/smart-fire-alarm",
      skills: ["MQTT", "Raspberry Pi", "C","AWS IoT","ESP32"],
    },
    {
      name: "Racetrack Car Navigation",
      description:
        "Autonomous navigation around an inner barrier with the TI-RSLK Robotic Car",
      link: "https://andyhu35.wixsite.com/ahuangdac/auton",
      skills: ["C", "PWM", "PID"],
    },
  ],
  experience: [
    {
      company: "HARP Research Inc.",
      title: " Full Stack Development Intern",
      dateRange: "May 2025 - August 2025",
      bullets: [
        "Contributed to feature development and bug fixes for an internal project management and time-tracking bot used by the company team on Discord.",
        "Collaborated on a shared GitHub codebase, creating pull requests, participating in code reviews, and ensuring code quality through CI/CD pipelines.",
        "Applied containerization and database practices using Docker and PostgreSQL to support feature development, testing, and debugging in a live team codebase.",
      ],
    },
    {
      company: "Rensselaer Polytechnic Institute",
      title: "Undergraduate Research Student",
      dateRange: "January 2024 - September 2025",
      bullets: [
        "Spearheaded development of Music X+, a hybrid web-based music and information hub, improving student engagement and lab workflow efficiency.",
        "Built a web interface to streamline song requests, display attendance, and simplify music control for students.",
        "Developed a Python Flask backend that leveraged the Genius API to deliver seamless music discovery and playback.",
        "Integrated MySQL database to log student attendance via RFID, enhancing accuracy and syncing with university records.",
        "Implemented lightweight inter-computer communication using UDP sockets to transmit single-string data packets between two machines on the same network.",
        "Automated lab staff identification by retrieving Notion personnel data and sending recognized staff info to a networked display."
      ],
    },
    {
      company: "Rensselaer Polytechnic Institute ",
      title: "Mercer XLab Staff",
      dateRange: "May 2024 – December 2024",
      bullets: [
        "Managed lab equipment inventory, overseeing equipment loans and ensuring timely returns to minimize disruptions.",
        "Facilitated a microcontroller workshop for engineering students, expanding their knowledge of embedded systems.",
        "Designed a Notion-based learning module on microcontrollers for students with limited C/C++ and circuit skills.",
      ],
    },
  ],
  education: [
    {
      school: "Rensselaer Polytechnic Institute",
      degree: "Bachelor of Science in Computer Systems Engineering",
      dateRange: "2022 - 2026",
      achievements: [
        "House Manager of the Lambda Chapter of the Delta Phi Fraternity",
      ],
    },
  ],
};

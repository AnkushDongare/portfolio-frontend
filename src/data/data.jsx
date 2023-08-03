import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCodepen,
} from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "about" },
  // { name: "Projects", href: "projects" },
  // { name: "Blogs", href: "blogs" },
  // { name: "Gallery", href: "gallery" },
  { name: "Contact", href: "contact" },
  { name: "Inter School Shooting Results", href: "shooting-results" },
];

const socialMediaLinks = [
  {
    name: "Facebook",
    desc: "Facebook account link for Ankush Dongre",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    desc: "Instagram account link for Ankush Dongre",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    name: "Twitter",
    desc: "Twitter account link for Ankush Dongre",
    icon: <FaTwitter />,
    link: "https://twitter.com/",
  },
  {
    name: "LinkedIn",
    desc: "LinkedIn account link for Ankush Dongre",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
  {
    name: "Github",
    desc: "Github account link for Ankush Dongre",
    icon: <FaGithub />,
    link: "https://github.com/",
  },
  {
    name: "CodePen",
    desc: "CodePen account link for Ankush Dongre",
    icon: <FaCodepen />,
    link: "https://codepen.io/",
  },
];

const faqs = [
  {
    question: "What is your experience as a web developer?",
    answer: "I have been working as a web developer for over 5 years.",
  },
  {
    question: "What programming languages are you proficient in?",
    answer: "I am proficient in HTML, CSS, JavaScript, and Python.",
  },
  {
    question: "What is your approach to debugging code?",
    answer:
      "I usually start by checking the console for errors and then work my way through the code to identify the problem.",
  },
];

const projects = [
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus ultrices nisi.",
    link: "https://example.com/project1",
    imageUrl: '../../src/assets/Image.jpeg'
  },
  {
    title: "Project 2",
    description:
      "Nullam sed nulla eu felis molestie aliquam. Proin vel urna nec nisi sodales.",
    link: "https://example.com/project2",
    imageUrl: '../../src/assets/Image.jpeg'
  },
  {
    title: "Project 3",
    description:
      "Nullam sed nulla eu felis molestie aliquam. Proin vel urna nec nisi sodales.",
    link: "https://example.com/project2",
    imageUrl: '../../src/assets/Image.jpeg'
  },
];

export { navigation, socialMediaLinks, faqs, projects };

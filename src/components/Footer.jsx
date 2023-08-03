import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";
import { navigation, socialMediaLinks} from "../data/data";
let thisYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-4 bg-gray-600 text-white">
      <div className="flex space-x-4">
      {navigation.map((navLink)=>{
          const {name, href} = navLink
          return <Link key={name} to={href}>{name}</Link>
        })}
      </div>
      <div className="flex space-x-4 mt-4">
      {socialMediaLinks.map((socialLink)=>{
          const {name, desc, icon, link} = socialLink
          return <a key={name} href={link} className="text-2xl" aria-label={desc}>{icon}</a>
        })}
      </div>
      <p className="mt-4">
        &copy; {thisYear} Ankush Dongre. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
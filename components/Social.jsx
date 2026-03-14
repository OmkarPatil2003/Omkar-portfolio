import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
// Import LeetCode icon 
//import LeetCodeIcon from "./LeetCodeIcon"; // Replace with your LeetCode icon import path

const socials = [
  { icon: <FaGithub />, path: "https://github.com/OmkarPatil2003" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/omkar-patil-823686286/" },
  //{ icon: <LeetCodeIcon />, path: "https://leetcode.com/OmkarPatil2003/" }, // Replace with your LeetCode profile URL
  //{ icon: <FaYoutube />, path: "" },
  //{ icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

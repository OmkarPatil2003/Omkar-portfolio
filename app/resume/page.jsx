"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact
} from "react-icons/fa";

import { SiSpringboot, SiDotnet, SiDocker, SiMysql } from "react-icons/si";

// about data
const about = {
  title: "About me",
  info: [
    { fieldName: "Name", fieldValue: "Omkar Patil" },
    { fieldName: "Phone", fieldValue: "(+91) 9021818225" },
    { fieldName: "Experience", fieldValue: "1+ Years" },
    { fieldName: "City", fieldValue: "Pune" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "omkarpatil192003@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi, Marathi" },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Skilled in building scalable full-stack web applications, developing REST APIs and microservices, experienced in React, Spring Boot, .NET, and Java through CDAC training, internships, and projects, with a strong foundation in software development and database management.",
  items: [
    {
      company: "HAL",
      position: "Software Engineer Intern",
      duration: "JAN – FEB 2024",
    },
    {
      company: "MotionCut India",
      position: "Web Development Intern",
      duration: "JAN – FEB 2024",
    },
    {
      company: "CDAC",
      position: "PG-DAC Full Stack Development Course",
      duration: "AUG 2025 – FEB 2026",
    },
    {
      company: "Freelance Projects",
      position: "Full Stack Developer",
      duration: "2024 - PRESENT",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education & Professional Training",
  description:
    "Completed B.E. in Computer Engineering and PG-DAC from CDAC, gaining strong practical experience in full-stack development, REST APIs, microservices, and database systems using modern technologies.",

  items: [
    {
      institution: "ICEM, Pune",
      degree: "B.E in Computer Engineering",
      duration: "2021 - 2025",
      affiliation: "SPPU (Savitribai Phule Pune University)"
    },

    {
      institution: "CDAC",
      degree: "Post Graduate Diploma in Advanced Computing",
      duration: "2025"
    },

    {
      institution: "Online Course",
      degree: "Full Stack Web Development",
      duration: "2023"
    },

    {
      institution: "Online Course",
      degree: "Data Structures & Algorithms",
      duration: "2023 - 2024"
    }
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Proficient in full-stack development with experience in building scalable web applications, REST APIs, and backend services using React, Spring Boot, .NET, Docker, and modern database technologies.",
  skillList: [
    { icon: <FaHtml5 />, name: "html5" },
    { icon: <FaCss3 />, name: "css3" },
    { icon: <FaJs />, name: "javascript" },
    { icon: <FaReact />, name: "react.js" },
    { icon: <SiSpringboot />, name: "spring boot" },
    { icon: <SiDotnet />, name: ".net" },
    { icon: <SiDocker />, name: "docker" },
    { icon: <SiMysql />, name: "mysql" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl whitespace-nowrap">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

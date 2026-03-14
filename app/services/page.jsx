"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description:
      "Building scalable and responsive web applications using modern technologies like React, Node.js, Spring Boot, and .NET.",
    href: "",
  },
  {
    num: "02",
    title: "REST API & Backend Development",
    description:
      "Developing secure RESTful APIs, authentication systems, and scalable backend services for modern applications.",
    href: "",
  },
  {
    num: "03",
    title: "Database Design & Optimization",
    description:
      "Designing efficient relational and NoSQL databases using MySQL and MongoDB for fast and reliable data management.",
    href: "",
  },
  {
    num: "04",
    title: "Cloud Deployment & DevOps",
    description:
      "Deploying and managing applications using Docker, Git, and modern development workflows for scalable and reliable systems.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-start gap-6 group min-h-[280px]"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full mt-auto"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

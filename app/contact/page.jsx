"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef(null);
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
  .sendForm("service_yh9unij", "template_mkm6h1c", form.current, "I5VWAJd1yfNmB3_X8")
  .then(
    (result) => {
      console.log("SUCCESS!", result.text);
      alert("✅ Message sent successfully!");
      form.current.reset();
      router.push("/");
    },
    (error) => {
      console.error("FAILED...", error.text);
      alert("❌ Failed to send message. Please try again.");
    }
  );

  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.5 } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I'm open to freelance projects, collaborations, and full-time opportunities. Let's build something impactful together.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" required />
                <Input type="text" name="lastname" placeholder="Lastname" required />
                <Input type="email" name="email" placeholder="Email address" required />
                <Input type="tel" name="phone" placeholder="Phone number" />
              </div>

              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Full Stack Web Development">Full Stack Web Development</SelectItem>
                    <SelectItem value="Backend Engineering & API Development">Backend Engineering & API Development</SelectItem>
                    <SelectItem value="Database Design & Optimization">Database Design & Optimization</SelectItem>
                    <SelectItem value="Cloud Deployment & DevOps">Cloud Deployment & DevOps</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />

              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {[
                { icon: "📞", title: "Phone", description: "(+91) 9021818225" },
                { icon: "✉️", title: "Email", description: "omkarpatil192003@gmail.com" },
                { icon: "📍", title: "Address", description: "Navi Mumbai, Maharashtra, India" },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center text-[28px]">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

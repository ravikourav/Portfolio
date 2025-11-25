import { useState } from "react";
import HeroImg from "../assets/hero-img.jpg";
import { Icon } from "@iconify/react";
import Skill from "../components/Skill";
import { motion } from "framer-motion";
import { skills, projects } from "../utils/constant ";
import { ReactTyped } from "react-typed";

function Home() {
  const categories = ["All", "Frontend", "Backend", "Database"];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-amber-100">
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row w-full min-h-[750px] px-10 justify-center items-center bg-linear-to-b from-white bg-amber-100"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-2 max-w-lg"
        >
          <p className="text-3xl">Hi, I'm</p>
          <p className="text-5xl font-semibold">Ravi Kourav</p>
          <p className="text-3xl text-black first-letter:text-(--brand-primary)">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "MERN Developer",
                "Frontend Developer",
                "Backend Developer",
                "UI / UX Enthusiast",
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Building fast, scalable, and modern web applications. Creating
            interfaces that look great and perform even better. Driven by
            curiosity and continuous learning, I strive to deliver work that is
            both practical and impactful.
          </p>
          <div className="flex gap-4 items-center">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="pt-4 pb-3"
            >
              <a
                href="/Resume.pdf"
                download="Ravi-Kourav-Resume.pdf"
                className="bg-(--brand-primary) text-white px-4 py-2 rounded-lg hover:bg-(--brand-primary-dark) transition"
              >
                Download Resume
              </a>
            </motion.div>
            <div className="flex space-x-2 mt-2">
              <a
                href="https://github.com/ravikourav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-orange-500 transition text-2xl"
              >
                <Icon icon="mdi:github" width="32" height="32" />
              </a>

              <a
                href="https://linkedin.com/in/ravikourav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition text-2xl"
              >
                <Icon icon="mdi:linkedin" width="32" height="32" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="m-10 md:mx-20 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shrink-0 mb-6 lg:mb-0"
        >
          <img
            src={HeroImg}
            alt="Profile-Picture"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      </section>

      {/*Tech Stack*/}
      <section
        id="tech-stack"
        className="w-full py-10 bg-linear-to-b from-amber-100 via-white to-white flex flex-col items-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-semibold mb-8"
        >
          Tech Stack
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex gap-4 mb-6 flex-wrap justify-center"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg transition ${
                activeCategory === cat
                  ? "bg-(--brand-primary) text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-row flex-wrap justify-center items-center max-w-xl gap-4 px-4 mx-auto"
        >
          {skills
            .filter(
              (skill) =>
                activeCategory === "All" || skill.category === activeCategory
            )
            .map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
        </motion.div>
      </section>

      {/*Project*/}
      <section
        id="projects"
        className="w-full pt-10 pb-15 bg-linear-to-b from-white to-amber-100 flex flex-col items-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-semibold mb-8"
        >
          Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }, // delay between cards
          }}
          className="flex flex-wrap justify-center items-center gap-12 max-w-6xl w-full px-6"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.liveLink}
              target="_blank"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="max-w-[350px] bg-white rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden group"
            >
              <div className="w-full h-60 sm:h-64 lg:h-72 overflow-hidden relative p-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full">
                  <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="w-full h-20"
                  >
                    <path
                      d="M 0 100 C 150 20 300 140 500 100 L 500 150 L 0 150 Z"
                      className="fill-white"
                    ></path>
                  </svg>

                  <h3 className="absolute -bottom-2 left-4 text-lg font-semibold py-2 px-8">
                    {project.title}
                  </h3>
                </div>
              </div>
              <motion.div
                className="flex p-2 bg-white text-center justify-center items-center gap-5"
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.4 } }, // stagger each icon
                }}
              >
                {project.techStackIcons.map((icon) => (
                  <motion.div
                    key={`${project.title}_${icon}`}
                    variants={{
                      hidden: { opacity: 0, y: 10, scale: 0.8 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Icon icon={icon} width="32" height="32" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/*contect*/}
      <section
        id="contact"
        className="w-full py-24 bg-linear-to-b from-amber-100 to-white flex flex-col items-center justify-center px-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-semibold mb-4"
        >
          Contact
        </motion.h2>
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col justify-center items-center text-center pb-10"
          >
            <p className="text-gray-700 text-lg">
              Feel free to get in touch, I’d love to hear from you.
            </p>

            <div className="flex space-y-3 mt-2">
              <a
                href="https://github.com/ravikourav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 transition text-2xl"
              >
                <Icon icon="mdi:github" width="32" height="32" />
              </a>

              <a
                href="https://linkedin.com/in/ravikourav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition text-2xl"
              >
                <Icon icon="mdi:linkedin" width="32" height="32" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 150,
              damping: 12,
            }}
            className="bg-white rounded-3xl shadow-2xl p-6 space-y-2"
          >
            <div className="flex flex-col max-w-2xl">
              <label className="text-sm text-gray-600 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="p-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none transition"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-2">Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
                className="p-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-400 outline-none transition resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full mt-4 bg-(--brand-primary)  text-white p-2 rounded-xl font-semibold shadow-md hover:bg-(--brand-primary-dark)"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

export default Home;

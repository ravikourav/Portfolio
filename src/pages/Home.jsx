import { useState } from "react";
import HeroImg from "../assets/hero-img.jpg";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Skill from "../components/Skill";
import { skills, projects } from "../utils/constant ";

function Home() {
  const categories = ["All", "Frontend", "Backend", "Database"];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="bg-amber-100">
      {/* HERO SECTION */}
      <section
        id="home"
        className="flex flex-1 w-full min-h-[750px]  justify-evenly items-center bg-linear-to-b from-white bg-amber-100"
      >
        <div className="space-y-2 max-w-lg">
          <p className="text-2xl">Hi, I'm</p>
          <p className="text-5xl font-semibold">Ravi Kourav</p>
          <p className="text-2xl">Full Stack Developer</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Building fast, scalable, and modern web applications. Creating
            interfaces that look great and perform even better. Driven by
            curiosity and continuous learning, I strive to deliver work that is
            both practical and impactful.
          </p>
          <div className="pt-4 pb-3">
            <a
              href="/resume.pdf"
              download="Ravi-Kourav-Resume.pdf"
              className="bg-(--brand-primary) text-white px-4 py-2 rounded-lg hover:bg-(--brand-primary-dark) transition"
            >
              Download Resume
            </a>
            <div></div>
          </div>
        </div>

        <div className="w-64 h-64 bg-gray-200 rounded-full overflow-hidden">
          <img
            src={HeroImg}
            alt="Profile-Picture"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="tech-stack"
        className="w-full py-10 bg-linear-to-b from-amber-100 via-white to-white flex flex-col items-center"
      >
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        {/* Filter buttons */}
        <div className="flex gap-4 mb-6 flex-wrap justify-center">
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
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center max-w-xl gap-4 px-4 mx-auto">
          {skills
            .filter(
              (skill) =>
                activeCategory === "All" || skill.category === activeCategory
            )
            .map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="w-full pt-10 pb-15 bg-linear-to-b from-white to-amber-100 flex flex-col items-center"
      >
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl w-full px-6">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: project.id * 0.2 }}
              className="max-w-[350px] bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
            >
              <div className="w-full h-60 sm:h-64 lg:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-2 text-center">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="w-full py-24 bg-linear-to-b from-amber-100 to-white flex justify-center items-start px-6"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6"
          >
            <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
            <p className="text-gray-700 text-lg">
              Feel free to get in touch, I’d love to hear from you.
            </p>

            <div className="flex space-y-3 mt-2">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 transition text-2xl"
              >
                <Icon icon="mdi:github" width="40" height="40" />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-600 transition text-2xl"
              >
                <Icon icon="mdi:linkedin" width="40" height="40" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-10 sm:p-12 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col">
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
              className="w-full bg-(--brand-primary)  text-white p-4 rounded-xl font-semibold shadow-md hover:bg-(--brand-primary-dark) transition"
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

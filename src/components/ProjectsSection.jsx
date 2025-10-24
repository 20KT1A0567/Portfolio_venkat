
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "VenkatEstate Management System",
    description:
      "A full-featured real estate management platform with secure authentication, property booking, and interactive Google Maps integration.",
    image: "/projects/project1.png",
    tags: ["Java", "Spring Boot", "React", "Razorpay API", "JWT", "Google Maps API"],
    demoUrl: "https://realestatevenkatarao.netlify.app",
    githubUrl: "https://github.com/20KT1A0567",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A scalable e-commerce web application with role-based access control, Razorpay payments, and a modern React + Spring Boot architecture.",
    image: "/projects/project2.png",
    tags: ["Java", "Spring Boot", "React", "Razorpay API", "JWT", "MySQL"],
    demoUrl: "https://ecommerce-venkat.netlify.app",
    githubUrl: "https://github.com/20KT1A0567",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A MERN stack streaming platform with authentication, search, and user profile features inspired by Netflix UI and experience.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "https://netflix-clone-7.onrender.com",
    githubUrl: "https://github.com/20KT1A0567",
  },
  {
    id: 4,
    title: "Weather Application",
    description:
      "A responsive weather forecast app that fetches real-time data using the OpenWeather API with a clean and minimal UI.",
    image: "/projects/project4.png",
    tags: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
    demoUrl: "https://weatherapp186.netlify.app",
    githubUrl: "https://github.com/20KT1A0567",
  },
];

export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Here are some of my real-world projects showcasing my expertise in Java Full Stack 
          and MERN technologies — blending strong backend architecture with clean, responsive 
          front-end design.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, key) => (
            <motion.div
              key={key}
              variants={itemVariants}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/20KT1A0567"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Code, User, Download, Mail } from "lucide-react";

export const AboutSection = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6 text-center md:text-left">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold text-primary"
            >
              Full Stack Software Engineer
            </motion.h3>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              I'm <span className="font-semibold text-foreground">Venkatarao</span>,
              a passionate and detail-oriented Full Stack Developer specializing
              in <span className="text-primary font-medium">Java, Spring Boot, React</span>.
              I enjoy building scalable, secure, and user-friendly web applications
              that combine strong backend logic with elegant front-end design.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              My experience spans across backend architecture, RESTful API integration,
              JWT authentication, and responsive UI development using modern tools like
              React, Tailwind CSS, and Material UI. I'm always exploring new technologies
              to improve performance and deliver seamless digital experiences.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              Beyond coding, I value collaboration, continuous learning, and building
              products that make a real-world impact.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
            >
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/venkat_resume.pdf"
                download="Venkatarao_Dama_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Cards */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 gap-6"
          >
            {/* Web Development Card */}
            <motion.div
              variants={cardVariants}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="p-3 rounded-full bg-primary/10"
                >
                  <Code className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">Web Development</h4>
                  <p className="text-muted-foreground">
                    Developing responsive, high-performance web applications using React,
                    Spring Boot, and RESTful APIs.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Java Development Card */}
            <motion.div
              variants={cardVariants}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="p-3 rounded-full bg-primary/10"
                >
                  <Briefcase className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">Java Development</h4>
                  <p className="text-muted-foreground">
                    Building robust backend systems using Java and Spring Boot,
                    implementing RESTful APIs, and integrating databases like MySQL
                    for secure and scalable application performance.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Personal Approach Card */}
            <motion.div
              variants={cardVariants}
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="p-3 rounded-full bg-primary/10"
                >
                  <User className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">My Approach</h4>
                  <p className="text-muted-foreground">
                    Focus on clean code, best practices, and user-centric design.
                    Committed to continuous learning and delivering quality solutions
                    that exceed expectations.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
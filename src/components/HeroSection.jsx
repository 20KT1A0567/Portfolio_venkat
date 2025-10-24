
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scrollButtonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 2
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            <span>Hi, I'm</span>
            <span className="text-primary"> Venkatarao</span>
            <span className="text-gradient ml-2"> Dama</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I'm a Full Stack Software Engineer passionate about building scalable, 
            secure, and user-focused web applications. I specialize in the Java Full Stack development — crafting seamless experiences from 
            backend logic to responsive front-end interfaces.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="pt-4"
          >
            <a href="#projects" className="cosmic-button">
              Explore My Projects
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        variants={scrollButtonVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};
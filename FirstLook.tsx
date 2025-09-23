import React from "react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Stars from "../components/Stars";
import Nebula from "../components/Nebula";
import WhiteParticles from "../components/WhiteParticles";
import GlowButton from "../components/GlowButton";
import styles from "./FirstLook.module.css";

const FirstLook: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0, rotateX: -45 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      y: 100,
      rotateY: -45,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    },
  };

  const buttonVariants = {
    idle: {
      scale: 1,
      boxShadow: "0 4px 15px rgba(138, 0, 0, 0.2)",
      y: 0,
      rotateX: 0,
    },
    hover: {
      scale: 1.08,
      y: -5,
      rotateX: 5,
      boxShadow: "0 15px 35px rgba(138, 0, 0, 0.4)",
    },
    tap: {
      scale: 0.95,
      y: -2,
      rotateX: 2,
    },
  };

  const handleJump = () => {
    navigate("/main");
  };

  return (
    <motion.div
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 우주 배경 레이어들 */}
      <div className={styles.spaceBackground} />
      <Stars />
      <Nebula />
      <WhiteParticles />

      {/* 새로운 중앙 정렬 헤더 */}
      <motion.div className={styles.headerContainer} variants={itemVariants}>
        <motion.div
          className={styles.headerBadge}
          animate={{
            boxShadow: [
              "0 0 20px rgba(255, 255, 255, 0.2)",
              "0 0 30px rgba(255, 255, 255, 0.4)",
              "0 0 20px rgba(255, 255, 255, 0.2)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className={styles.badgeText}>Team: AXIS</span>
          <motion.div
            className={styles.dividerDot}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className={styles.badgeText}>Project: NOOS</span>
        </motion.div>
      </motion.div>

      <motion.div className={styles.mainContent} variants={titleVariants}>
        <motion.h1
          className={styles.title}
          initial={{
            letterSpacing: "0.5em",
            opacity: 0,
            scale: 0.8,
            rotateZ: -5,
          }}
          animate={{
            letterSpacing: "-0.02em",
            opacity: 1,
            scale: 1,
            rotateZ: 0,
          }}
          transition={{
            duration: 2,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.span
            initial={{ display: "inline-block", y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            jump into
          </motion.span>
          <br />
          <motion.span
            initial={{ display: "inline-block", y: 50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Project : NOOS
          </motion.span>
        </motion.h1>

        <GlowButton onClick={handleJump}>
          🚀 JUMP
        </GlowButton>
      </motion.div>

      <motion.div
        className={styles.glowEffect}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default FirstLook;

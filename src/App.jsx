import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import TextType from "./components/TextType";
import GradientText from "./components/GradientText";
import PrismaticBurst from "./components/PrismaticBurst";
import CircularGallery from "./components/CircularGallery";
import MagicBento from "./components/MagicBento";
import TrueFocus from "./components/TrueFocus";
import BlurText from "./components/BlurText";
import Aurora from "./components/Aurora";
import FirstLook from "./FirstLook";
import Login from "./components/Login";
import ClickSpark from "./components/ClickSpark";
import SpaceTravel from "./components/SpaceTravel";
import SolarExplorer from "./components/SolarExplorer";

// Helper to prefix assets for GitHub Pages subpath
const asset = (p) => `${process.env.PUBLIC_URL}${p}`;

// Gallery images - kept for potential future use

// Image assets - matched by name and purpose
const imgIcon1 = asset("/icon.png"); // Project logo/icon
const imgMichaelDanielsYHh07IgjajmUnsplash1 = asset("/section2.png"); // Main hero/about section background
const imgVector = asset("/section5.png"); // Section 5 brand image

// Hardware/Product images
const imgImage22 = asset("/muse.png"); // Muse S Athena
const imgImage23 = asset("/aiobjet.png"); // AI Object main
const imgImage24 = asset("/multiplatform.png"); // Multiplatform

// Process step images
const imgTSbhXcBw10HvxPaJ6SsTtRiiplkPng = asset("/10 1.png"); // Step 1 illustration
const imgMX5DAhTlaceN4NDguCeAZcFbIPng = asset("/10 2.png"); // Space travel illustration
const img7VSjm6K3MAQqqM3HtSKme77ZhCsPng = asset("/10 3.png"); // Dashboard/past analysis illustration

// Background images for sections
const img5Rl6Euo2A82GoM2LuomsVwa2LtgPng = asset("/section 9 1.png"); // Web platform background
const imgUNfqhpKdcciDtsQpSwaR0GNx46IJpg = asset("/section 9 2.png"); // Section 9 Media Gallery background
const imgImageBhlGrMWa8BjbLVs1247F4KgYyaJpg = asset("/last.png"); // CTA section background
const img0XbktCoQ1FitPsBfXIm6XgBs0SkJpg = asset("/section 9 2.png"); // Section 9 part 2

// Section 1 - Hero
const HeroSection = ({ onLoginClick }) => {
  return (
    <section className="bg-black relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0">
        <Aurora
          colorStops={["#5227FF", "#7cff67", "#FF27B3"]}
          amplitude={1.2}
          blend={0.7}
          speed={1.5}
        />
      </div>
      <div className="max-w-[1512px] mx-auto px-4 h-full relative z-10">
        {/* Navigation Header */}
        <motion.nav
          className="flex items-center justify-between py-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-[72px] w-[106px] overflow-hidden">
              <img
                alt="Project NOOS Logo"
                className="block max-w-none h-full w-full object-contain hover:scale-105 transition-transform duration-300"
                height="72"
                src={imgIcon1}
                width="106"
              />
            </div>
            <div className="font-cardinal-fruit text-[16px] text-white">
              Project : NOOS
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              onClick={() => {
                const functionsSection =
                  document.getElementById("functions-section");
                if (functionsSection) {
                  functionsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="font-cardinal-fruit text-[16px] text-white hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              Functions
            </button>
            <Link
              to="/about"
              className="font-cardinal-fruit text-[16px] text-white hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              About us
            </Link>
            <button
              onClick={() => {
                const contactSection =
                  document.getElementById("contact-section");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="font-cardinal-fruit text-[16px] text-white hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105"
            >
              Contact us
            </button>
          </motion.div>
        </motion.nav>

        {/* Hero Content */}
        <motion.div
          className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] text-center space-y-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className="space-y-12 max-w-5xl">
            <motion.h1
              className="font-cardinal-fruit text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-white leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                Redefining focus, creativity, and balance
              </motion.div>
              <motion.div
                className="text-[rgba(255,255,255,0.8)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                in real time.
              </motion.div>
            </motion.h1>

            <motion.p
              className="font-freesentation font-medium text-[16px] md:text-[18px] text-[#929292] max-w-3xl mx-auto leading-relaxed space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div>당신의 생각과 감정을 읽어 최적의 몰입과 위로를</div>
              <div>선사하는 지능형 공간.</div>
            </motion.p>
          </div>

          <motion.div
            onClick={onLoginClick}
            className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-[50px] px-8 py-4 inline-flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.2)] hover:scale-105 hover:shadow-lg hover:shadow-white/10"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="font-cardinal-fruit text-[18px] md:text-[20px] text-[rgba(255,255,255,0.8)] tracking-[-0.42px]">
              Use on the web
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 2 - About
const AboutSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className="bg-black relative min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className="max-w-[1512px] mx-auto px-4 py-16"
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.h2 className="font-cardinal-fruit text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Redefining
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  focus, creativity, and balance
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="text-[#929292]"
                >
                  - in real time
                </motion.div>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.6, delay: 1.2 }}
                className="font-freesentation-black text-[24px] text-white"
              >
                집중, 창의, 균형을 실시간으로 재정의.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="space-y-6 font-freesentation font-medium text-[18px] md:text-[20px] text-white leading-relaxed"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                저희는 현대 사회가 직면한 근본적인 문제를 해결하고자 하는
                고민에서 출발했습니다.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                오늘날 우리는 디지털 기술과 AI의 발전 속에서 누구보다 빠르게
                연결되고 있지만,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                정작 집중력 결핍, 창의성 저하, 정서적 불안정과 같은 문제에
                끊임없이 노출되고 있습니다.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <div className="relative h-[600px] lg:h-[800px] rounded-2xl overflow-hidden">
            <img
              alt="About Section Visual"
              className="w-full h-full object-cover"
              src={imgMichaelDanielsYHh07IgjajmUnsplash1}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

// Section 3 - Problem Statement 1
const ProblemSection1 = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section
      ref={ref}
      className="bg-black relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <motion.div
        className="w-full max-w-6xl mx-auto px-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
        }
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, rotateX: 0 }
              : { opacity: 0, scale: 0.9, rotateX: 15 }
          }
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="font-sf-pro text-[64px] text-center text-white tracking-[-1.28px] font-black space-y-4"
          style={{ perspective: "1000px" }}
        >
          <TextType
            text="현대 사회는 몰입과 창의성, 그리고 정서적 안정이 동시에 요구되지만 이를 지원하는 환경은 부족합니다."
            as="div"
            typingSpeed={80}
            initialDelay={1000}
            pauseDuration={3000}
            deletingSpeed={30}
            loop={true}
            className="leading-[1.2]"
            showCursor={true}
            cursorCharacter="_"
            cursorClassName="text-white opacity-90"
            startOnVisible={true}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Section 4 - Problem Statement 2
const ProblemSection2 = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.section
      ref={ref}
      className="bg-black relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      <motion.div
        className="bg-black relative size-full"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={
          isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }
        }
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center w-full h-full"
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={
            isInView
              ? { y: 0, opacity: 1, scale: 1 }
              : { y: 50, opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        >
          <GradientText
            colors={["#ffaa40", "#9c40ff", "#ffaa40"]}
            animationSpeed={6}
            className="leading-[1.32] whitespace-pre text-[96px] font-sf-pro-heavy tracking-[-1.92px] text-center mx-auto"
          >
            사람을 위한 기술, 함께 숨쉬는 공간.
          </GradientText>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

// Section 5 - Brand
const BrandSection = () => {
  return (
    <section className="bg-black relative min-h-screen overflow-hidden">
      {/* PrismaticBurst Background */}
      <div className="absolute inset-0 w-full h-full">
        <PrismaticBurst
          intensity={3}
          speed={0.3}
          animationType="rotate3d"
          colors={["#ffaa40", "#9c40ff", "#ff6b6b", "#4ecdc4", "#45b7d1"]}
          distort={15}
          rayCount={8}
          mixBlendMode="screen"
        />
      </div>

      <div className="relative z-10 max-w-[1512px] mx-auto px-4 h-full flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          {/* Brand Logo/Vector */}
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              alt="NOOS Brand Vector"
              className="block max-w-none"
              height="145"
              src={imgVector}
              width="213"
            />
          </motion.div>

          {/* Brand Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <h1 className="font-cardinal-fruit text-5xl md:text-6xl lg:text-7xl xl:text-[96px] text-white text-center leading-tight drop-shadow-2xl">
              Project : NOOS
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Section 6 - Gallery
const GallerySection = () => {
  const galleryItems = [
    { image: asset("/197937fa-fb9c-46ec-9501-78795206aa58_650.jpg"), text: "" },
    { image: asset("/20f5711b-b61e-411c-acf0-99c0921ec9a9_650.jpg"), text: "" },
    { image: asset("/6f620988-4c69-41a0-a9e2-7a1dca7cebb1_650.jpg"), text: "" },
    { image: asset("/75b087fd-df9b-47b1-827e-7cb36d5703ec_650.jpg"), text: "" },
    { image: asset("/7634883_YiY5IqT601.jpg"), text: "" },
    { image: asset("/c3eaa544-8727-4891-8580-272968b749b8_650.jpg"), text: "" },
    { image: asset("/ca2c99f3-e49c-47ee-8791-8f3e21775fdc_650.jpg"), text: "" },
    { image: asset("/dff013db-1785-4cd2-8347-3cd7da910618_650.jpg"), text: "" },
    { image: asset("/f841a441-4988-4fbc-bd4d-0cdf601a67cb_650.jpg"), text: "" },
  ];

  return (
    <section className="bg-black relative py-20 min-h-screen flex flex-col">
      {/* Header */}
      <div className="max-w-[1512px] mx-auto px-4 pt-16">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center justify-center bg-[rgba(0,140,255,0.1)] rounded-full px-5 py-3">
            <span className="font-cardinal-fruit text-[#a3ceff] text-[16px] tracking-[-0.32px]">
              Design
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="font-sf-pro-bold text-4xl md:text-5xl lg:text-6xl text-white text-center leading-tight tracking-[-3.1px] font-bold">
              <div>광활하고도</div>
              <div>조용한 암흑으로부터.</div>
            </h2>

            <div className="font-freesentation text-[20px] text-[rgba(255,255,255,0.7)] text-center max-w-2xl mx-auto space-y-2">
              <p>저희는 광활하고도 조용한, 암흑 속 우주에 대해</p>
              <p>디자인 영감을 받았습니다.</p>
              <p>각 행성별 테마를 느끼고, 떠나보세요.</p>
            </div>
          </div>

          <div className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.08)] rounded-full px-4 py-3 inline-flex items-center justify-center">
            <span className="font-cardinal-fruit text-[20px] md:text-[24px] text-[rgba(255,255,255,0.7)] tracking-[-0.42px]">
              Discover More
            </span>
          </div>
        </div>
      </div>

      {/* Spacer to push gallery down */}
      <div className="mt-4"></div>

      {/* CircularGallery - Full Width Below Button */}
      <div className="h-[600px] w-full">
        <CircularGallery
          key="local-images-gallery"
          items={galleryItems}
          bend={1.5}
          textColor="#ffffff"
          borderRadius={0.05}
          font="bold 24px 'Cardinal Fruit'"
          scrollSpeed={2.5}
          scrollEase={0.08}
        />
      </div>
    </section>
  );
};

// Section 7 - Features
const FeaturesSection = () => {
  const headerRef = React.useRef(null);
  const bentoRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isBentoInView = useInView(bentoRef, { once: true, amount: 0.2 });

  return (
    <section className="bg-black relative py-20">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 80 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="bg-[rgba(0,140,255,0.1)] inline-flex items-center justify-center rounded-full px-5 py-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeaderInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-cardinal-fruit text-[#a3ceff] text-[16px] tracking-[-0.32px]">
              Features
            </span>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h2
              className="font-sf-pro-bold text-4xl md:text-5xl lg:text-6xl text-white text-center leading-tight tracking-[-3.1px] font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={
                isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              강력한 기능.
            </motion.h2>
            <motion.h3
              className="font-cardinal-fruit text-4xl md:text-5xl lg:text-6xl text-white text-center leading-tight tracking-[-3.1px]"
              initial={{ opacity: 0, x: 30 }}
              animate={
                isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Project : NOOS
            </motion.h3>
          </motion.div>
        </motion.div>

        {/* MagicBento Grid */}
        <motion.div
          id="functions-section"
          ref={bentoRef}
          className="flex justify-center"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={
            isBentoInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 100, scale: 0.9 }
          }
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut",
            type: "spring",
            bounce: 0.2,
          }}
        >
          <MagicBento
            enableSpotlight={true}
            enableBorderGlow={false}
            enableStars={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="132, 0, 255"
            particleCount={8}
          />
        </motion.div>
      </div>
    </section>
  );
};

// Section 8 - Hardware Process
const HardwareSection = () => {
  const processes = [
    {
      number: "01",
      title: "Muse S Athena",
      description:
        "Muse S Athena는 Interaxon이라는 회사에서 만든 뇌 활동 측정 + 수면 + 정신 피트니스 웨어러블 장치. 가장 중요한 특징은 EEG(뇌파 측정)뿐만 아니라 fNIRS(functional Near-Infrared Spectroscopy) 를 함께 사용한다는 것. EEG는 전기적 뇌파 활동을, fNIRS는 뇌에 흐르는 혈액의 산소/혈류 상태를 측정하여 뇌 피트니스(인지 노력, 정신적 피로, 집중력, 회복 등)를 종합적으로 파악가능",
      image: imgImage22,
    },
    {
      number: "02",
      title: "AI Objet",
      description:
        "Muse S Athena의 종합 데이터를 추론. 심리학적 논문을 기반으로 학습된 AI를 통해 최적화된 환경을 제공. 최적화된 조명, 사운드, 습도, 온도를 제공하는 것을 목표로 하고있음.",
      image: imgImage23,
    },
    {
      number: "03",
      title: "Multi - Platform",
      description: "IOS, Android, WEB 전부 구동 지원.",
      image: imgImage24,
    },
  ];

  const ProcessCard = ({ process, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
      <motion.div
        key={index}
        ref={ref}
        className="bg-black border border-[#222225] rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 100, scale: 0.8 }
        }
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: "easeOut",
          type: "spring",
          bounce: 0.3,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Image Section */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
          >
            <div className="w-full max-w-md">
              <img
                src={process.image}
                alt={process.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
          >
            <div className="flex items-center gap-4">
              <span className="font-cardinal-fruit text-[27.2px] leading-[24.48px] text-[rgba(255,255,255,0.4)]">
                {process.number}
              </span>
              <span className="font-cardinal-fruit text-[27.2px] leading-[24.48px] text-white">
                {process.title}
              </span>
            </div>

            <div className="w-full h-px bg-[#222225]"></div>

            <div className="font-freesentation text-[16px] leading-[19.2px] text-[rgba(255,255,255,0.4)]">
              {process.description}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="bg-black relative py-20">
      <div className="box-border content-stretch flex flex-col items-center justify-end pb-[60px] pt-[30px] px-[30px] relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] items-center justify-start max-w-[1280px] px-[72px] py-0 relative shrink-0 w-full">
          <div className="bg-[rgba(0,140,255,0.1)] box-border content-stretch flex items-center justify-center pb-[12px] pt-[11px] px-[20px] relative rounded-[100px] shrink-0">
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3ceff] text-[16px] text-nowrap tracking-[-0.32px]">
                  <p className="leading-[19.2px] whitespace-pre">Hardware</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_9px_0px_inset_rgba(111,190,255,0.3)]" />
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
              <TrueFocus
                sentence="누구보다 빠르고 정확하게"
                manualMode={false}
                blurAmount={5}
                borderColor="#a3ceff"
                glowColor="rgba(163, 206, 255, 0.6)"
                animationDuration={0.8}
                pauseBetweenAnimations={1.5}
              />
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[8px] px-0 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
                <div className="capitalize flex flex-col font-cardinal-fruit justify-center leading-[0] not-italic relative shrink-0 text-[62px] text-center text-white tracking-[-3.1px] w-full">
                  <p className="leading-[62px]">Project : NOOS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-8">
            {processes.map((process, index) => (
              <ProcessCard key={index} process={process} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 9 - Media Gallery
const MediaGallerySection = () => {
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX - dragOffset);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newOffset = e.clientX - dragStart;
    const maxOffset = 400; // 드래그 범위 제한

    setDragOffset(Math.max(-maxOffset, Math.min(maxOffset, newOffset)));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragStart, handleMouseMove]);

  return (
    <section className="bg-black relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full flex items-center justify-center px-4">
        <div
          className="flex gap-4 cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out"
          style={{
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Left Card - Web */}
          <div className="relative w-full max-w-[720px] h-[480px] overflow-hidden rounded-[28px] shadow-2xl flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${img5Rl6Euo2A82GoM2LuomsVwa2LtgPng}')`,
              }}
            />
            <div className="absolute top-12 left-12 z-10">
              <div className="text-black font-sf-pro-bold text-[32px] leading-[40px] font-bold">
                <p className="mb-2">웹에서도</p>
                <p className="mb-2">빠르고 강력하게.</p>
                <p className="mb-2">&nbsp;</p>
                <p>어디서나.</p>
              </div>
            </div>
          </div>

          {/* Right Card - Desktop */}
          <div className="relative w-full max-w-[720px] h-[480px] bg-[#f6f0fe] overflow-hidden rounded-[28px] shadow-2xl flex-shrink-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${imgUNfqhpKdcciDtsQpSwaR0GNx46IJpg}')`,
              }}
            />
            <div className="absolute bottom-12 left-12 z-10">
              <div className="text-black font-cardinal-fruit text-[32px] leading-[40px] font-bold">
                <p className="mb-2">Mac, Windows</p>
                <p>전부 지원.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drag Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <p className="text-white/60 text-sm font-cardinal-fruit">
          좌우로 드래그해보세요
        </p>
      </div>
    </section>
  );
};

// Section 10 - How it Works
const HowItWorksSection = () => {
  const steps = [
    {
      title: "측정하고, 바로 집중 시작.",
      description:
        "강력한 Muse S Athena의 뇌파 측정 기능을 이용하여, 최적화된 환경을 제공받아 바로 집중 시작.",
      image: imgTSbhXcBw10HvxPaJ6SsTtRiiplkPng,
      reverse: false,
    },
    {
      title: "꿈에 그리던 우주여행을 현실로.",
      description:
        "집중, 휴식과 같은 테마별로 다른 행성을 여행하며 순간 집중, 편안한 휴식까지.",
      image: imgMX5DAhTlaceN4NDguCeAZcFbIPng,
      reverse: true,
    },
    {
      title: "과연 과거는 과거일뿐?",
      description:
        "강력한 Dashboard기능을 통한 이번달의 나는 어땠는지 일순간에 확인.",
      image: img7VSjm6K3MAQqqM3HtSKme77ZhCsPng,
      reverse: false,
    },
  ];

  const StepCard = ({ step, index }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
      <motion.div
        key={index}
        ref={ref}
        className={`content-stretch flex gap-[20px] items-center justify-start relative shrink-0 w-full ${
          step.reverse ? "flex-row-reverse" : ""
        }`}
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          ease: "easeOut",
          type: "spring",
          bounce: 0.2,
        }}
      >
        <motion.div
          className="flex items-center justify-center px-0 py-[40px] relative shrink-0 w-[497.78px]"
          initial={{ opacity: 0, x: step.reverse ? 50 : -50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: step.reverse ? 50 : -50 }
          }
          transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        >
          <div className="h-[550.59px] relative shrink-0 w-[270px] overflow-hidden rounded-lg">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          className="content-stretch flex flex-col gap-[15.095px] items-start justify-center relative shrink-0 w-[622.22px]"
          initial={{ opacity: 0, x: step.reverse ? -50 : 50 }}
          animate={
            isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: step.reverse ? -50 : 50 }
          }
          transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
        >
          <div className="content-stretch flex flex-col items-start justify-start min-w-[622.22px] relative shrink-0">
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
              <div className="capitalize flex flex-col font-sf-pro-bold justify-center leading-[0] relative shrink-0 text-[52px] text-nowrap text-white tracking-[-2.6px] font-bold">
                <p className="leading-[52px] whitespace-pre">{step.title}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
              <div
                className="flex flex-col font-cardinal-fruit justify-center leading-[27.2px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre"
                style={{ fontVariationSettings: "'wght' 400" }}
              >
                <p className="leading-[27.2px]">{step.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="bg-black relative py-20">
      <div className="box-border content-stretch flex flex-col gap-[140px] items-center justify-center px-[150px] py-[95px] relative size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-center justify-center max-w-[500px] relative shrink-0 w-[500px]">
          <div className="bg-[rgba(0,140,255,0.1)] box-border content-stretch flex items-center justify-center pb-[12px] pt-[11px] px-[20px] relative rounded-[100px] shrink-0">
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3ceff] text-[16px] text-nowrap tracking-[-0.32px]">
                  <p className="leading-[19.2px] whitespace-pre">
                    How it works
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_9px_0px_inset_rgba(111,190,255,0.3)]" />
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
              <BlurText
                text="생각을 몰입으로,"
                delay={150}
                className="font-sf-pro-bold text-[52px] text-center text-white tracking-[-2.6px] font-bold leading-[52px]"
                animateBy="words"
                direction="top"
              />
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[4px] px-0 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full space-y-4">
                <BlurText
                  text="감정을 인식으로"
                  delay={200}
                  className="font-sf-pro-bold text-[64px] text-center text-white tracking-[-2.6px] font-bold leading-[52px]"
                  animateBy="words"
                  direction="top"
                />
                <div className="whitespace-nowrap">
                  <BlurText
                    text="눈깜짝한 순간어느새 최적화."
                    delay={250}
                    className="font-sf-pro-bold text-[64px] text-center text-white tracking-[-2.6px] font-bold leading-[52px] whitespace-nowrap inline-flex"
                    animateBy="words"
                    direction="top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[60px] items-start justify-start relative shrink-0 w-full">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 11 - Pricing
const PricingSection = () => {
  const headerRef = React.useRef(null);
  const cardsRef = React.useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isCardsInView = useInView(cardsRef, { once: true, amount: 0.2 });

  return (
    <section className="bg-black relative py-20">
      <div className="backdrop-blur-md backdrop-filter bg-[rgba(5,7,10,0.73)] box-border content-stretch flex flex-col gap-[97px] items-center justify-center overflow-clip px-[80px] py-[140px] relative rounded-[70px] size-full">
        <motion.div
          ref={headerRef}
          className="content-stretch flex flex-col gap-[28px] items-center justify-center max-w-[650px] relative shrink-0 w-[650px]"
          initial={{ opacity: 0, y: 80 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }
          }
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="bg-[rgba(0,140,255,0.1)] box-border content-stretch flex items-center justify-center pb-[12px] pt-[11px] px-[20px] relative rounded-[100px] shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeaderInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3ceff] text-[16px] text-nowrap tracking-[-0.32px]">
                  <p className="leading-[19.2px] whitespace-pre">Pricing</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_9px_0px_inset_rgba(111,190,255,0.3)]" />
          </motion.div>
          <motion.div
            className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
              <div className="capitalize flex flex-col font-sf-pro-bold justify-center leading-[0] relative shrink-0 text-[62px] text-center text-white tracking-[-3.1px] w-full font-bold">
                <p className="leading-[62px]">당신을 위한 합리적 가격.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          ref={cardsRef}
          className="bg-[rgba(255,255,255,0.02)] box-border content-stretch flex flex-col gap-[11.99px] items-start justify-start overflow-clip p-[12px] relative rounded-[40px] shrink-0 w-full"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={
            isCardsInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 100, scale: 0.9 }
          }
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: "easeOut",
            type: "spring",
            bounce: 0.2,
          }}
        >
          <motion.div
            className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[76px] items-start justify-center overflow-clip p-[72px] relative rounded-[28px] shadow-[0px_0.796px_0.796px_-0.938px_rgba(0,0,0,0.18),0px_2.415px_2.415px_-1.875px_rgba(0,0,0,0.17),0px_6.383px_6.383px_-2.813px_rgba(0,0,0,0.15),0px_20px_20px_-3.75px_rgba(0,0,0,0.06)] shrink-0 w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={
              isCardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="basis-0 content-stretch flex flex-col gap-[91px] grow items-start justify-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[13px] items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  <div className="capitalize flex flex-col font-cardinal-fruit justify-center leading-[0] not-italic relative shrink-0 text-[70px] text-white tracking-[-1.4px] w-full">
                    <p className="leading-[70px]">Basic</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  <div className="flex flex-col font-cardinal-fruit font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
                    <p className="leading-[27.2px]">저는 돈이없어요</p>
                  </div>
                </div>
              </div>
              <a
                className="bg-[rgba(255,255,255,0.1)] box-border content-stretch cursor-pointer flex items-center justify-center overflow-clip pb-[14px] pl-[217.22px] pr-[217.23px] pt-[13px] relative rounded-[100px] shrink-0"
                href="https://sprrrint.com/"
              >
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div
                      className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]"
                      role="link"
                      tabIndex="0"
                    >
                      <p className="cursor-pointer leading-[19.2px] whitespace-pre">
                        Get Started
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[29px] grow items-start justify-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white tracking-[-1.44px] w-full">
                  <p className="leading-[48px]">Free</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[15px] items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  <div className="flex flex-col font-cardinal-fruit font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
                    <p className="leading-[27.2px]">Features :</p>
                  </div>
                </div>
                {["룰루랄라", "ㅃ뿅뿅뿅", "야야야야야ㅑ야야야"].map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
                    >
                      <div className="shrink-0 size-[26px]" />
                      <div className="content-stretch flex flex-col items-start justify-start min-w-[484px] relative shrink-0">
                        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                          <div className="flex flex-col font-cardinal-fruit font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                            <p className="leading-[27.2px] whitespace-pre">
                              {feature}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="box-border content-stretch flex gap-[76px] items-start justify-center overflow-clip p-[72px] relative rounded-[35px] shrink-0 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={
              isCardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="basis-0 content-stretch flex flex-col gap-[91px] grow items-start justify-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[13px] items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  <div className="capitalize flex flex-col font-cardinal-fruit justify-center leading-[0] not-italic relative shrink-0 text-[70px] text-white tracking-[-1.4px] w-full">
                    <p className="leading-[70px]">Pro</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  <div className="flex flex-col font-cardinal-fruit font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
                    <p className="leading-[27.2px]">나는야 돈이 많아요</p>
                  </div>
                </div>
              </div>
              <a
                className="bg-[#52a2ed] box-border content-stretch cursor-pointer flex items-center justify-center overflow-clip pb-[14px] pl-[217.22px] pr-[217.23px] pt-[13px] relative rounded-[100px] shrink-0"
                href="https://sprrrint.com/"
              >
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div
                      className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]"
                      role="link"
                      tabIndex="0"
                    >
                      <p className="cursor-pointer leading-[19.2px] whitespace-pre">
                        Get Started
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_10px_0px_inset_rgba(255,255,255,0.65)]" />
              </a>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-[29px] grow items-start justify-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white tracking-[-1.44px] w-full">
                  <p className="leading-[48px]">$9.99</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[15px] items-start justify-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  <div className="flex flex-col font-cardinal-fruit font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-full">
                    <p className="leading-[27.2px]">Features :</p>
                  </div>
                </div>
                {[
                  "저는 부자가 될래요",
                  "헉 돈이 많으면 뭐하지",
                  "먹고자고 놀래요",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0"
                  >
                    <div className="shrink-0 size-[26px]" />
                    <div className="content-stretch flex flex-col items-start justify-start min-w-[484px] relative shrink-0">
                      <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                        <div className="flex flex-col font-cardinal-fruit font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                          <p className="leading-[27.2px] whitespace-pre">
                            {feature}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 12 - CTA
const CtaSection = () => {
  return (
    <section id="contact-section" className="bg-black relative">
      <div className="bg-black content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="absolute content-stretch flex inset-0 items-center justify-center">
          <div
            className="bg-left bg-no-repeat bg-cover h-full opacity-70 shrink-0 w-full"
            style={{
              backgroundImage: `url('${imgImageBhlGrMWa8BjbLVs1247F4KgYyaJpg}')`,
            }}
          />
        </div>
        <div className="h-[191.75px] max-w-[1440px] overflow-clip relative shrink-0 w-full">
          <a
            className="absolute bg-black box-border content-stretch cursor-pointer flex items-center justify-center left-[30px] overflow-clip pb-[10px] pt-[9px] px-[24px] top-[152.56px]"
            href="https://vence.framer.website/contact"
          >
            <div className="absolute bottom-[1.81%] left-0 right-0 top-0">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(245,245,245,0.1)] border-solid inset-0 pointer-events-none"
              />
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  <div
                    className="flex flex-col font-cardinal-fruit justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white"
                    role="link"
                    tabIndex="0"
                  >
                    <p className="cursor-pointer leading-[19.2px] whitespace-pre">{`Let's work together`}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div
            className="absolute content-stretch flex flex-col gap-[14px] items-start justify-center left-[2.08%] right-[40.42%] translate-y-[-50%]"
            style={{ top: "calc(50% - 35.58px)" }}
          >
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="flex flex-col font-freesentation-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-white w-full font-bold">
                  <p className="leading-[33.6px]">
                    불안정한 국제사회 속, 우리는 안정된 사회를 만들어나가기 위해
                    노력합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] items-center justify-start relative shrink-0 w-full">
              <div className="relative rounded-[23px] shrink-0 size-[38px]">
                <div
                  className="absolute bg-no-repeat bg-size-[119.35%_100%] bg-top inset-0 rounded-[23px]"
                  style={{
                    backgroundImage: `url('${img0XbktCoQ1FitPsBfXIm6XgBs0SkJpg}')`,
                  }}
                />
              </div>
              <div className="content-stretch flex flex-col gap-px items-start justify-center relative shrink-0">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div className="flex flex-col font-cardinal-fruit justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap">
                      <p className="leading-[19.2px] whitespace-pre">
                        Team: AXIS
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div className="flex flex-col font-cardinal-fruit justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap">
                      <p className="leading-[19.2px] whitespace-pre">
                        Univ Student
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <div
            aria-hidden="true"
            className="absolute border-[#222225] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

// 부드러운 전환 효과 컴포넌트 (나중에 변경 예정)
const SmoothTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ pointerEvents: "none" }}
    />
  );
};

// Main App Component
function App() {
  const [showFirstLook, setShowFirstLook] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoginTransitioning, setIsLoginTransitioning] = useState(false);
  const [showSpaceTravel, setShowSpaceTravel] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showSolarExplorer, setShowSolarExplorer] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // URL에 main=true 파라미터가 있으면 메인 페이지로 바로 이동
    if (searchParams.get("main") === "true") {
      setShowFirstLook(false);
    }

    // URL에 spaceTravel=true와 planet 파라미터가 있으면 스페이스 여행 시작
    if (searchParams.get("spaceTravel") === "true") {
      const planet = searchParams.get("planet");
      if (planet) {
        setSelectedPlanet(planet);
        setShowSpaceTravel(true);
        setShowFirstLook(false);
        setShowLogin(false);
      }
    }
  }, [searchParams]);

  // 메인 페이지 표시 상태를 전역에 알리기
  useEffect(() => {
    if (
      !showFirstLook &&
      !showLogin &&
      !showSpaceTravel &&
      !showSolarExplorer
    ) {
      // 메인 페이지가 활성화된 상태임을 표시
      document.body.setAttribute("data-main-page", "true");
    } else {
      document.body.removeAttribute("data-main-page");
    }
  }, [showFirstLook, showLogin, showSpaceTravel, showSolarExplorer]);

  const handleJumpToMain = () => {
    setIsTransitioning(true);

    // 부드러운 전환 후 메인 페이지 표시
    setTimeout(() => {
      setShowFirstLook(false);
      setIsTransitioning(false);
    }, 800); // 0.8초 후 전환 완료
  };

  const handleLoginClick = () => {
    setIsLoginTransitioning(true);

    // 부드러운 전환 후 로그인 페이지 표시
    setTimeout(() => {
      setShowLogin(true);
      setIsLoginTransitioning(false);
    }, 500); // 0.5초 후 전환 완료
  };

  const handleBackFromLogin = () => {
    setIsLoginTransitioning(true);

    // 부드러운 전환 후 메인 페이지로 복귀
    setTimeout(() => {
      setShowLogin(false);
      setIsLoginTransitioning(false);
    }, 500); // 0.5초 후 전환 완료
  };

  const handleBackFromSpaceTravel = () => {
    // 스페이스 여행에서 Solar Explorer로 돌아가기
    setShowSpaceTravel(false);
    setSelectedPlanet(null);
    setShowSolarExplorer(true);
  };

  const handleSolarExplorerOpen = () => {
    // 메인 페이지에서 Solar Explorer로 이동
    setShowSolarExplorer(true);
    setShowFirstLook(false);
    setShowLogin(false);
  };

  const handlePlanetSelect = (planet) => {
    // Solar Explorer에서 행성 선택 시 우주 여행 시작
    console.log("Planet selected:", planet);
    setSelectedPlanet(planet);
    setShowSpaceTravel(true);
    setShowSolarExplorer(false);
  };

  if (showSpaceTravel && selectedPlanet) {
    return (
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <SpaceTravel
            planet={selectedPlanet}
            onBack={handleBackFromSpaceTravel}
          />
        </motion.div>
      </ClickSpark>
    );
  }

  if (showSolarExplorer) {
    return (
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <SolarExplorer onPlanetSelect={handlePlanetSelect} />
        </motion.div>
      </ClickSpark>
    );
  }

  if (showLogin) {
    return (
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Login onBack={handleBackFromLogin} />
        </motion.div>
      </ClickSpark>
    );
  }

  if (showFirstLook) {
    return (
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <FirstLook onJump={handleJumpToMain} />
        {isTransitioning && <SmoothTransition />}
      </ClickSpark>
    );
  }

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <motion.div
        className="App bg-black text-white h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory"
        style={{
          scrollBehavior: "smooth",
          scrollPaddingTop: "0px",
          willChange: "scroll-position",
          transform: "translateZ(0)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoginTransitioning ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* Login Transition Overlay */}
        {isLoginTransitioning && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            />
          </motion.div>
        )}

        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <HeroSection onLoginClick={handleLoginClick} />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <AboutSection />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <ProblemSection1 />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <ProblemSection2 />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <BrandSection />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <GallerySection />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <FeaturesSection />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <HardwareSection />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <MediaGallerySection />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <HowItWorksSection />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <PricingSection />
        </div>
        <div
          className="snap-start min-h-screen"
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <CtaSection />
        </div>
      </motion.div>
    </ClickSpark>
  );
}

export default App;

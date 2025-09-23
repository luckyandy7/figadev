import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightRays from "./LightRays";
import ProfileCard from "./ProfileCard";
import DecryptedText from "./DecryptedText";
import StyledButton from "./StyledButton";
import ShineButton from "./ShineButton";
import ArrowButton from "./ArrowButton";
import { ChromaGrid } from "./ChromaGrid";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const navigate = useNavigate();
  const visionTitleRef = useRef(null);
  const visionContentRef = useRef(null);

  // 팀원 데이터 (ChromaGrid 형식)
  const teamMembers = [
    {
      image: "/suhwan.jpg",
      title: "전수환",
      subtitle: "Teamleader, AI Engineer, FrontEND",
      handle: "@suhw__an",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #4F46E5, #000)",
      url: "https://github.com/",
    },
    {
      image: "/김성은.JPG",
      title: "김성은",
      subtitle: "App developer(IOS,Android)",
      handle: "@s_ungeun318",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #10B981, #000)",
      url: "https://github.com/",
    },
    {
      image: "/권순하.JPG",
      title: "권순하",
      subtitle: "BackEND Developer, Dataset",
      handle: "@sunha",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "https://github.com/",
    },
    {
      image: "/박지호.JPG",
      title: "박지호",
      subtitle: "BackEND Developer, Dataset",
      handle: "@mmoo_0301",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "https://github.com/",
    },
  ];

  useEffect(() => {
    // GSAP ScrollTrigger 애니메이션 설정
    const ctx = gsap.context(() => {
      // Our Vision 제목 애니메이션
      gsap.fromTo(
        visionTitleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionTitleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Our Vision 내용 애니메이션 (제목 이후에 나타남)
      gsap.fromTo(
        visionContentRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionTitleRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-y-auto">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* LightRays Background */}
        <div className="absolute inset-0 opacity-60">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="w-full h-full"
          />
        </div>

        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-6 left-6 z-50"
          >
            <ArrowButton onClick={() => navigate("/?main=true")}>
              홈으로 돌아가기
            </ArrowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-center text-white font-cardinal-fruit">
              TEAM:AXIS
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Team Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2
              ref={visionTitleRef}
              className="font-cardinal-fruit text-5xl md:text-7xl lg:text-8xl text-white mb-8"
            >
              Our Vision
            </h2>
            <p
              ref={visionContentRef}
              className="font-cardinal-fruit text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto"
            >
              불안정한 국제 사회 속, 우주와 같은 고요와 안정을 선사한다
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-cardinal-fruit text-4xl md:text-6xl text-center mb-16 text-white"
          >
            Teammates
          </motion.h2>

          {/* ChromaGrid로 팀원 표시 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <ChromaGrid
              items={teamMembers}
              columns={4}
              rows={1}
              radius={250}
              damping={0.4}
              fadeOut={0.7}
              className="min-h-[400px]"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cardinal-fruit text-4xl md:text-6xl text-white mb-8">
              <DecryptedText
                text="Join Our Journey"
                className="text-white"
                animateOn="view"
                sequential={true}
                speed={80}
                maxIterations={8}
              />
            </h2>
            <p className="font-inter text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              함께 미래를 만들어갈 동료를 찾고 있습니다. 혁신적인 기술로 세상을
              변화시키고 싶다면 언제든 연락주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <StyledButton>팀 합류하기</StyledButton>
              <ShineButton>프로젝트 문의</ShineButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

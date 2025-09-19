import React from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Galaxy from './components/Galaxy';

// Image assets
const imgIcon1 = "http://localhost:3845/assets/7d2b631eeb3a47c7e652c66caa3cce34573b8752.png";
const imgMichaelDanielsYHh07IgjajmUnsplash1 = "http://localhost:3845/assets/36b2310e5a9e698948d722560338e812ac85b065.png";
const imgEllipse1 = "http://localhost:3845/assets/f58a600a07df7e3952b7a3eef3ffd5231fade9f1.png";
const imgVector = "http://localhost:3845/assets/6a696e545560bf4a21da9d3ee02a31bf9db84285.png";

// Gallery images
const imgKct5VregwnmDBsA1S0HqPdLTowJpg = "http://localhost:3845/assets/fac0fd8f72c12a4eddbfdb17ddbb092a4328d23e.png";
const imgGet3F8I5Z9CHllxkCkAjubVyUJpg = "http://localhost:3845/assets/231845f7403af461bc78ff1e30ac55544ef7cdef.png";
const img3Vqc5U42LCtFfIrsFhZ9ROvv8Y0Jpg = "http://localhost:3845/assets/ebd18795380d30c198bb1a962830c68d7d49a523.png";
const imgAz6A0Uc8NwOfP7HkjsXcrjdWszIJpg = "http://localhost:3845/assets/e1f7acda3f4fdaf527b3238e817c0c605a849dea.png";
const imgA1RZiDKnYvHFxkyvCwaFHrjsaIcJpg = "http://localhost:3845/assets/3715d9d40d8bd8a6e372ecdceb3f00bf7e24808d.png";
const imgKTQepXz8E8AxS3GeHlMtdu8JHkJpg = "http://localhost:3845/assets/26b756f877388309ad41d5f2239a42c0d6a930e6.png";
const imgIdfLc4MohasTzmo8L3G2Hb2OyQuJpg = "http://localhost:3845/assets/d5d76ec732389b7f493778d509df094aee81c9ee.png";
const img2N43KNkHjlSkli5J0La8861TEdoJpg = "http://localhost:3845/assets/14c1f908dfa9ac4c9b97aa32f53b920da30e152d.png";
const imgAHsoNtkCgqSslEuwAdcge1EBkJpg = "http://localhost:3845/assets/c0ad74c4d12737aa32937ef68be5e2ba0edb039a.png";
const imgTickerContainer = "http://localhost:3845/assets/48f8df44a4c3c5ff001f2f4dddd50f6520658ffc.svg";
const imgSection = "http://localhost:3845/assets/7df8605f0208d5d6a7bb140751e83c593437bb1a.svg";

// Features images
const imgObjet = "http://localhost:3845/assets/20b259770072a5d4f9336491acbdf86047d94ee1.png";
const imgDashboard = "http://localhost:3845/assets/7a90fc7e3359192a5659ca28daf4ee499efc26fb.png";
const imgMutimodel = "http://localhost:3845/assets/76a91cfa836273cc8aeb73c70d089a1ceb7e68be.png";
const imgFeedback = "http://localhost:3845/assets/cf2c71c139c0a6987282c0399e0c6be3c613d196.png";
const imgCognitiveFusionAi = "http://localhost:3845/assets/1cf8daf37fc80e385dee9744ac7cf8d0ac6db418.png";
const imgMultiSensory = "http://localhost:3845/assets/b646c7df2af9f523684869f422aaf04c990f3851.png";
const imgList = "http://localhost:3845/assets/10a967dd28d0b9a8d8bad80c4e36d1650724e66b.svg";
const imgArrowLeft = "http://localhost:3845/assets/e32be3a221583bf65f3d4ddfe23fd455ad37ad23.svg";
const imgArrowRight = "http://localhost:3845/assets/413c56249d57c5a55cbfa4b8c98d6780e0afef41.svg";

// Hardware images
const imgImage22 = "http://localhost:3845/assets/60e934276eb69e71e18b53ec71ab38a4b7af0147.png";
const imgImage23 = "http://localhost:3845/assets/20b259770072a5d4f9336491acbdf86047d94ee1.png";
const imgImage24 = "http://localhost:3845/assets/94c819b331a665b7800d84e5a8a6afd9b122bc91.png";

// Media gallery images
const img5Rl6Euo2A82GoM2LuomsVwa2LtgPng = "http://localhost:3845/assets/575cb526e4f8325777b6fcee5dbacd645d3ff7e4.png";
const imgUNfqhpKdcciDtsQpSwaR0GNx46IJpg = "http://localhost:3845/assets/323ae1579ef194afd571c091c6823f45bcd5af24.png";

// How it works images
const imgTSbhXcBw10HvxPaJ6SsTtRiiplkPng = "http://localhost:3845/assets/27cfd5803d40c3678674ee5276375d52b7916467.png";
const imgMX5DAhTlaceN4NDguCeAZcFbIPng = "http://localhost:3845/assets/f44a1488d78b8ca1e0f2b1e3d5865b76955d0a18.png";
const img7VSjm6K3MAQqqM3HtSKme77ZhCsPng = "http://localhost:3845/assets/40759b6351ab4538cebeecb8629cd1091af71bf5.png";

// CTA images
const imgImageBhlGrMWa8BjbLVs1247F4KgYyaJpg = "http://localhost:3845/assets/d80c63c32e42d3ddd4c8d90dd39edf791ba52144.png";
const img0XbktCoQ1FitPsBfXIm6XgBs0SkJpg = "http://localhost:3845/assets/13150231aefba85ad241c1e597c1a3df986c51d6.png";


// Section 1 - Hero
const HeroSection = () => {
  return (
    <section className="bg-black relative min-h-screen overflow-hidden">
      <Galaxy
        className="absolute inset-0 w-full h-full z-0"
        mouseInteraction={true}
        mouseRepulsion={true}
        density={0.6}
        glowIntensity={0.2}
        saturation={0}
        hueShift={140}
        twinkleIntensity={0.3}
        rotationSpeed={0.1}
        repulsionStrength={2}
        autoCenterRepulsion={0}
        starSpeed={0.4}
        speed={0.6}
        transparent={false}
      />
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
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="font-cardinal-fruit text-[16px] text-white hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105">
              Functions
            </div>
            <div className="font-cardinal-fruit text-[16px] text-white hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105">
              About us
            </div>
            <div className="font-cardinal-fruit text-[16px] text-white hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-105">
              Contact us
            </div>
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
              className="font-cardinal-fruit text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-white leading-[1.1] tracking-tight"
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
              className="font-freesentation font-medium text-[18px] md:text-[20px] text-[#929292] max-w-3xl mx-auto leading-relaxed space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <div>당신의 생각과 감정을 읽어 최적의 몰입과 위로를</div>
              <div>선사하는 지능형 공간.</div>
            </motion.p>
          </div>

          <motion.div
            className="backdrop-blur-[5px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-[50px] px-8 py-4 inline-flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.2)] hover:scale-105 hover:shadow-lg hover:shadow-white/10"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="font-cardinal-fruit text-[20px] md:text-[24px] text-[rgba(255,255,255,0.8)] tracking-[-0.42px]">
              Available on Web
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
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-black relative min-h-screen">
      <div className="max-w-[1512px] mx-auto px-4 py-16">
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
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Redefining
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  focus, creativity, and balance
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="text-[#929292]"
                >
                  - in real time
                </motion.div>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
              className="space-y-6 font-freesentation font-medium text-[20px] md:text-[24px] text-white leading-relaxed"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                저희는 현대 사회가 직면한 근본적인 문제를 해결하고자 하는 고민에서 출발했습니다.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.8 }}
              >
                오늘날 우리는 디지털 기술과 AI의 발전 속에서 누구보다 빠르게 연결되고 있지만,
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 2.0 }}
              >
                정작 집중력 결핍, 창의성 저하, 정서적 불안정과 같은 문제에 끊임없이 노출되고 있습니다.
              </motion.p>
            </motion.div>

            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="flex items-center gap-4 pt-8"
            >
              <div className="w-[66px] h-[66px] rounded-full overflow-hidden">
                <img
                  alt="Suhwan Jeon Profile"
                  className="w-full h-full object-cover"
                  src={imgEllipse1}
                />
              </div>
              <div className="space-y-1">
                <p className="font-freesentation text-[18px] text-white">
                  Suhwan Jeon, Project Leader
                </p>
                <button className="font-freesentation text-[15px] text-[#929292] hover:text-white transition-colors">
                  Learn More
                </button>
              </div>
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
      </div>
    </section>
  );
};

// Section 3 - Problem Statement 1
const ProblemSection1 = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="bg-black relative min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sf-pro text-[64px] text-center text-white tracking-[-1.28px] font-black space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="leading-[1.2]"
          >
            현대 사회는 몰입과 창의성,
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="leading-[1.2]"
          >
            그리고 정서적 안정이 동시에 요구되지만
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="leading-[1.2]"
          >
            이를 지원하는 환경은 부족합니다.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 4 - Problem Statement 2
const ProblemSection2 = () => {
  return (
    <section className="bg-black relative min-h-screen flex items-center justify-center">
      <div className="bg-black relative size-full">
        <div className="absolute font-sf-pro leading-[0] left-1/2 text-[96px] text-center text-nowrap text-white top-1/2 tracking-[-1.92px] translate-x-[-50%] translate-y-[-50%] font-black">
          <p className="leading-[1.32] whitespace-pre">사람을 위한 기술, 함께 숨쉬는 공간.</p>
        </div>
      </div>
    </section>
  );
};

// Section 5 - Brand
const BrandSection = () => {
  return (
    <section className="bg-black relative min-h-screen">
      <div className="max-w-[1512px] mx-auto px-4 h-full flex flex-col items-center justify-center text-center space-y-8">
        {/* Brand Logo/Vector */}
        <div className="flex items-center justify-center mb-8">
          <img
            alt="NOOS Brand Vector"
            className="block max-w-none"
            height="145"
            src={imgVector}
            width="213"
          />
        </div>

        {/* Brand Title */}
        <div className="space-y-4">
          <h1 className="font-cardinal-fruit text-6xl md:text-7xl lg:text-8xl xl:text-[128px] text-white text-center leading-tight">
            Project : NOOS
          </h1>
        </div>
      </div>
    </section>
  );
};

// Section 6 - Gallery
const GallerySection = () => {
  const galleryImages = [
    imgKct5VregwnmDBsA1S0HqPdLTowJpg,
    imgGet3F8I5Z9CHllxkCkAjubVyUJpg,
    img3Vqc5U42LCtFfIrsFhZ9ROvv8Y0Jpg,
    imgKct5VregwnmDBsA1S0HqPdLTowJpg,
    imgGet3F8I5Z9CHllxkCkAjubVyUJpg,
    img3Vqc5U42LCtFfIrsFhZ9ROvv8Y0Jpg,
  ];

  return (
    <section className="bg-black relative py-20">
      <div className="max-w-[1512px] mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center space-y-8 mb-16">
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-[25px] overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 7 - Features
const FeaturesSection = () => {
  return (
    <section className="bg-black relative py-20">
      <div className="bg-[rgba(255,255,255,0.02)] box-border content-stretch flex flex-col gap-[80px] items-center justify-center overflow-clip px-0 py-[100px] relative rounded-[40px] size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] items-center justify-start max-w-[1280px] px-[72px] py-0 relative shrink-0 w-[1280px]">
          <div className="bg-[rgba(0,140,255,0.1)] box-border content-stretch flex items-center justify-center pb-[12px] pt-[11px] px-[20px] relative rounded-[100px] shrink-0">
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3ceff] text-[16px] text-nowrap tracking-[-0.32px]">
                  <p className="leading-[19.2px] whitespace-pre">Features</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_9px_0px_inset_rgba(111,190,255,0.3)]" />
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
              <div className="capitalize flex flex-col font-sf-pro-bold justify-center leading-[0] relative shrink-0 text-[62px] text-center text-white tracking-[-3.1px] w-full font-bold">
                <p className="leading-[62px]">강력한 기능.</p>
              </div>
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
        <div className="content-stretch flex flex-col h-[525px] items-start justify-center max-w-[1440px] relative shrink-0 w-[1440px]">
          <div className="box-border content-stretch flex h-[525px] items-start justify-center overflow-clip px-[72px] py-0 relative shrink-0 w-[3349px]">
            <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
              <div className="absolute bottom-0 content-stretch flex gap-[50px] items-center justify-start left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%] mask-size-[89.13%_100%] right-[-391px] top-0" style={{ maskImage: `url('${imgList}')` }}>
                {[
                  { title: "AI Objet", desc: "LED의 섬세한 빛의 움직임과 빛의 색 제공, 최적화된 사운드 제공, 최적의 습도와 온도조절을 통한 최적화된 환경을 제공하는 오브제.", img: imgObjet },
                  { title: "Unified Life-log Dashboard", desc: "하루 동안의 집중·감정 변화 타임라인 제공 자기 성찰과 패턴 분석 지원", img: imgDashboard },
                  { title: "Real-time Multimodal Generation", desc: "조명, 소리, 추상 아트워크, 오브제 움직임을 동적으로 생성 집중·창의·휴식 상황별 최적화 환경 제공", img: imgMutimodel },
                  { title: "Personalized Reinforcement Learning", desc: "사용자의 피드백(\"조명 좋음/방해됨\") 반영, 점점 더 맞춤형 환경 제공", img: imgFeedback },
                  { title: "Cognitive-Emotional State Fusion AI", desc: "인지+감성 데이터를 실시간으로 융합하여 복잡적 내면 상태 추론", img: imgCognitiveFusionAi },
                  { title: "Multi-sensory Cognitive & Emotional Sensing", desc: "뇌파(EEG) → 사용자의 인지,감정 상태 감지", img: imgMultiSensory }
                ].map((feature, index) => (
                  <div key={index} className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[529px]">
                      <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex flex-col gap-[29px] items-start justify-center pb-[40px] pt-0 px-0 relative rounded-[40px] shrink-0 w-full">
                        <div className="h-[382px] overflow-clip relative rounded-[40px] shrink-0 w-full">
                          <div className="absolute bg-no-repeat bg-cover bg-center inset-0 rounded-[40px]" style={{ backgroundImage: `url('${feature.img}')` }} />
                        </div>
                        <div className="box-border content-stretch flex flex-col gap-[15px] items-start justify-start px-[20px] py-0 relative shrink-0 w-full">
                          <div className="box-border content-stretch flex flex-col items-start justify-start pb-[0.59px] pt-0 px-0 relative shrink-0 w-full">
                            <div className="flex flex-col font-cardinal-fruit justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-white w-full">
                              <p className="leading-[33.6px]">{feature.title}</p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                            <div className="capitalize flex flex-col font-freesentation justify-center leading-[19.2px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.4)] tracking-[-0.32px] w-full">
                              <p className="leading-[19.2px]">{feature.desc}</p>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-[40px]">
                          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_23px_0px_inset_rgba(255,255,255,0.25)]" />
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
      description: "Muse S Athena는 Interaxon이라는 회사에서 만든 뇌 활동 측정 + 수면 + 정신 피트니스 웨어러블 장치. 가장 중요한 특징은 EEG(뇌파 측정)뿐만 아니라 fNIRS(functional Near-Infrared Spectroscopy) 를 함께 사용한다는 것. EEG는 전기적 뇌파 활동을, fNIRS는 뇌에 흐르는 혈액의 산소/혈류 상태를 측정하여 뇌 피트니스(인지 노력, 정신적 피로, 집중력, 회복 등)를 종합적으로 파악가능",
      image: imgImage22
    },
    {
      number: "02",
      title: "AI Objet",
      description: "Muse S Athena의 종합 데이터를 추론. 심리학적 논문을 기반으로 학습된 AI를 통해 최적화된 환경을 제공. 최적화된 조명, 사운드, 습도, 온도를 제공하는 것을 목표로 하고있음.",
      image: imgImage23
    },
    {
      number: "03",
      title: "Multi - Platform",
      description: "IOS, Android, WEB 전부 구동 지원.",
      image: imgImage24
    }
  ];

  return (
    <section className="bg-black relative py-20">
      <div className="box-border content-stretch flex flex-col items-center justify-end pb-[60px] pt-[30px] px-[30px] relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[28px] items-center justify-start max-w-[1280px] px-[72px] py-0 relative shrink-0 w-[1280px]">
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
              <div className="capitalize flex flex-col font-sf-pro-bold justify-center leading-[0] relative shrink-0 text-[62px] text-center text-white tracking-[-3.1px] w-full font-bold">
                <p className="leading-[62px]">누구보다 빠르고 정확하게.</p>
              </div>
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
              <div key={index} className="bg-black border border-[#222225] rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  {/* Image Section */}
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-md">
                      <img
                        src={process.image}
                        alt={process.title}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center space-y-6">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 9 - Media Gallery
const MediaGallerySection = () => {
  return (
    <section className="bg-black relative py-20">
      <div className="contents relative size-full">
        <div className="absolute box-border content-stretch flex h-[589px] items-center justify-center left-0 px-[10px] py-0 top-0 w-[1680px]">
          <div className="basis-0 grow h-full min-h-px min-w-px overflow-clip relative rounded-[28px] shrink-0">
            <div className="absolute content-stretch flex flex-col inset-[-0.32%_-0.88%_-0.68%_-0.12%] items-start justify-center">
              <div className="basis-0 bg-left bg-no-repeat bg-size-[100%_117.94%] grow min-h-px min-w-px shrink-0 w-full" style={{ backgroundImage: `url('${img5Rl6Euo2A82GoM2LuomsVwa2LtgPng}')` }} />
            </div>
            <div className="absolute box-border content-stretch flex items-center justify-center left-0 p-[48px] top-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  <div className="flex flex-col font-sf-pro-bold justify-center leading-[33.6px] relative shrink-0 text-[28px] text-black text-nowrap whitespace-pre font-bold">
                    <p className="mb-0">웹에서도</p>
                    <p className="mb-0">빠르고 강력하게.</p>
                    <p className="mb-0">&nbsp;</p>
                    <p className>어디서나.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 box-border content-stretch flex items-center justify-center left-[1680px] px-[10px] py-0 right-0 top-0">
          <div className="basis-0 bg-[#f6f0fe] grow h-full min-h-px min-w-px overflow-clip relative rounded-[28px] shrink-0">
            <div className="absolute inset-0">
              <div className="absolute bg-left bg-no-repeat bg-size-[100%_117.93%] inset-0 overflow-clip" style={{ backgroundImage: `url('${imgUNfqhpKdcciDtsQpSwaR0GNx46IJpg}')` }}>
                <div className="absolute flex flex-col font-cardinal-fruit justify-center leading-[33.6px] left-[58px] text-[28px] text-black text-nowrap top-[553px] translate-y-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wght' 700" }}>
                  <p className="mb-0">Mac, Windows</p>
                  <p className>전부 지원.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 10 - How it Works
const HowItWorksSection = () => {
  const steps = [
    {
      title: "측정하고, 바로 집중 시작.",
      description: "강력한 Muse S Athena의 뇌파 측정 기능을 이용하여, 최적화된 환경을 제공받아 바로 집중 시작.",
      image: imgTSbhXcBw10HvxPaJ6SsTtRiiplkPng,
      reverse: false
    },
    {
      title: "꿈에 그리던 우주여행을 현실로.",
      description: "집중, 휴식과 같은 테마별로 다른 행성을 여행하며 순간 집중, 편안한 휴식까지.",
      image: imgMX5DAhTlaceN4NDguCeAZcFbIPng,
      reverse: true
    },
    {
      title: "과연 과거는 과거일뿐?",
      description: "강력한 Dashboard기능을 통한 이번달의 나는 어땠는지 일순간에 확인.",
      image: img7VSjm6K3MAQqqM3HtSKme77ZhCsPng,
      reverse: false
    }
  ];

  return (
    <section className="bg-black relative py-20">
      <div className="box-border content-stretch flex flex-col gap-[140px] items-center justify-center px-[150px] py-[95px] relative size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-center justify-center max-w-[500px] relative shrink-0 w-[500px]">
          <div className="bg-[rgba(0,140,255,0.1)] box-border content-stretch flex items-center justify-center pb-[12px] pt-[11px] px-[20px] relative rounded-[100px] shrink-0">
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3ceff] text-[16px] text-nowrap tracking-[-0.32px]">
                  <p className="leading-[19.2px] whitespace-pre">How it works</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_9px_0px_inset_rgba(111,190,255,0.3)]" />
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
              <div className="capitalize flex flex-col font-sf-pro-bold justify-center leading-[0] relative shrink-0 text-[52px] text-center text-white tracking-[-2.6px] w-full font-bold">
                <p className="leading-[52px]">생각을 몰입으로,</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[4px] px-0 relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
                <div className="capitalize flex flex-col font-sf-pro-bold justify-center leading-[52px] relative shrink-0 text-[64px] text-center text-white tracking-[-2.6px] w-[828px] font-bold">
                  <p className="mb-0">감정을 인식으로</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className>눈깜짝한 순간어느새 최적화.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[60px] items-start justify-start relative shrink-0 w-full">
          {steps.map((step, index) => (
            <div key={index} className={`content-stretch flex gap-[20px] items-center justify-start relative shrink-0 w-full ${step.reverse ? 'flex-row-reverse' : ''}`}>
              <div className="flex items-center justify-center px-0 py-[40px] relative shrink-0 w-[497.78px]">
                <div className="h-[550.59px] relative shrink-0 w-[270px] overflow-hidden rounded-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[15.095px] items-start justify-center relative shrink-0 w-[622.22px]">
                <div className="content-stretch flex flex-col items-start justify-start min-w-[622.22px] relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div className="capitalize flex flex-col font-sf-pro-bold justify-center leading-[0] relative shrink-0 text-[52px] text-nowrap text-white tracking-[-2.6px] font-bold">
                      <p className="leading-[52px] whitespace-pre">{step.title}</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div className="flex flex-col font-cardinal-fruit justify-center leading-[27.2px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wght' 400" }}>
                      <p className="leading-[27.2px]">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 11 - Pricing
const PricingSection = () => {
  return (
    <section className="bg-black relative py-20">
      <div className="backdrop-blur-md backdrop-filter bg-[rgba(5,7,10,0.73)] box-border content-stretch flex flex-col gap-[97px] items-center justify-center overflow-clip px-[80px] py-[140px] relative rounded-[70px] size-full">
        <div className="content-stretch flex flex-col gap-[28px] items-center justify-center max-w-[650px] relative shrink-0 w-[650px]">
          <div className="bg-[rgba(0,140,255,0.1)] box-border content-stretch flex items-center justify-center pb-[12px] pt-[11px] px-[20px] relative rounded-[100px] shrink-0">
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#a3ceff] text-[16px] text-nowrap tracking-[-0.32px]">
                  <p className="leading-[19.2px] whitespace-pre">Pricing</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_9px_0px_inset_rgba(111,190,255,0.3)]" />
          </div>
          <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center justify-start relative shrink-0 w-full">
              <div className="capitalize flex flex-col font-sf-pro-bold justify-center leading-[0] relative shrink-0 text-[62px] text-center text-white tracking-[-3.1px] w-full font-bold">
                <p className="leading-[62px]">당신을 위한 합리적 가격.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.02)] box-border content-stretch flex flex-col gap-[11.99px] items-start justify-start overflow-clip p-[12px] relative rounded-[40px] shrink-0 w-full">
          <div className="bg-[rgba(255,255,255,0.05)] box-border content-stretch flex gap-[76px] items-start justify-center overflow-clip p-[72px] relative rounded-[28px] shadow-[0px_0.796px_0.796px_-0.938px_rgba(0,0,0,0.18),0px_2.415px_2.415px_-1.875px_rgba(0,0,0,0.17),0px_6.383px_6.383px_-2.813px_rgba(0,0,0,0.15),0px_20px_20px_-3.75px_rgba(0,0,0,0.06)] shrink-0 w-full">
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
              <a className="bg-[rgba(255,255,255,0.1)] box-border content-stretch cursor-pointer flex items-center justify-center overflow-clip pb-[14px] pl-[217.22px] pr-[217.23px] pt-[13px] relative rounded-[100px] shrink-0" href="https://sprrrint.com/">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]" role="link" tabIndex="0">
                      <p className="cursor-pointer leading-[19.2px] whitespace-pre">Get Started</p>
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
                {["룰루랄라", "ㅃ뿅뿅뿅", "야야야야야ㅑ야야야"].map((feature, index) => (
                  <div key={index} className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                    <div className="shrink-0 size-[26px]" />
                    <div className="content-stretch flex flex-col items-start justify-start min-w-[484px] relative shrink-0">
                      <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                        <div className="flex flex-col font-cardinal-fruit font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                          <p className="leading-[27.2px] whitespace-pre">{feature}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-[76px] items-start justify-center overflow-clip p-[72px] relative rounded-[35px] shrink-0 w-full">
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
              <a className="bg-[#52a2ed] box-border content-stretch cursor-pointer flex items-center justify-center overflow-clip pb-[14px] pl-[217.22px] pr-[217.23px] pt-[13px] relative rounded-[100px] shrink-0" href="https://sprrrint.com/">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div className="capitalize flex flex-col font-cardinal-fruit font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.32px]" role="link" tabIndex="0">
                      <p className="cursor-pointer leading-[19.2px] whitespace-pre">Get Started</p>
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
                {["저는 부자가 될래요", "헉 돈이 많으면 뭐하지", "먹고자고 놀래요"].map((feature, index) => (
                  <div key={index} className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
                    <div className="shrink-0 size-[26px]" />
                    <div className="content-stretch flex flex-col items-start justify-start min-w-[484px] relative shrink-0">
                      <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                        <div className="flex flex-col font-cardinal-fruit font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                          <p className="leading-[27.2px] whitespace-pre">{feature}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 12 - CTA
const CtaSection = () => {
  return (
    <section className="bg-black relative">
      <div className="bg-black content-stretch flex flex-col items-center justify-center relative size-full">
        <div className="absolute content-stretch flex inset-0 items-center justify-center">
          <div className="bg-left bg-no-repeat bg-size-[100%_220.64%] h-full opacity-70 shrink-0 w-[1920px]" style={{ backgroundImage: `url('${imgImageBhlGrMWa8BjbLVs1247F4KgYyaJpg}')` }} />
        </div>
        <div className="h-[191.75px] max-w-[1440px] overflow-clip relative shrink-0 w-[1440px]">
          <a className="absolute bg-black box-border content-stretch cursor-pointer flex items-center justify-center left-[30px] overflow-clip pb-[10px] pt-[9px] px-[24px] top-[152.56px]" href="https://vence.framer.website/contact">
            <div className="absolute bottom-[1.81%] left-0 right-0 top-0">
              <div aria-hidden="true" className="absolute border border-[rgba(245,245,245,0.1)] border-solid inset-0 pointer-events-none" />
            </div>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                  <div className="flex flex-col font-cardinal-fruit justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white" role="link" tabIndex="0">
                    <p className="cursor-pointer leading-[19.2px] whitespace-pre">{`Let's work together`}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="absolute content-stretch flex flex-col gap-[14px] items-start justify-center left-[2.08%] right-[40.42%] translate-y-[-50%]" style={{ top: "calc(50% - 35.58px)" }}>
            <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                <div className="flex flex-col font-freesentation-bold justify-center leading-[0] not-italic relative shrink-0 text-[28px] text-white w-full font-bold">
                  <p className="leading-[33.6px]">불안정한 국제사회 속, 우리는 안정된 사회를 만들어나가기 위해 노력합니다.</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] items-center justify-start relative shrink-0 w-full">
              <div className="relative rounded-[23px] shrink-0 size-[38px]">
                <div className="absolute bg-no-repeat bg-size-[119.35%_100%] bg-top inset-0 rounded-[23px]" style={{ backgroundImage: `url('${img0XbktCoQ1FitPsBfXIm6XgBs0SkJpg}')` }} />
              </div>
              <div className="content-stretch flex flex-col gap-px items-start justify-center relative shrink-0">
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div className="flex flex-col font-cardinal-fruit justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap">
                      <p className="leading-[19.2px] whitespace-pre">Team: AXIS</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
                  <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
                    <div className="flex flex-col font-cardinal-fruit justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap">
                      <p className="leading-[19.2px] whitespace-pre">Univ Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <div aria-hidden="true" className="absolute border-[#222225] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  return (
    <div className="App bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ProblemSection1 />
      <ProblemSection2 />
      <BrandSection />
      <GallerySection />
      <FeaturesSection />
      <HardwareSection />
      <MediaGallerySection />
      <HowItWorksSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}

export default App;
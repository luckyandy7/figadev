import React from 'react';
import { motion } from 'framer-motion';

const SolarExplorer = ({ onPlanetSelect }) => {
  const handleSpaceTravel = (planet) => {
    console.log('Space travel to:', planet);
    onPlanetSelect(planet);
  };

  return (
    <div className="solar-explorer-container bg-black text-white min-h-screen overflow-hidden">
      <style jsx>{`
        .solar_systm {
          transform-style: preserve-3d;
          pointer-events: none;
          height: 100%;
          position: absolute;
          left: 0;
          right: 0;
        }

        * {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .solar_systm .planet, input[type=radio][name=planet]::after, .overlay {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          margin: auto;
        }

        .solar_systm .planet {
          height: 1200px;
          width: 1200px;
          border-radius: 600px;
          background: red;
          transition: transform 2.8s 0.23s cubic-bezier(0.33, 0, 0, 1), opacity 2s 0.8s, box-shadow 0s 0s;
          background-size: 1140px 910px !important;
          top: auto;
          bottom: -920px;
        }

        .solar_systm .planet .moon {
          height: 200px;
          width: 200px;
          border-radius: 600px;
          background: red;
          position: absolute;
          text-align: center;
          color: white;
          text-transform: uppercase;
          opacity: 0;
          transition: all 0.6s 0.2s;
        }

        .solar_systm .planet .moon h2 {
          font-weight: 100;
          font-size: 40px;
          letter-spacing: 5px;
          margin: 0;
          position: relative;
          top: -120px;
        }

        .solar_systm .planet .moon h3 {
          font-weight: 100;
          font-size: 20px;
          letter-spacing: 5px;
          color: #fea082;
          margin: 0;
          position: relative;
          top: -120px;
        }

        @keyframes planet {
          from {
            background-position-y: 0px;
          }
          to {
            background-position-y: -1000px;
          }
        }

        .solar {
          position: absolute;
          transform: rotatex(-20deg);
          perspective: 800px;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        .planet_description {
          position: absolute;
          bottom: 160px;
          left: 50%;
          transform: translateX(-50%);
          width: 460px;
          text-align: center;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .planet_description h1,
        .planet_description h2,
        .planet_description p,
        .planet_description a {
          font-weight: 100;
          font-size: 10px;
          letter-spacing: 5px;
          margin: 0;
        }

        .planet_description h1 {
          letter-spacing: 16px;
          font-size: 34px;
        }

        .planet_description h2,
        .planet_description a {
          color: #fabfad;
        }

        .planet_description h2 {
          margin-top: 60px;
          margin-bottom: 6px;
        }

        .planet_description p {
          line-height: 26px;
          margin-top: 14px;
          opacity: 0.9;
          margin-bottom: 10px;
          font-size: 16px;
        }

        .planet_description a {
          font-size: 14px;
          font-weight: 500;
          padding: 8px 16px;
          border: 2px solid;
          border-radius: 25px;
          transition: all 0.3s ease;
          position: relative;
          left: 0;
          display: inline-block;
          text-decoration: none;
          cursor: pointer;
          margin-top: 10px;
        }

        /* Planet specific colors */
        .mercury.planet_description a {
          color: #E8927C;
          border-color: #E8927C;
          background: rgba(232, 146, 124, 0.1);
        }
        .mercury.planet_description a:hover {
          background: #E8927C;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(232, 146, 124, 0.3);
        }

        .venus.planet_description a {
          color: #b45d15;
          border-color: #b45d15;
          background: rgba(180, 93, 21, 0.1);
        }
        .venus.planet_description a:hover {
          background: #b45d15;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(180, 93, 21, 0.3);
        }

        .earth.planet_description a {
          color: #26daaa;
          border-color: #26daaa;
          background: rgba(38, 218, 170, 0.1);
        }
        .earth.planet_description a:hover {
          background: #26daaa;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(38, 218, 170, 0.3);
        }

        .mars.planet_description a {
          color: #e55f45;
          border-color: #e55f45;
          background: rgba(229, 95, 69, 0.1);
        }
        .mars.planet_description a:hover {
          background: #e55f45;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(229, 95, 69, 0.3);
        }

        .jupiter.planet_description a {
          color: orange;
          border-color: orange;
          background: rgba(255, 165, 0, 0.1);
        }
        .jupiter.planet_description a:hover {
          background: orange;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(255, 165, 0, 0.3);
        }

        .saturn.planet_description a {
          color: #b29d81;
          border-color: #b29d81;
          background: rgba(178, 157, 129, 0.1);
        }
        .saturn.planet_description a:hover {
          background: #b29d81;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(178, 157, 129, 0.3);
        }

        .uranus.planet_description a {
          color: #8dcdd8;
          border-color: #8dcdd8;
          background: rgba(141, 205, 216, 0.1);
        }
        .uranus.planet_description a:hover {
          background: #8dcdd8;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(141, 205, 216, 0.3);
        }

        .neptune.planet_description a {
          color: #4f83e2;
          border-color: #4f83e2;
          background: rgba(79, 131, 226, 0.1);
        }
        .neptune.planet_description a:hover {
          background: #4f83e2;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(79, 131, 226, 0.3);
        }

        .pluto.planet_description a {
          color: #FF8732;
          border-color: #FF8732;
          background: rgba(255, 135, 50, 0.1);
        }
        .pluto.planet_description a:hover {
          background: #FF8732;
          color: #000;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(255, 135, 50, 0.3);
        }

        .logo {
          position: absolute;
          top: 40px;
          left: 40px;
          z-index: 1000;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-size: 24px;
          font-weight: 300;
        }

        .logo span {
          display: block;
          font-size: 14px;
          margin-top: 8px;
          opacity: 0.8;
        }

        .korean-subtitle {
          font-size: 12px !important;
          opacity: 0.6 !important;
        }
      `}</style>

      <h1 className="logo">
        Project: NOOS
        <span>Choose Our planet. And Explore.</span>
        <span className="korean-subtitle">왼쪽에 있는 행성을 클릭하세요. 그리고 탐험하세요.</span>
      </h1>

      {/* Planet Descriptions */}
      <div className="solar">
        <div className="solar_systm">
          <div className="mercury planet">
            <div className="mercury planet_description" style={{ opacity: 1 }}>
              <h2>Planet</h2>
              <h1>Mercury</h1>
              <p>태양과 가장 가까운, 태양을 가장 빠르게 도는 행성. 하루를 점화하는 번개같은 집중을 상징하며, 아이디어와 실행을 한순간에 불꽃처럼 만들 수 있도록 도와줍니다.</p>
              <motion.a
                onClick={() => handleSpaceTravel('Mercury')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                이 행성으로 떠나기
              </motion.a>
            </div>
          </div>
        </div>

        <div className="solar_systm">
          <div className="planet venus">
            <div className="planet_description venus" style={{ opacity: 1 }}>
              <h2>Planet</h2>
              <h1>Venus</h1>
              <p>구름에 가려진 감각의 행성. 온화한 비과 미묘한 대기가 깃든 곳. 영감이 새벽처럼 깨어나는 창조의 정원. 따뜻한 조명과 부드러운 음악을 당신에게 선사합니다.</p>
              <motion.a
                onClick={() => handleSpaceTravel('Venus')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                이 행성으로 떠나기
              </motion.a>
            </div>
          </div>
        </div>

        <div className="solar_systm">
          <div className="planet earth">
            <div className="earth planet_description" style={{ opacity: 1 }}>
              <h2>Planet</h2>
              <h1>Earth</h1>
              <p>균형과 현실의 중심. 푸른 바다와 초록 숲이 깃든 행성. 일과 학습의 기본 궤도, 차분한 안정속에서 집중을 할 수 있도록 도와줍니다.</p>
              <motion.a
                onClick={() => handleSpaceTravel('Earth')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                이 행성으로 떠나기
              </motion.a>
            </div>
          </div>
        </div>

        <div className="solar_systm">
          <div className="planet mars">
            <div className="mars planet_description" style={{ opacity: 1 }}>
              <h2>Planet</h2>
              <h1>Mars</h1>
              <p>붉은 도전의 행성. 모래 폭풍과 강렬한 바람이 부는 세계. 새로운 시도를 향해 돌파하는 에너지. 결단과 실행이 필요한 순간. 이곳으로 떠나보세요.</p>
              <motion.a
                onClick={() => handleSpaceTravel('Mars')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                이 행성으로 떠나기
              </motion.a>
            </div>
          </div>
        </div>

        <div className="solar_systm">
          <div className="planet jupiter">
            <div className="jupiter planet_description" style={{ opacity: 1 }}>
              <h2>Planet</h2>
              <h1>Jupiter</h1>
              <p>은하계 중 가장 큰 행성. 태양계의 모든 것을 대표하는 위대하고도 거대한 힘. 큰 결정과 팀을 이끄는 카리스마. 중대한 선택과 협업이 필요한 환경일때, 이 행성은 적합합니다.</p>
              <motion.a
                onClick={() => handleSpaceTravel('Jupiter')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                이 행성으로 떠나기
              </motion.a>
            </div>
          </div>
        </div>

        <div className="solar_systm">
          <div className="planet saturn">
            <div className="planet_description saturn" style={{ opacity: 1 }}>
              <h2>Planet</h2>
              <h1>Saturn</h1>
              <p>고리위의 사색가. 영겁의 시간 속에서 고리를 두른 현자의 행성. 깊은 전략과 철학적 통찰, 연구의 아이디어를 제공합니다. 연구·기획·긴 사유의 시간을 위한 공간입니다.</p>
              <motion.a
                onClick={() => handleSpaceTravel('Saturn')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                이 행성으로 떠나기
              </motion.a>
            </div>
          </div>
        </div>

        <div className="solar_systm">
          <div className="planet uranus">
            <div className="planet_description uranus" style={{ opacity: 1 }}>
              <h2>Planet</h2>
              <h1>Uranus</h1>
              <p>가장 첫번째로 과학자들에게 발견된 행성이자 기울어진 축을 가진 독특한 행성. 새로운 패러다임과 틀을 깨는 창조적 아이디어를 위한 무대입니다.</p>
              <motion.a
                onClick={() => handleSpaceTravel('Uranus')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                이 행성으로 떠나기
              </motion.a>
            </div>
          </div>
        </div>

        <div className="solar_systm">
          <div className="planet neptune">
            <div className="neptune planet_description" style={{ opacity: 1 }}>
              <h2>Planet</h2>
              <h1>Neptune</h1>
              <p>깊은 푸른색의 대기와 강력한 폭풍을 가진 신비로운 행성. 푸른 빛 속으로 모든 소음이 사라지는 곳. 코딩·집중 독서·논문 작업 등 완전한 딥워크를 이끌어 줍니다.</p>
              <motion.a
                onClick={() => handleSpaceTravel('Neptune')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                이 행성으로 떠나기
              </motion.a>
            </div>
          </div>
        </div>

        <div className="solar_systm">
          <div className="planet pluto">
            <div className="planet_description pluto" style={{ opacity: 1 }}>
              <h2>Dwarf planet</h2>
              <h1>Pluto</h1>
              <p>우주의 끝, 내면의 쉼. 태양계의 가장 먼 곳, 조용한 침묵의 행성. 하루를 마무리하고 마음을 비우는 공간. 명상과 회복, 수면을 위한 마지막 정거장.</p>
              <motion.a
                onClick={() => handleSpaceTravel('Pluto')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer' }}
              >
                이 행성으로 떠나기
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarExplorer;
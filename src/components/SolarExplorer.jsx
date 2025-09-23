import React, { useEffect } from 'react';
import './SolarExplorer.css';

const SolarExplorer = ({ onPlanetSelect }) => {
  function startSpaceTravel(planet) {
    console.log('=== startSpaceTravel function called ===');
    console.log('Planet parameter:', planet);

    try {
      // 부드러운 전환 효과
      document.body.style.transition = 'opacity 0.8s ease-out';
      document.body.style.opacity = '0';

      setTimeout(() => {
        console.log('Executing redirect...');
        if (onPlanetSelect) {
          onPlanetSelect(planet);
        }
      }, 800);
    } catch (error) {
      console.error('Error in startSpaceTravel:', error);
      alert('오류가 발생했습니다: ' + error.message);
    }
  }

  useEffect(() => {
    // CSS가 제대로 로드되었는지 확인
    document.body.style.opacity = '1';
    return () => {
      document.body.style.opacity = '';
      document.body.style.transition = '';
    };
  }, []);

  return (
    <div className="solar-explorer-body">
      <h1 className='logo'>
        Project: NOOS
        <span>Choose Our planet. And Explore.</span>
        <span className='korean-subtitle'>왼쪽에 있는 행성을 클릭하세요. 그리고 탐험하세요.</span>
      </h1>

      <input className='planet9' id='pluto' type='radio' name='planet' />
      <label className='menu pluto' htmlFor='pluto'>
        <div className='preview'></div>
        <div className='info'>
          <h2>
            <div className='pip'></div>
            Pluto
          </h2>
          <h3>39.5 AU</h3>
        </div>
      </label>

      <input className='planet8' id='neptune' type='radio' name='planet' />
      <label className='menu neptune' htmlFor='neptune'>
        <div className='preview'></div>
        <div className='info'>
          <h2>
            <div className='pip'></div>
            Neptune
          </h2>
          <h3>30.06 AU</h3>
        </div>
      </label>

      <input className='planet7' id='uranus' type='radio' name='planet' />
      <label className='menu uranus' htmlFor='uranus'>
        <div className='preview'></div>
        <div className='info'>
          <h2>
            <div className='pip'></div>
            Uranus
          </h2>
          <h3>19.18 AU</h3>
        </div>
      </label>

      <input className='planet6' id='saturn' type='radio' name='planet' />
      <label className='menu saturn' htmlFor='saturn'>
        <div className='preview'></div>
        <div className='info'>
          <h2>
            <div className='pip'></div>
            Saturn
          </h2>
          <h3>9.539 AU</h3>
        </div>
      </label>

      <input className='planet5' id='jupiter' type='radio' name='planet' />
      <label className='jupiter menu' htmlFor='jupiter'>
        <div className='preview'></div>
        <div className='info'>
          <h2>
            <div className='pip'></div>
            Jupiter
          </h2>
          <h3>5.203 AU</h3>
        </div>
      </label>

      <input className='planet4' id='mars' type='radio' name='planet' defaultChecked />
      <label className='mars menu' htmlFor='mars'>
        <div className='preview'></div>
        <div className='info'>
          <h2>
            <div className='pip'></div>
            Mars
          </h2>
          <h3>1.524 AU</h3>
        </div>
      </label>

      <input className='planet3' id='earth' type='radio' name='planet' />
      <label className='earth menu' htmlFor='earth'>
        <div className='preview'></div>
        <div className='info'>
          <h2>
            <div className='pip'></div>
            Earth
          </h2>
          <h3>1 AU</h3>
        </div>
      </label>

      <input className='planet2' id='venus' type='radio' name='planet' />
      <label className='menu venus' htmlFor='venus'>
        <div className='preview'></div>
        <div className='info'>
          <h2>
            <div className='pip'></div>
            Venus
          </h2>
          <h3>0.723 AU</h3>
        </div>
      </label>

      <input className='planet1' id='mercury' type='radio' name='planet' />
      <label className='menu mercury' htmlFor='mercury'>
        <div className='preview'></div>
        <div className='info'>
          <h2>
            <div className='pip'></div>
            Mercury
          </h2>
          <h3>0.39 AU</h3>
        </div>
      </label>

      <div className='solar'>
        <div className='solar_systm'>
          <div className='mercury planet'>
            <div className='mercury planet_description'>
              <h2>Planet</h2>
              <h1>Mercury</h1>
              <p>태양과 가장 가까운, 태양을 가장 빠르게 도는 행성. 하루를 점화하는 번개같은 집중을 상징하며, 아이디어와 실행을 한순간에 불꽃처럼 만들 수 있도록 도와줍니다.</p>
              <label>
                <a onClick={(e) => { e.preventDefault(); startSpaceTravel('Mercury'); }} style={{cursor: 'pointer'}}>
                  이 행성으로 떠나기
                </a>
              </label>
            </div>
            <div className='overlay'></div>
          </div>
        </div>

        <div className='solar_systm'>
          <div className='planet venus'>
            <div className='planet_description venus'>
              <h2>Planet</h2>
              <h1>Venus</h1>
              <p>구름에 가려진 감각의 행성. 온화한 비과 미묘한 대기가 깃든 곳. 영감이 새벽처럼 깨어나는 창조의 정원. 따뜻한 조명과 부드러운 음악을 당신에게 선사합니다.</p>
              <label>
                <a onClick={(e) => { e.preventDefault(); startSpaceTravel('Venus'); }} style={{cursor: 'pointer'}}>
                  이 행성으로 떠나기
                </a>
              </label>
            </div>
            <div className='overlay'></div>
          </div>
        </div>

        <div className='solar_systm'>
          <div className='earth planet'>
            <div className='moon moon'>
              <h3>Moon</h3>
              <h2>Moon</h2>
            </div>
            <div className='m trajectory'></div>
            <div className='earth planet_description'>
              <h2>Planet</h2>
              <h1>Earth</h1>
              <p>균형과 현실의 중심. 푸른 바다와 초록 숲이 깃든 행성. 일과 학습의 기본 궤도, 차분한 안정속에서 집중을 할 수 있도록 도와줍니다.</p>
              <label>
                <a onClick={(e) => { e.preventDefault(); startSpaceTravel('Earth'); }} style={{cursor: 'pointer'}}>
                  이 행성으로 떠나기
                </a>
              </label>
            </div>
            <div className='overlay'></div>
          </div>
        </div>

        <div className='solar_systm'>
          <div className='mars planet'>
            <div className='deimos moon'>
              <h3>Moon</h3>
              <h2>Deimos</h2>
            </div>
            <div className='d trajectory'></div>
            <div className='moon phoebos'>
              <h3>Moon</h3>
              <h2>Phoebos</h2>
            </div>
            <div className='p trajectory'></div>
            <div className='mars planet_description'>
              <h2>Planet</h2>
              <h1>Mars</h1>
              <p>붉은 도전의 행성. 모래 폭풍과 강렬한 바람이 부는 세계. 새로운 시도를 향해 돌파하는 에너지. 결단과 실행이 필요한 순간. 이곳으로 떠나보세요.</p>
              <label>
                <a onClick={(e) => { e.preventDefault(); startSpaceTravel('Mars'); }} style={{cursor: 'pointer'}}>
                  이 행성으로 떠나기
                </a>
              </label>
            </div>
            <div className='overlay'></div>
          </div>
        </div>

        <div className='solar_systm'>
          <div className='jupiter planet'>
            <div className='lo moon'>
              <h3>Moon</h3>
              <h2>Io</h2>
            </div>
            <div className='europa moon'>
              <h3>Moon</h3>
              <h2>Europa</h2>
            </div>
            <div className='ganymede moon'>
              <h3>Moon</h3>
              <h2>Ganymede</h2>
            </div>
            <div className='lop trajectory'></div>
            <div className='eu trajectory'></div>
            <div className='ga trajectory'></div>
            <div className='jupiter planet_description'>
              <h2>Planet</h2>
              <h1>Jupiter</h1>
              <p>은하계 중 가장 큰 행성. 태양계의 모든 것을 대표하는 위대하고도 거대한 힘. 큰 결정과 팀을 이끄는 카리스마. 중대한 선택과 협업이 필요한 환경일때, 이 행성은 적합합니다.</p>
              <label>
                <a onClick={(e) => { e.preventDefault(); startSpaceTravel('Jupiter'); }} style={{cursor: 'pointer'}}>
                  이 행성으로 떠나기
                </a>
              </label>
            </div>
            <div className='overlay'></div>
          </div>
        </div>

        <div className='solar_systm'>
          <div className='planet saturn'>
            <div className='moon titan'>
              <h3>Moon</h3>
              <h2>Titan</h2>
            </div>
            <div className='dione moon'>
              <h3>Moon</h3>
              <h2>Dione</h2>
            </div>
            <div className='enceladus moon'>
              <h3>Moon</h3>
              <h2>Enceladus</h2>
            </div>
            <div className='ti trajectory'></div>
            <div className='di trajectory'></div>
            <div className='enc trajectory'></div>
            <div className='planet_description saturn'>
              <h2>Planet</h2>
              <h1>Saturn</h1>
              <p>고리위의 사색가. 영겁의 시간 속에서 고리를 두른 현자의 행성. 깊은 전략과 철학적 통찰, 연구의 아이디어를 제공합니다. 연구·기획·긴 사유의 시간을 위한 공간입니다.</p>
              <label>
                <a onClick={(e) => { e.preventDefault(); startSpaceTravel('Saturn'); }} style={{cursor: 'pointer'}}>
                  이 행성으로 떠나기
                </a>
              </label>
            </div>
            <div className='overlay'></div>
          </div>
        </div>

        <div className='solar_systm'>
          <div className='planet uranus'>
            <div className='miranda moon'>
              <h3>Moon</h3>
              <h2>Miranda</h2>
            </div>
            <div className='ariel moon'>
              <h3>Moon</h3>
              <h2>Ariel</h2>
            </div>
            <div className='moon umbriel'>
              <h3>Moon</h3>
              <h2>Umbriel</h2>
            </div>
            <div className='mir trajectory'></div>
            <div className='ari trajectory'></div>
            <div className='trajectory umb'></div>
            <div className='planet_description uranus'>
              <h2>Planet</h2>
              <h1>Uranus</h1>
              <p>가장 첫번째로 과학자들에게 발견된 행성이자 기울어진 축을 가진 독특한 행성. 새로운 패러다임과 틀을 깨는 창조적 아이디어를 위한 무대입니다.</p>
              <label>
                <a onClick={(e) => { e.preventDefault(); startSpaceTravel('Uranus'); }} style={{cursor: 'pointer'}}>
                  이 행성으로 떠나기
                </a>
              </label>
            </div>
            <div className='overlay'></div>
          </div>
        </div>

        <div className='solar_systm'>
          <div className='neptune planet'>
            <div className='moon triton'>
              <h3>Moon</h3>
              <h2>Triton</h2>
            </div>
            <div className='moon proteus'>
              <h3>Moon</h3>
              <h2>Proteus</h2>
            </div>
            <div className='moon nereid'>
              <h3>Moon</h3>
              <h2>Nereid</h2>
            </div>
            <div className='trajectory tri'></div>
            <div className='pro trajectory'></div>
            <div className='ner trajectory'></div>
            <div className='neptune planet_description'>
              <h2>Planet</h2>
              <h1>Neptune</h1>
              <p>깊은 푸른색의 대기와 강력한 폭풍을 가진 신비로운 행성. 푸른 빛 속으로 모든 소음이 사라지는 곳. 코딩·집중 독서·논문 작업 등 완전한 딥워크를 이끌어 줍니다.</p>
              <label>
                <a onClick={(e) => { e.preventDefault(); startSpaceTravel('Neptune'); }} style={{cursor: 'pointer'}}>
                  이 행성으로 떠나기
                </a>
              </label>
            </div>
            <div className='overlay'></div>
          </div>
        </div>

        <div className='solar_systm'>
          <div className='planet pluto'>
            <div className='planet_description pluto'>
              <h2>Dwarf planet</h2>
              <h1>Pluto</h1>
              <p>우주의 끝, 내면의 쉼. 태양계의 가장 먼 곳, 조용한 침묵의 행성. 하루를 마무리하고 마음을 비우는 공간. 명상과 회복, 수면을 위한 마지막 정거장.</p>
              <label>
                <a onClick={(e) => { e.preventDefault(); startSpaceTravel('Pluto'); }} style={{cursor: 'pointer'}}>
                  이 행성으로 떠나기
                </a>
              </label>
            </div>
            <div className='overlay'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarExplorer;
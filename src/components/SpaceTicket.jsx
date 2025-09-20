import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';

const SpaceTicket = ({ ticketData, onBack }) => {
  const [isTorn, setIsTorn] = useState(false);
  const [tearProgress, setTearProgress] = useState(0);
  const dragControls = useDragControls();
  const ticketRef = useRef(null);

  const handleTearStart = (event) => {
    dragControls.start(event);
  };

  const handleDrag = (event, info) => {
    const ticketRect = ticketRef.current?.getBoundingClientRect();
    if (ticketRect) {
      const progress = Math.min(Math.abs(info.offset.x) / 200, 1);
      setTearProgress(progress);

      if (progress > 0.7) {
        setIsTorn(true);
      }
    }
  };

  // 행성별 거리 데이터 (지구 기준, 최단거리 기준)
  const planetDistances = {
    mercury: 77.3,
    venus: 25.0,
    earth: 0,
    mars: 54.6,
    jupiter: 588.5,
    saturn: 1275.0,
    uranus: 2723.0,
    neptune: 4345.0,
    pluto: 4737.0
  };

  // 행성별 한국어 이름
  const planetNames = {
    mercury: '수성',
    venus: '금성',
    earth: '지구',
    mars: '화성',
    jupiter: '목성',
    saturn: '토성',
    uranus: '천왕성',
    neptune: '해왕성',
    pluto: '명왕성'
  };

  // 현재 날짜로부터 미래 날짜 생성
  const getDepartureDate = () => {
    const now = new Date();
    const futureDate = new Date(now.getTime() + (Math.random() * 30 + 7) * 24 * 60 * 60 * 1000);
    return futureDate.toISOString().split('T')[0].replace(/-/g, '/');
  };

  // 랜덤 게이트 및 편명 생성
  const getFlightInfo = () => {
    const gates = ['A1', 'A2', 'B3', 'C4', 'D1', 'E2'];
    const gate = gates[Math.floor(Math.random() * gates.length)];
    const flightNumber = `SP${Math.floor(Math.random() * 9000) + 1000}`;
    return { gate, flightNumber };
  };

  const distance = planetDistances[ticketData.planet.toLowerCase()] || 0;
  const planetKorean = planetNames[ticketData.planet.toLowerCase()] || ticketData.planet;
  const { gate, flightNumber } = getFlightInfo();
  const departureDate = getDepartureDate();

  return (
    <Container>
      <BackButton onClick={onBack}>← Back to Planets</BackButton>

      <TicketContainer ref={ticketRef}>
        <AnimatePresence>
          {!isTorn && (
            <TicketWrapper
              drag="x"
              dragControls={dragControls}
              onDrag={handleDrag}
              dragConstraints={{ left: 0, right: 200 }}
              dragElastic={0.1}
              style={{
                x: tearProgress * 50,
                opacity: 1 - tearProgress * 0.3
              }}
            >
              <Ticket $tearProgress={tearProgress}>
                <TicketMain>
                  <TicketHeader>
                    <Airline>SPACE EXPLORER</Airline>
                    <FlightNumber>{flightNumber}</FlightNumber>
                  </TicketHeader>

                  <RouteInfo>
                    <RouteSection>
                      <AirportCode>EAR</AirportCode>
                      <CityName>Earth</CityName>
                    </RouteSection>

                    <PlaneIcon>✈</PlaneIcon>

                    <RouteSection>
                      <AirportCode>{ticketData.planet.slice(0, 3).toUpperCase()}</AirportCode>
                      <CityName>{planetKorean}</CityName>
                    </RouteSection>
                  </RouteInfo>

                  <TicketDetails>
                    <DetailRow>
                      <DetailLabel>Seat</DetailLabel>
                      <DetailValue>{ticketData.seat}</DetailValue>
                    </DetailRow>

                    <DetailRow>
                      <DetailLabel>Distance</DetailLabel>
                      <DetailValue>{distance.toFixed(1)} M km</DetailValue>
                    </DetailRow>

                    <DetailRow>
                      <DetailLabel>Gate</DetailLabel>
                      <DetailValue>{gate}</DetailValue>
                    </DetailRow>

                    <DetailRow>
                      <DetailLabel>Date</DetailLabel>
                      <DetailValue>{departureDate}</DetailValue>
                    </DetailRow>

                    <DetailRow>
                      <DetailLabel>Boarding</DetailLabel>
                      <DetailValue>2H Before</DetailValue>
                    </DetailRow>
                  </TicketDetails>

                  <Barcode>
                    <BarcodeLines>
                      {Array.from({ length: 40 }).map((_, i) => (
                        <BarcodeLine key={i} $height={Math.random() * 40 + 10} />
                      ))}
                    </BarcodeLines>
                  </Barcode>
                </TicketMain>

                <PerforationLine $tearProgress={tearProgress}>
                  {Array.from({ length: 20 }).map((_, i) => (
                    <PerforationDot key={i} />
                  ))}
                </PerforationLine>

                <TicketStub>
                  <StubContent>
                    <StubRow>
                      <span>SEAT</span>
                      <strong>{ticketData.seat}</strong>
                    </StubRow>
                    <StubRow>
                      <span>GATE</span>
                      <strong>{gate}</strong>
                    </StubRow>
                    <StubRow>
                      <span>DATE</span>
                      <strong>{departureDate}</strong>
                    </StubRow>
                  </StubContent>
                </TicketStub>

                <TearInstructions>
                  <TearIcon onMouseDown={handleTearStart}>✂</TearIcon>
                  <TearText>Click and drag to tear ticket</TearText>
                </TearInstructions>
              </Ticket>
            </TicketWrapper>
          )}
        </AnimatePresence>

        {isTorn && (
          <TornTicketContainer>
            <motion.div
              initial={{ x: -100, rotate: -5 }}
              animate={{ x: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <TornMainTicket>
                <p>Enjoy your space journey!</p>
                <p>Keep this for your records.</p>
              </TornMainTicket>
            </motion.div>

            <motion.div
              initial={{ x: 100, rotate: 5 }}
              animate={{ x: 0, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            >
              <TornStub>
                <p>Boarding Pass</p>
                <p>{ticketData.seat} | {gate}</p>
              </TornStub>
            </motion.div>
          </TornTicketContainer>
        )}
      </TicketContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const TicketContainer = styled.div`
  perspective: 1000px;
`;

const TicketWrapper = styled(motion.div)`
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const Ticket = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  width: 400px;
  transform: ${props => `rotate(${props.$tearProgress * 2}deg)`};
  filter: ${props => `sepia(${props.$tearProgress * 30}%)`};
`;

const TicketMain = styled.div`
  padding: 1.5rem;
`;

const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Airline = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const FlightNumber = styled.span`
  background: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #666;
`;

const RouteInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const RouteSection = styled.div`
  text-align: center;
`;

const AirportCode = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
`;

const CityName = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const PlaneIcon = styled.div`
  font-size: 1.5rem;
  color: #5227FF;
  transform: rotate(90deg);
`;

const TicketDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailLabel = styled.span`
  font-size: 0.8rem;
  color: #666;
  text-transform: uppercase;
`;

const DetailValue = styled.span`
  font-weight: bold;
  color: #333;
`;

const Barcode = styled.div`
  margin-top: 1rem;
`;

const BarcodeLines = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1px;
  height: 50px;
`;

const BarcodeLine = styled.div`
  width: 2px;
  height: ${props => props.$height}px;
  background: #333;
`;

const PerforationLine = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f5f5f5;
  padding: 0.5rem 0;
  transform: ${props => `scaleX(${1 + props.$tearProgress * 0.1})`};
`;

const PerforationDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ddd;
`;

const TicketStub = styled.div`
  background: #f9f9f9;
  padding: 1rem 1.5rem;
`;

const StubContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StubRow = styled.div`
  text-align: center;

  span {
    display: block;
    font-size: 0.7rem;
    color: #666;
    margin-bottom: 0.2rem;
  }

  strong {
    font-size: 0.9rem;
    color: #333;
  }
`;

const TearInstructions = styled.div`
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const TearIcon = styled.div`
  font-size: 1.5rem;
  cursor: grab;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);

  &:active {
    cursor: grabbing;
  }
`;

const TearText = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 80px;
`;

const TornTicketContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const TornMainTicket = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;

  p {
    margin: 0.5rem 0;
    color: #333;
  }
`;

const TornStub = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;

  p {
    margin: 0.3rem 0;
    color: #333;

    &:first-child {
      font-weight: bold;
    }
  }
`;

export default SpaceTicket;
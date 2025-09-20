import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SpaceshipSeating = ({ planet, onSeatSelect, onBack }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handleSeatClick = (seatId) => {
    setSelectedSeat(seatId);
  };

  const handleConfirm = () => {
    if (selectedSeat) {
      onSeatSelect(selectedSeat);
    }
  };

  const renderSeatRow = (rowNumber, seatCount = 4) => {
    const seats = [];
    const seatLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

    for (let i = 0; i < seatCount; i++) {
      const seatId = `${String(rowNumber).padStart(2, '0')}${seatLabels[i]}`;
      const isSelected = selectedSeat === seatId;

      seats.push(
        <Seat
          key={seatId}
          $isSelected={isSelected}
          onClick={() => handleSeatClick(seatId)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      );

      if (i === 1) {
        seats.push(<SeatGap key={`gap-${rowNumber}-${i}`} />);
      }
    }

    return (
      <SeatRow key={rowNumber}>
        <RowNumber>{String(rowNumber).padStart(2, '0')}</RowNumber>
        {seats}
      </SeatRow>
    );
  };

  return (
    <Container>
      <BackButton onClick={onBack}>← Back</BackButton>

      <Title>Choose Your Seat</Title>
      <Subtitle>Destination: {planet}</Subtitle>

      <SpaceshipContainer>
        <SpaceshipNose />

        <SeatLabels>
          <Label>A</Label>
          <Label>B</Label>
          <Label></Label>
          <Label>C</Label>
          <Label>D</Label>
        </SeatLabels>

        <SeatingArea>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(rowNumber =>
            renderSeatRow(rowNumber)
          )}
        </SeatingArea>
      </SpaceshipContainer>

      <SelectedSeatInfo>
        {selectedSeat ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>Selected Seat: <strong>{selectedSeat}</strong></p>
            <ConfirmButton onClick={handleConfirm}>
              Confirm Seat Selection
            </ConfirmButton>
          </motion.div>
        ) : (
          <p>Please select a seat</p>
        )}
      </SelectedSeatInfo>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin: 2rem 0 0.5rem 0;
  text-align: center;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const SpaceshipContainer = styled.div`
  background: white;
  border-radius: 100px 100px 20px 20px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
`;

const SpaceshipNose = styled.div`
  width: 60px;
  height: 30px;
  background: #f0f0f0;
  border-radius: 50px 50px 0 0;
  margin: 0 auto 2rem auto;
  border: 2px solid #e0e0e0;
`;

const SeatLabels = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  padding: 0 2rem;
`;

const Label = styled.div`
  font-weight: bold;
  color: #666;
  font-size: 0.9rem;
  width: 30px;
  text-align: center;
`;

const SeatingArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SeatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

const RowNumber = styled.div`
  font-weight: bold;
  color: #666;
  font-size: 0.9rem;
  width: 30px;
  text-align: center;
`;

const Seat = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid ${props => props.$isSelected ? '#5227FF' : '#ddd'};
  background: ${props => props.$isSelected ? '#5227FF' : '#f9f9f9'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #5227FF;
    background: ${props => props.$isSelected ? '#5227FF' : '#f0f0ff'};
  }
`;

const SeatGap = styled.div`
  width: 20px;
`;

const SelectedSeatInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
  color: white;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const ConfirmButton = styled.button`
  background: #5227FF;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(82, 39, 255, 0.8);
    transform: translateY(-2px);
  }
`;

export default SpaceshipSeating;
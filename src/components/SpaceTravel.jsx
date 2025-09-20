import React, { useState } from 'react';
import SpaceshipSeating from './SpaceshipSeating';
import SpaceTicket from './SpaceTicket';

const SpaceTravel = ({ planet, onBack }) => {
  const [currentStep, setCurrentStep] = useState('seating'); // 'seating' | 'ticket'
  const [ticketData, setTicketData] = useState(null);

  const handleSeatSelect = (seat) => {
    setTicketData({
      planet: planet,
      seat: seat
    });
    setCurrentStep('ticket');
  };

  const handleBackToSeating = () => {
    setCurrentStep('seating');
    setTicketData(null);
  };

  const handleBackToPlanets = () => {
    onBack();
  };

  if (currentStep === 'seating') {
    return (
      <SpaceshipSeating
        planet={planet}
        onSeatSelect={handleSeatSelect}
        onBack={onBack}
      />
    );
  }

  if (currentStep === 'ticket') {
    return (
      <SpaceTicket
        ticketData={ticketData}
        onBack={handleBackToPlanets}
      />
    );
  }

  return null;
};

export default SpaceTravel;
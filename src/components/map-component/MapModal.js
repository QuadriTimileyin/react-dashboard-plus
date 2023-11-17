import React, { useState } from 'react';
import Modal from 'react-modal'; // Replace with your actual modal library
import MapComponent from './MapComponent';

const MapModal = ({ lat, lng }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Box>
            <button onClick={openModal}>Open Map</button>
          </Box>
        </div>
      </div>

      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <MapComponent lat={lat} lng={lng} />
      </Modal>
    </>
  );
};

export default MapModal;

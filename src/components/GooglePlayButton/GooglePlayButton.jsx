
import React from 'react';
import { FaGooglePlay } from 'react-icons/fa';

import { Container } from './styles';

function GooglePlayButton(props) {
  return (
    <Container {...props}>
      <div className="icon">
        <FaGooglePlay size={28} />
      </div>
      <div className="text">
        <span>Available on the</span>
        <span className="large">Google Play</span>
      </div>
    </Container>
  );
}

export default GooglePlayButton;

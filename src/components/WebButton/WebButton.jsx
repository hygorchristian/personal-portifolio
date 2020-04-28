import React from 'react';
import { FaChrome } from 'react-icons/fa';

import { Container } from './styles';

function AppleButton(props) {
  return (
    <Container {...props}>
      <div className="icon">
        <FaChrome size={28} />
      </div>
      <div className="text">
        <span>Available on the</span>
        <span className="large">Web</span>
      </div>
    </Container>
  );
}

export default AppleButton;

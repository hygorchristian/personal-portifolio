import React from 'react';
import { FaApple } from 'react-icons/fa';

import { Container } from './styles';

function AppleButton(props) {
  return (
    <Container {...props}>
      <div className="icon">
        <FaApple size={36} />
      </div>
      <div className="text">
        <span>Available on the</span>
        <span className="large">App Store</span>
      </div>
    </Container>
  );
}

export default AppleButton;

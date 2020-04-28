import React from 'react';
import { FaApple, FaGooglePlay, FaChrome } from 'react-icons/fa';

import { Container } from './styles';

const icons = {
  apple: () => <FaApple size={36} />,
  google: () => <FaGooglePlay size={28} />,
  web: () => <FaChrome size={28} />,
};

function LinkButton({ icon, label, ...props }) {
  const Icon = icons[icon];

  return (
    <Container {...props} target="_blank">
      <div className="icon">
        <Icon />
      </div>
      <div className="text">
        <span>Available on the</span>
        <span className="large">{label}</span>
      </div>
    </Container>
  );
}

export default LinkButton;

import React from 'react';

import { Container } from './styles';

function ProjectWebScreens({ screens, ...props }) {
  return (
    <Container {...props}>
      <div className="items">
        {screens.map((item) => (
          <div className="item" key={item.id}>
            <h4 className="label">{item.nome}</h4>
            <div className="image-container">
              <img src={item.imagem.downloadURL} alt="screen" />
            </div>
          </div>
        ))}
      </div>
      <div className="footer">
        <h2 className="title helvetica-condensed">Screenshots</h2>
        <div className="symbol">
          <img src="/icons/symbol.svg" />
        </div>
        <div className="count">002</div>
        <div className="indicator">
          <div className="fill" />
        </div>
      </div>
    </Container>
  );
}

export default ProjectWebScreens;

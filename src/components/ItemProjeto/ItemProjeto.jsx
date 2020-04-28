import React from 'react';
import { useHistory } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

import { Container } from './styles';

function ItemProjeto({ projeto, ...props }) {
  const history = useHistory();

  const handleDetails = () => {
    history.push(`/project/${projeto.slug}`);
  };

  console.log('projetos', projeto);

  return (
    <Container onClick={handleDetails}>
      <div className="image">
        <img src={projeto.logo.downloadURL} alt={projeto.slug} />
      </div>
      <div className="info">
        <h2 className="helvetica-condensed">{projeto.nome}</h2>
        <p>{projeto.titulo}</p>
      </div>
      <div className="divider" />
      <div className="tech">
        {projeto.tecnologias.map((tech) => (
          <Tooltip title={tech.nome}>
            <a onClick={(e) => e.stopPropagation()} className="item-tech" href={tech.link} target="_blank">
              <img src={tech.icone.downloadURL} alt={tech.nome} />
            </a>
          </Tooltip>

        ))}
      </div>
    </Container>
  );
}

export default ItemProjeto;

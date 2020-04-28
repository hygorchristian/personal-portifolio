import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { getProjects } from '~/services/firebase';
import ItemProjeto from '~/components/ItemProjeto';

const findog = [
  {
    id: '1',
    src: '/img/mock/screenshot.png',
    label: 'Ongs'
  },
  {
    id: '2',
    src: '/img/mock/screenshot.png',
    label: 'Animals Slider'
  },
  {
    id: '3',
    src: '/img/mock/screenshot.png',
    label: 'Ong Detail'
  },
  {
    id: '4',
    src: '/img/mock/screenshot.png',
    label: 'Create Post'
  },
  {
    id: '5',
    src: '/img/mock/screenshot.png',
    label: 'Login'
  },
  {
    id: '6',
    src: '/img/mock/screenshot.png',
    label: 'Map'
  },
];

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects((data) => setProjects(data));
  }, []);

  return (
    <Container>
      <div className="content">
        <h1 className="">My Projects</h1>
        <div className="items">
          {projects.map((projeto) => (
            <ItemProjeto projeto={projeto} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Home;

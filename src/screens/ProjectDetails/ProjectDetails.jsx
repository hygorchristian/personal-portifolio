import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectBySlug, getScreenshots } from '~/services/firebase';

import { Container } from './styles';
import ProjectApp from '~/components/ProjectApp';
import ProjectWeb from '~/components/ProjectWeb';
import ProjectAppScreens from '~/components/ProjectAppScreens';
import ProjectWebScreens from '~/components/ProjectWebScreens';

function ProjectDetails() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [screenshots, setScreenshots] = useState([]);

  useEffect(() => {
    getProjectBySlug(slug, (data) => {
      setProject(data);

      getScreenshots(data.id, (shots) => {
        setScreenshots(shots);
      });
    });
  }, []);

  if (!project) return false;

  return (
    <Container>
      {project.tipo === 'app' && (
        <>
          <ProjectApp project={project} cover={screenshots.length > 0 && screenshots[0]} />
          <ProjectAppScreens screens={screenshots} />
        </>
      )}
      {project.tipo === 'web' && (
        <>
          <ProjectWeb project={project} cover={screenshots.length > 0 && screenshots[0]} />
          <ProjectWebScreens screens={screenshots} />
        </>
      )}
      {/* {project.screen} */}
    </Container>
  );
}

export default ProjectDetails;

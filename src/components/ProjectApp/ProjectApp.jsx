import React from 'react';

import { Container } from './styles';
import { lorem } from '~/utils/dev';
import LinkButton from '~/components/LinkButton';

function ProjectApp({ project, cover, ...props }) {
  return (
    <Container>
      <div className="ornament">
        <div className="overflow-y" />
        <div className="overflow-x" />
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <div className="content">
        <div className="info">
          <div className="logo">
            <img src={project.logo.downloadURL} />
          </div>
          <h2 className="app-name helvetica-condensed">{project.nome}</h2>
          <h1 className="title archivo">{project.titulo}</h1>
          <div className="divider" />
          <p>{project.descricao}</p>
          {project.link_app_store && (
            <LinkButton
              style={{ marginBottom: 12 }}
              icon="apple"
              label="App Store"
              href={project.link_app_store}
            />
          )}
          {project.link_google_play && (
            <LinkButton
              style={{ marginBottom: 12 }}
              icon="google"
              label="Google Play"
              href={project.link_google_play}
            />
          )}
          {project.link_web && (
            <LinkButton
              style={{ marginBottom: 12 }}
              icon="web"
              label="Web"
              href={project.link_web}
            />
          )}
        </div>
        <div className="image">
          {cover && (
            <>
              {cover.tipo === 'ios' && <img className="mockup" src="/img/apple-mock.png" />}
              {cover.tipo === 'android' && <img className="mockup" src="/img/android-mock.png" />}
              <img className="app-screenshot" src={cover.imagem.downloadURL} />
            </>
          )}

        </div>
        <div className="indicator" />
      </div>
      <div className="footer">
        <h2 className="title helvetica-condensed">{cover.nome}</h2>
        <div className="symbol">
          <img src="/icons/symbol.svg" />
        </div>
        <div className="count">001</div>
        <div className="indicator">
          <div className="fill" />
        </div>
      </div>
    </Container>
  );
}

export default ProjectApp;

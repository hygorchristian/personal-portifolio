import React from 'react';

import { Container } from './styles';
import { lorem } from '~/utils/dev';
import LinkButton from '~/components/LinkButton';


function ProjectWeb({ cover, project, ...props }) {
  return (
    <Container>
      <div className="content">
        <div className="info">
          <div className="app">
            <div className="logo">
              <img src={project.logo.downloadURL} />
            </div>
          </div>
          {/* <div className="technologies"> */}
          {/*  <div className="item"> */}
          {/*    <FaReact size={28} /> */}
          {/*  </div> */}
          {/*  <div className="item"> */}
          {/*    <FaJs size={28} /> */}
          {/*  </div> */}
          {/*  <div className="item"> */}
          {/*    <FaHtml5 size={28} /> */}
          {/*  </div> */}
          {/*  <div className="item"> */}
          {/*    <FaCss3Alt size={28} /> */}
          {/*  </div> */}
          {/* </div> */}
          <div className="text">
            <h2 className="app-name helvetica-condensed">{project.nome}</h2>
            <h1 className="title archivo">{project.titulo}</h1>
            <p>{project.descricao}</p>
          </div>
        </div>
        <div className="mockup">
          <div className="toolbar">
            <div className="button" style={{ backgroundColor: '#FD5A4F' }} />
            <div className="button" style={{ backgroundColor: '#E3C22C' }} />
            <div className="button" style={{ backgroundColor: '#55C22C' }} />
          </div>
          <div className="mockup-content">
            <img src={cover && cover.imagem.downloadURL} />
          </div>
        </div>
        <div className="buttons">
          <LinkButton
            icon="web"
            label="Web"
            href={project.link_web}
          />
        </div>
        <div className="indicator" />
      </div>
      <div className="footer">
        <h2 className="title helvetica-condensed">{cover && cover.nome}</h2>
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

export default ProjectWeb;

import React from 'react';

import githubLogo from '../../images/socialmedia-github.svg';
import appStoreBadge from '../../images/app-store-badge-black.svg';

function ProjectsItem() {
  return (
    <section className="projects-grid-item">
      <p className="project-item-tags">
        <span>Open Source</span>
      </p>
      <a className="project-primary-link app-store-download-badge">
        <img alt="AppStore" src={appStoreBadge} />
      </a>
      <div className="project-title-description">
        <h3>Project Title</h3>
        <p>Short project description</p>
      </div>
      <img className="project-icon" alt="app-icon" />
      <a className="project-github-link">
        <img alt="GitHub" src={githubLogo} />
      </a>
    </section>
  );
}

export default ProjectsItem;
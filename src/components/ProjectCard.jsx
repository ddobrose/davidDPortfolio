import React from 'react'
import './projects.css'

export const ProjectCard = ({projects}) => {
  return (
    <div id='scrollspyProjects' className=' cards-container'>
      {projects.map((project, idx) => {
        return (
          <div key={idx}>
            <div
              className="card mb-3"
              style={{
                maxWidth: "20rem",
                backgroundImage: `linear-gradient(rgba(0,0,0,.6) 0,rgba(0,0,0,.6)), url(${project.pic})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              key={idx}
            >
              {/* PROJECT HEADER */}

              <div className="card-header card-header-container">
                <p>{project.name}</p>
                <i className="fas fa-user-alt"></i>
              </div>
              {/*  start card body */}

              {/* card links */}
              <div className="card-body" style={{ height: "14rem" }}>
                <div className="card-links-container">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>

                  <a href={project.deployed} target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-square-alt"></i>
                  </a>
                </div>

                {/* PROJECT DESCRIPTION & TECH TAGS */}
                <p>{project.about}</p>
                <div className="tags-container">
                  {project.software.map((software, j) => {
                    return (
                      <span key={j} className="badge card-tags">
                        {software}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

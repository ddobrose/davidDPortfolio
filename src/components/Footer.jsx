import React from 'react'

export const Footer = () => {
  return (
    <div>
    <div className="d-flex flex-column">
      <footer
        id="sticky-footer"
        className="flex-shrink-0 py-2 bg-black"
      >
        <div className="content-container d-flex flex-column  justify-content-center align-items-center">
          <a
            className="nav-link footer-link footer-text"
            href="#scrollspyTop"
          >
            Back to top
          </a>
          <a
            href="https://github.com/ddobrose"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className=" fab fa-github"
              style={{ fontSize: "1.75rem" }}
            ></i>
          </a>
        </div>
      </footer>
    </div>
  </div>
  )
}

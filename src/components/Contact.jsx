import React from 'react'
import "./contactme.css";
export const Contact = () => {
  return (
    <div className="contact-container" id="scrollspyContact">
      <h3 >Contact Me</h3>
      <p>Currently available for hire, inbox is always open!</p>

      {/* Button will open mail app to send to gmail */}
      <a href="mailto:ddobrose@yahoo.com">
        <button type="button" className="btn btn-outline-light">
          <span>
            <i id="buttonID" className="far fa-envelope-open button-icon"></i>
          </span>
          <span className="btn-text">Contact</span>
        </button>
      </a>
    </div>
  )
}

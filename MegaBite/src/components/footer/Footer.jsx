import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer className="bg-footerColor footer">
        <div>
          <p className="FindUsAt">Find us at!</p>

          <div className="social-links">
            <p className="GitHub">
              <a
                href="https://github.com/AdamGrubb/grupp10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
            </p>
            <p className="LinkedIn">
              <a
                href="https://grupp10.carrd.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
            </p>
            <div className="office-logo">
              <a
                href="https://www.iths.se/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-building"></i> Office
              </a>
            </div>
          </div>
          <p className="joke">
            What do you call cheese that isn't yours? Nacho cheese!"
          </p>
        </div>
      </footer>
    </>
  );
}

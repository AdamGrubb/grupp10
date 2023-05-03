import "../../index.css";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer className="bg-footerColor footer">
        <div>
          <p className="FindUsAt">Hitta oss på!</p>
          
          <div className="social-links">
            <p className="GitHub">
              <a href="https://github.com/AdamGrubb/grupp10" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </p>
            <p className="LinkedIn">
              <a href="https://grupp10.carrd.co/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
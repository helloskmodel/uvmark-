import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link className="footer-brand" to="/">UVMARK</Link>
          <p>
            Durable labels and identification systems for demanding laboratory,
            clinical, and biopharmaceutical workflows.
          </p>
        </div>

        <div>
          <h2>Solutions</h2>
          <Link to="/products">Laboratory Labels</Link>
          <Link to="/products#hardware">Printers &amp; Scanners</Link>
          <Link to="/products#services">Workflow Services</Link>
        </div>

        <div>
          <h2>Company</h2>
          <Link to="/about">About UVMARK</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h2>Regional Support</h2>
          <p>Houston · New York · Vancouver</p>
          <Link className="footer-inquiry" to="/contact">Start an inquiry →</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 UVMARK Solutions. All rights reserved.</span>
        <div>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms-of-use">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

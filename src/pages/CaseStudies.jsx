import { Link } from "react-router-dom";
import "../styles/CaseStudies.css";

export default function CaseStudies() {
  return (
    <main className="case-page">
      <section className="case-hero">
        <p className="eyebrow">CASE STUDY · IVD AUTOMATION</p>
        <h1>Reliable slide identification through automated processing.</h1>
        <p className="case-intro">
          Supporting an IVD diagnostic company during the transition from
          manual testing to a high-throughput automated workflow.
        </p>
      </section>

      <section className="case-overview">
        <div>
          <span>THE CHALLENGE</span>
          <h2>Conventional labels detached or became unreadable.</h2>
        </div>
        <p>
          During staining, chemical exposure, and automated handling,
          conventional microscope-slide labels could lose adhesion or barcode
          readability. The identification needed to survive the process without
          disrupting automated equipment.
        </p>
      </section>

      <section className="case-detail-grid">
        <article>
          <span>01</span>
          <h2>Evaluate</h2>
          <p>UVMARK reviewed the slide surface, reagents, processing sequence, scanner requirements, and automated handling constraints.</p>
        </article>
        <article className="highlight">
          <span>02</span>
          <h2>Engineer</h2>
          <p>Material, adhesive, print durability, and a protective self-laminating flap construction were optimized through application testing.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Integrate</h2>
          <p>The finished label supported durable 1D / 2D barcode identification and compatibility with LIS, LIMS, and printing workflows.</p>
        </article>
      </section>

      <section className="case-result">
        <div>
          <p className="eyebrow">THE SOLUTION</p>
          <h2>Self-laminating labels for microscope slides.</h2>
        </div>
        <ul>
          <li>Resistance to xylene and laboratory reagents</li>
          <li>Protective self-laminating flap structure</li>
          <li>Stable adhesion during automated processing</li>
          <li>Durable 1D and 2D barcode readability</li>
          <li>Compatibility with laboratory information workflows</li>
        </ul>
      </section>

      <section className="case-cta">
        <h2>Working through a similar identification challenge?</h2>
        <Link className="button primary" to="/contact?application=Automated%20slide%20labeling">
          Discuss Your Workflow
        </Link>
      </section>
    </main>
  );
}

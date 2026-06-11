import { Link } from "react-router-dom";
import "../styles/Home.css";

const applications = [
  { title: "Cryogenic Storage", text: "Labels engineered for liquid nitrogen and -80°C storage." },
  { title: "Clinical Diagnostics", text: "Reliable identification for slides, tubes, specimens, and blood bags." },
  { title: "Lab Automation", text: "Barcode-ready constructions designed for automated handling." },
  { title: "Biopharma Research", text: "Flexible labeling support from pilot studies to routine operations." },
];

const capabilities = [
  "Cryogenic and deep-freeze materials",
  "Chemical and solvent resistance",
  "1D / 2D barcode optimization",
  "Pre-printed and serialized labels",
  "Pre-labeled labware",
  "Printer, scanner, and software integration",
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">LABORATORY LABELING &amp; IDENTIFICATION</p>
          <h1>Labels that stay readable when your workflow gets demanding.</h1>
          <p className="hero-subtitle">
            Application-matched labels, printing systems, and workflow support
            for biopharmaceutical, clinical, and research laboratories.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/contact">Request a Quote</Link>
            <Link className="button secondary" to="/products">Explore Solutions</Link>
          </div>
          <div className="hero-proof">
            <span>-196°C cryogenic options</span>
            <span>Chemical-resistant materials</span>
            <span>Small-batch support</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Laboratory labeling workflow">
          <div className="sample-label">
            <span>SPECIMEN ID</span>
            <strong>UV-240618-037</strong>
            <div className="barcode" />
            <small>2D / 1D READY · CRYO COMPATIBLE</small>
          </div>
          <div className="temperature-card">
            <strong>-196°C</strong>
            <span>Cryogenic storage</span>
          </div>
          <div className="trace-card">
            <span className="status-dot" />
            <div><strong>Traceability</strong><small>From print to archive</small></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Markets served">
        <span>Biopharmaceutical Research</span>
        <span>Clinical Diagnostics</span>
        <span>Transfusion Medicine</span>
        <span>IVD Automation</span>
      </section>

      <section className="section applications-section">
        <div className="section-heading">
          <p className="eyebrow">BUILT AROUND YOUR APPLICATION</p>
          <h2>One label does not fit every laboratory workflow.</h2>
          <p>
            We match materials, adhesives, print methods, and label geometry to
            the actual surface, temperature, chemicals, and handling process.
          </p>
        </div>
        <div className="application-grid">
          {applications.map((item, index) => (
            <Link
              className="application-card"
              to={`/contact?application=${encodeURIComponent(item.title)}`}
              key={item.title}
            >
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>Discuss this application →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section capability-section">
        <div className="capability-copy">
          <p className="eyebrow">A COMPLETE IDENTIFICATION PARTNER</p>
          <h2>From label selection to a working print workflow.</h2>
          <p>
            UVMARK supports the full identification system, helping teams reduce
            trial-and-error and move from requirement to validated operation.
          </p>
          <Link className="text-link" to="/products">View all products and services →</Link>
        </div>
        <ul className="capability-list">
          {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
        </ul>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">HOW WE WORK</p>
          <h2>A practical path from requirement to rollout.</h2>
        </div>
        <div className="process-grid">
          <article><span>01</span><h3>Understand</h3><p>We review the container, environment, process, data, and print requirements.</p></article>
          <article><span>02</span><h3>Configure</h3><p>We recommend materials, dimensions, ribbons, printers, and software settings.</p></article>
          <article><span>03</span><h3>Validate</h3><p>Samples and pilot quantities support testing in the real application.</p></article>
          <article><span>04</span><h3>Scale</h3><p>We support recurring supply, pre-printing, and workflow improvements.</p></article>
        </div>
      </section>

      <section className="case-preview">
        <div>
          <p className="eyebrow">CASE STUDY · IVD AUTOMATION</p>
          <h2>Reliable slide identification through chemical processing.</h2>
          <p>
            See how a self-laminating construction helped preserve adhesion and
            barcode readability during an automated diagnostic workflow.
          </p>
        </div>
        <Link className="button light" to="/case-studies">Read the Case Study</Link>
      </section>

      <section className="final-cta">
        <p className="eyebrow">HAVE A LABELING CHALLENGE?</p>
        <h2>Tell us what the label needs to survive.</h2>
        <p>Share your application, temperature, surface, and workflow. Our team will help identify a practical starting point.</p>
        <Link className="button primary" to="/contact">Talk to a Labeling Specialist</Link>
      </section>
    </main>
  );
}

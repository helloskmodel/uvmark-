import { Link } from "react-router-dom";
import "../styles/Products.css";

const groups = [
  {
    title: "By Application",
    description: "Fit the label geometry and adhesive to the item being identified.",
    items: ["Tubes & Vials", "Microscope Slides", "Cryoboxes", "PCR Tubes & Strips", "Microplates", "Blood Bags", "IVF Straws"],
  },
  {
    title: "By Environment",
    description: "Select materials based on storage, processing, and exposure conditions.",
    items: ["Cryogenic (-196°C)", "Deep-Freeze (-80°C)", "Chemical Resistant", "High Heat", "Sterilization", "Moisture Resistant"],
  },
  {
    title: "By Workflow",
    description: "Support the data, handling, and traceability requirements around the label.",
    items: ["Automation", "RFID", "Self-Laminating", "Tamper Evident", "Removable", "Hazard Communication"],
  },
];

const services = [
  { title: "Label Design", text: "Application-focused dimensions, layout, barcode structure, color coding, and material selection." },
  { title: "Pre-Printed Labels", text: "Serialized, variable-data, barcode, and workflow-specific labels supplied ready to use." },
  { title: "Pre-Labeled Labware", text: "Labels applied to customer-selected tubes, vials, plates, bottles, and consumables." },
];

function InquiryLink({ children }) {
  return (
    <Link
      to={`/contact?application=${encodeURIComponent(children)}`}
      className="product-pill"
    >
      {children}
    </Link>
  );
}

export default function Products() {
  return (
    <main className="products-page">
      <section className="products-hero">
        <p className="eyebrow">PRODUCTS &amp; WORKFLOW SERVICES</p>
        <h1>Build an identification system around the real application.</h1>
        <p className="products-intro">
          Labels, printers, scanners, software, and implementation support for
          laboratory environments where readability and traceability matter.
        </p>
        <Link className="button primary" to="/contact">Discuss Your Requirements</Link>
      </section>

      <section className="products-section" id="applications">
        <div className="products-container">
          <div className="section-heading">
            <p className="eyebrow">LABORATORY LABELS</p>
            <h2>Start with the surface and conditions.</h2>
            <p>Choose a category below to include it in your inquiry.</p>
          </div>
          <div className="label-grid">
            {groups.map((group) => (
              <article className="product-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="pill-group">
                  {group.items.map((item) => <InquiryLink key={item}>{item}</InquiryLink>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="systems-section" id="hardware">
        <div className="products-container systems-grid">
          <div className="systems-intro">
            <p className="eyebrow">PRINTING &amp; DATA CAPTURE</p>
            <h2>The label is only one part of the system.</h2>
            <p>
              We support printer, ribbon, scanner, and software selection so the
              finished workflow produces consistent, readable identification.
            </p>
          </div>
          <article>
            <span>01</span>
            <h3>Printers &amp; Ribbons</h3>
            <p>Zebra and TSC healthcare or industrial printing systems, matched with application-appropriate ribbons.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Scanners &amp; Devices</h3>
            <p>Honeywell scanners and scan-and-print configurations for practical point-of-use workflows.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Label Software</h3>
            <p>BarTender design, database connections, barcode setup, RFID support, and print automation.</p>
          </article>
        </div>
      </section>

      <section className="products-section" id="services">
        <div className="products-container">
          <div className="section-heading">
            <p className="eyebrow">VALUE-ADDED SERVICES</p>
            <h2>Reduce the work between ordering and applying.</h2>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link to={`/contact?application=${encodeURIComponent(service.title)}`}>
                  Request information →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="products-cta">
        <p className="eyebrow">NOT SURE WHERE TO START?</p>
        <h2>Send us the container, temperature, chemical exposure, and print requirements.</h2>
        <Link className="button primary" to="/contact">Ask a Labeling Specialist</Link>
      </section>
    </main>
  );
}

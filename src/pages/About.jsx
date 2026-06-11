import { Link } from "react-router-dom";
import "../styles/About.css";

const support = [
  {
    number: "01",
    title: "Application Discovery",
    text: "We start with the container, environment, process, data, and existing equipment rather than a generic catalog item.",
  },
  {
    number: "02",
    title: "Integrated Identification",
    text: "Labels, ribbons, printers, scanners, software, and pre-labeling services are considered as one working system.",
  },
  {
    number: "03",
    title: "Responsive Execution",
    text: "Small-batch sampling, workflow testing, production coordination, and recurring supply support changing requirements.",
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="eyebrow">ABOUT UVMARK</p>
        <h1>Identification built around demanding laboratory work.</h1>
        <p className="about-intro">
          UVMARK helps biopharmaceutical, clinical, and research teams select
          and implement durable identification solutions for critical workflows.
        </p>
      </section>

      <section className="about-support">
        <div className="about-heading">
          <p className="eyebrow">HOW WE SUPPORT CUSTOMERS</p>
          <h2>Practical collaboration from requirement to repeat supply.</h2>
        </div>
        <div className="about-grid">
          {support.map((item) => (
            <article className="about-card" key={item.title}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-regions">
        <div>
          <p className="eyebrow">REGIONAL COLLABORATION</p>
          <h2>Support across North American laboratory markets.</h2>
        </div>
        <p>
          With touchpoints in Houston, New York, and Vancouver, UVMARK supports
          technical discussions, operational coordination, and customer service
          across multiple time zones.
        </p>
        <Link className="button primary" to="/contact">Contact Our Team</Link>
      </section>
    </main>
  );
}

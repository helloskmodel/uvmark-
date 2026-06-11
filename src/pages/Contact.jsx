import { useSearchParams } from "react-router-dom";
import "../styles/Contact.css";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const application = searchParams.get("application") || "";

  return (
    <main className="contact-page">
      <section className="contact-intro">
        <p className="eyebrow">START A CONVERSATION</p>
        <h1>Tell us what your identification needs to withstand.</h1>
        <p>
          Share the application, surface, temperature, exposure, volume, and
          current equipment. A specialist will review the requirement.
        </p>
        <div className="contact-details">
          <div><span>REGIONAL SUPPORT</span><strong>Houston · New York · Vancouver</strong></div>
          <div><span>RESPONSE</span><strong>Usually within one business day</strong></div>
        </div>
      </section>

      <section className="form-panel">
        <form
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input type="hidden" name="access_key" value="b27659f3-f2a3-4011-b1bb-82f847da76da" />
          <input type="hidden" name="subject" value="New inquiry from UVMARK website" />
          <input type="checkbox" name="botcheck" className="botcheck" tabIndex="-1" autoComplete="off" />

          <div className="form-row">
            <label>
              Name *
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Work email *
              <input type="email" name="email" placeholder="name@company.com" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              Company
              <input type="text" name="company" placeholder="Company or organization" />
            </label>
            <label>
              Country / region
              <input type="text" name="region" placeholder="Country or region" />
            </label>
          </div>

          <label>
            Application
            <input type="text" name="application" defaultValue={application} placeholder="e.g. cryogenic vial labeling" />
          </label>

          <label>
            Requirement *
            <textarea
              name="message"
              placeholder="Container or surface, temperature range, chemical exposure, quantity, label size, printer model, and any current problem..."
              required
            />
          </label>

          <button type="submit">Send Inquiry</button>
          <p className="form-note">By submitting this form, you agree that UVMARK may contact you about this inquiry.</p>
        </form>
      </section>
    </main>
  );
}

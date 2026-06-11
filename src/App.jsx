import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./styles/Global.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

const pageMeta = {
  "/": {
    title: "Laboratory Labels & Identification Solutions | UVMARK",
    description: "Durable cryogenic, chemical-resistant, and automation-ready labels, printing systems, and workflow support for laboratories.",
  },
  "/products": {
    title: "Laboratory Labels, Printers & Workflow Services | UVMARK",
    description: "Explore labels by application and environment, plus printers, scanners, BarTender software, pre-printing, and pre-labeled labware.",
  },
  "/about": {
    title: "About UVMARK | Laboratory Identification Specialists",
    description: "Learn how UVMARK supports laboratory and clinical teams with application-matched labels and integrated identification workflows.",
  },
  "/case-studies": {
    title: "Laboratory Labeling Case Studies | UVMARK",
    description: "See how UVMARK solves demanding identification challenges in IVD automation and laboratory workflows.",
  },
  "/contact": {
    title: "Request a Laboratory Labeling Quote | UVMARK",
    description: "Discuss your laboratory labeling application, temperature, chemical exposure, volume, and printing requirements with UVMARK.",
  },
};

function PageEffects() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || pageMeta["/"];
    const canonicalUrl = `https://www.uvmarksolutions.com${location.pathname === "/" ? "/" : location.pathname}`;
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);

    if (location.hash) {
      window.setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <PageEffects />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

import {useEffect, useState} from "react";

const MinimalNav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="/">Site Sprint Py</a>
        <div />
        <span className="contact-btn group invisible">
          <div className="inner"><span>Contact Me</span></div>
        </span>
      </div>
    </header>
  );
};

const Terms = () => {
  useEffect(() => { window.scrollTo(0,0); }, []);
  return (
    <>
      <MinimalNav />
      <main className="padding-x-lg pt-28 md:pt-32 w-full max-w-screen-md mx-auto">
        <article className="card-border rounded-xl px-4 md:px-6 py-6 md:py-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-white-50 mb-6">Welcome to Site Sprint Py. By accessing or using this website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.</p>

          <section className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">🧑‍💻 Use of the Website</h2>
            <ul className="list-disc pl-5 text-white-50 space-y-2">
              <li>This site showcases the work and services of José Pucciarelli, a web developer based in Paraguay.</li>
              <li>You may browse, contact, and view project details for informational purposes only.</li>
              <li>Unauthorized use, reproduction, or distribution of content is strictly prohibited.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">📬 Contact & Communication</h2>
            <ul className="list-disc pl-5 text-white-50 space-y-2">
              <li>When you submit a message via the contact form, you agree to provide accurate information.</li>
              <li>We may respond via email to discuss project inquiries, collaboration, or feedback.</li>
              <li>Your data will be handled respectfully and never shared with third parties without consent.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">💼 Project Engagement</h2>
            <ul className="list-disc pl-5 text-white-50 space-y-2">
              <li>Any project engagement initiated through this site is subject to a separate written agreement.</li>
              <li>Timelines, deliverables, and payment terms will be defined in that agreement.</li>
              <li>José reserves the right to decline projects that do not align with his expertise or values.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">🔒 Intellectual Property</h2>
            <ul className="list-disc pl-5 text-white-50 space-y-2">
              <li>All content, designs, code samples, and visuals on this site are the intellectual property of José Pucciarelli unless otherwise stated.</li>
              <li>You may not copy, reuse, or modify any assets without explicit permission.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">⚠️ Limitation of Liability</h2>
            <ul className="list-disc pl-5 text-white-50 space-y-2">
              <li>Site Sprint Py is provided “as is” without warranties of any kind.</li>
              <li>José is not liable for any damages resulting from the use or inability to use this site.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">🌍 Local Compliance</h2>
            <p className="text-white-50">This site operates under Paraguayan law. Any disputes shall be resolved under local jurisdiction.</p>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">📌 Changes to Terms</h2>
            <p className="text-white-50">These Terms may be updated periodically. Continued use of the site implies acceptance of any changes.</p>
          </section>
        </article>

        <div className="text-center mt-6">
          <a href="/" className="contact-btn group inline-block w-full sm:w-auto">
            <div className="inner"><span>Back to Home</span></div>
          </a>
        </div>
      </main>
    </>
  );
};

export default Terms;

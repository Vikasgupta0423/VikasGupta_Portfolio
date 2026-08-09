import Container from "../common/Container";
import ContactHeader from "./ContactHeader";
import ContactCard from "./ContactCard";
import ContactFooter from "./ContactFooter";
// import PortfolioAI from "../ai/PortfolioAI";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#040816] py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[180px]" />

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <Container>
        {/* Section Header */}
        <ContactHeader />

        {/* Contact Card */}
        <div className="mx-auto mt-20 max-w-5xl">
          <ContactCard />
        </div>

        
        {/* AI Assistant */}
        {/*
        <PortfolioAI />
        */}
      </Container>
    </section>
  );
};

export default Contact;
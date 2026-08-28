import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import ContactContent from "@/components/contact/ContactContent";

export const metadata = {
  title: "Contact Us · MECHMERISE 2K26",
  description:
    "Get in touch with the MECHMERISE 2K26 team — reach out via pit radio or drop us a message.",
};

export default function ContactPage() {
  return (
    <>
      <SectionDivider
        kicker="PIT RADIO · OPEN CHANNEL"
        title="CONTACT"
        subCopy="Got questions? Feedback? Want to collaborate? Open a channel — we're listening."
        prompt="close%20up%20racing%20radio%20communication%20equipment%20headset%20microphone%20dramatic%20red%20and%20blue%20lighting%20dark%20moody%20atmosphere%20no%20logos%20no%20text"
        accent="circuit-blue"
      />
      <ContactContent />
      <Footer />
    </>
  );
}

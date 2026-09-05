import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import AboutContent from "@/components/about/AboutContent";

export const metadata = {
  title: "About Us · MECHMERISE 2K26",
  description:
    "The story behind MECHMERISE — the annual technical festival of the Department of Mechanical Engineering, SVPCET Nagpur.",
};

export default function AboutPage() {
  return (
    <>
      <SectionDivider
        kicker="FORMATION LAP · SINCE 2019"
        title="ABOUT US"
        subCopy="7+ years of engineering excellence. Three days of building, racing, and re-inventing."
        prompt="aerial%20view%20college%20campus%20engineering%20building%20dramatic%20golden%20hour%20lighting%20modern%20architecture%20trees%20pathways%20no%20logos%20no%20text%20no%20people"
        image="/images/about-bg.png"
        accent="pit-amber"
      />
      <AboutContent />
      <Footer />
    </>
  );
}

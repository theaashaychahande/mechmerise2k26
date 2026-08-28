import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import WorkshopsList from "@/components/workshops/WorkshopsList";

export const metadata = {
  title: "Workshops · MECHMERISE 2K26",
  description:
    "Hands-on technical workshops at MECHMERISE 2K26 — learn, build, and skill up with expert-led sessions.",
};

export default function WorkshopsPage() {
  return (
    <>
      <SectionDivider
        kicker="PIT STOP · SKILL UP"
        title="WORKSHOPS"
        subCopy="Hands-on sessions. Real tools. Real skills. Early bird spots are live — grab yours before the grid fills up."
        prompt="close%20up%20mechanical%20workshop%20tools%20gears%20wrenches%20on%20dark%20workbench%20dramatic%20side%20lighting%20sparks%20metal%20industrial%20atmosphere%20no%20logos%20no%20text"
        accent="circuit-blue"
      />
      <WorkshopsList />
      <Footer />
    </>
  );
}

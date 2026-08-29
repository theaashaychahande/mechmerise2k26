import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";
import TeamGrid from "@/components/team/TeamGrid";

export const metadata = {
  title: "Team · MECHMERISE 2K26",
  description:
    "Meet the faculty and student coordinators behind MECHMERISE 2K26.",
};

export default function TeamPage() {
  return (
    <>
      <SectionDivider
        kicker="PIT CREW · THE DRIVERS"
        title="OUR TEAM"
        subCopy="Faculty advisors. Student coordinators. The crew that makes the grid run."
        prompt="group%20of%20engineering%20students%20working%20together%20in%20workshop%20warm%20lighting%20collaborative%20atmosphere%20tools%20and%20projects%20on%20table%20no%20logos%20no%20text%20no%20faces"
        image="/images/team-bg.png"
        accent="racing-red"
      />
      <TeamGrid />
      <Footer />
    </>
  );
}

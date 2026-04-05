import ProfessionalCta from "./ProfessionalCta";
import ProfessionalHero from "./ProfessionalHero";
import ProfessionalSelectedWorks from "./ProfessionalSelectedWorks";
import ProfessionalToolkit from "./ProfessionalToolkit";
import Contact from "./Contact";
import Process from "./Process";

const ProfessionalLanding = () => {
  return (
    <>
      <ProfessionalHero />
      <ProfessionalToolkit />
      <ProfessionalSelectedWorks />
      <ProfessionalCta />
      <Process />
      <Contact />
    </>
  );
};

export default ProfessionalLanding;

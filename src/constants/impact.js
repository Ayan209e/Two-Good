import { OurPrograms } from "../pages/Impact/ImpactSections/Content/OurPrograms";
import { OurTheory } from "../pages/Impact/ImpactSections/Content/OurTheory";
import { OurApproach } from "../pages/Impact/ImpactSections/Content/OurApproach";
import { Testimonials } from "../pages/Impact/ImpactSections/Content/Testimonials";
import { GoodTeams } from "../pages/Impact/ImpactSections/Content/GoodTeams";
import { Donate } from "../pages/Impact/ImpactSections/Content/Donate";

export const impactSections = [
  {
    index: "01",
    title: "Our Programs",
    content: <OurPrograms />,
  },
  {
    index: "02",
    title: "Our Theory of Change",
    content: <OurTheory />,
  },
  {
    index: "03",
    title: "Our Approach",
    content: <OurApproach />,
  },
  {
    index: "04",
    title: "Testimonials",
    content: <Testimonials />,
  },
  {
    index: "05",
    title: "Good Teams corporate volunteering",
    content: <GoodTeams />,
  },
  {
    index: "06",
    title: "Donate",
    content: <Donate />,
  },
];

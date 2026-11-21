import { education, experience } from "@/data/experience";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline } from "./Timeline";

/** Work experience followed by education, both rendered by the same <Timeline />. */
export function Experience() {
  return (
    <Section
      id="experience"
      number="02"
      kicker="Work experience"
      title="Where I’ve been building."
    >
      <Timeline entries={experience} />
      <SectionTitle variant="sub">Education</SectionTitle>
      <Timeline entries={education} />
    </Section>
  );
}

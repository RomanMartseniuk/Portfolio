import { skillGroups } from "@/data/stack";
import { Section } from "@/components/ui/Section";
import { StackTabs } from "./StackTabs";

/** Skills grouped into three switchable categories. */
export function Stack() {
  return (
    <Section id="stack" number="03" kicker="Stack" title="What I build with." flushTop>
      <StackTabs groups={skillGroups} />
    </Section>
  );
}

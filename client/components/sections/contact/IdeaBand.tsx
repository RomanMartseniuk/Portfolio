import { idea } from "@/data/contact";
import { PlusGrid } from "@/components/decor/Decor";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./IdeaBand.module.css";

/** Centered call to action between Projects and Contact. */
export function IdeaBand() {
  return (
    <section className={styles.idea}>
      <PlusGrid />
      <Container>
        <Reveal as="h2">{idea.title}</Reveal>
        <Reveal as="p">{idea.text}</Reveal>
        {/* The reveal wraps the button instead of being on it, so it never fights the magnetic effect */}
        <Reveal className={styles.cta}>
          <Button href="#contact" magnetic>
            {idea.cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

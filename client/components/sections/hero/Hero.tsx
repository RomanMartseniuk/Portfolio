import { hero } from "@/data/hero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CodeSnippet, DotsGrid, Ring } from "@/components/decor/Decor";
import { CountUp } from "./CountUp";
import { HeroMotion } from "./HeroMotion";
import { Portrait } from "./Portrait";
import { Rotator } from "./Rotator";
import styles from "./Hero.module.css";

/** First screen: headline, rotating phrase, call to action, stats and portrait. */
export function Hero() {
  const [lineOne, lineTwo] = hero.headline;

  return (
    <section id="top" className={styles.hero}>
      <DotsGrid />
      <Ring size="lg" depth={40} />
      <Ring size="md" depth={70} />
      <CodeSnippet />

      <Container className={styles.grid}>
        <div>
          <span className={styles.status} data-hero="">
            <span className={styles.pulse} />
            {hero.status}
          </span>

          <p className={styles.hi} data-hero="">
            Hi, I’m <span className="accent">{hero.greetingName}</span>
          </p>

          {/* The visually hidden name makes the h1 read "Roman Martseniuk, Full stack developer" */}
          <h1 className={styles.h1}>
            <span className="vh">{hero.greetingName}, </span>
            <span className={styles.mask}>
              <span className={styles.grad} data-word="">{lineOne}</span>
            </span>
            <span className={styles.mask}>
              <span className={styles.grad} data-word="">{lineTwo}</span>
            </span>
          </h1>

          <p className={styles.rotLine} data-hero="">
            I build <Rotator phrases={hero.phrases} />
          </p>

          <p className={styles.lede} data-hero="">
            {hero.lede}
          </p>

          <div className={styles.cta} data-hero="">
            <Button href="#contact" magnetic>
              Say hello
            </Button>
            <Button href="#projects" variant="ghost" magnetic>
              See projects
            </Button>
          </div>

          <div className={styles.stats} data-hero="">
            {hero.stats.map((s) => (
              <div className={styles.stat} key={s.label}>
                <b>
                  {"text" in s ? (
                    s.text
                  ) : (
                    <>
                      <CountUp value={s.value} />
                      {s.suffix}
                    </>
                  )}
                </b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <Portrait />
      </Container>

      <HeroMotion />
    </section>
  );
}

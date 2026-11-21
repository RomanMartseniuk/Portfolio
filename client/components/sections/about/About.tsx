import Image from "next/image";
import { about } from "@/data/about";
import { Circuit } from "@/components/decor/Decor";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Tilt } from "@/components/ui/Tilt";
import styles from "./About.module.css";

/** About me: desk photo with tilt, three paragraphs, quick facts and social links. */
export function About() {
  const [intro, ...rest] = about.paragraphs;

  return (
    <Section
      id="about"
      number="01"
      kicker={about.kicker}
      title={about.title}
      background={<Circuit />}
      clip
    >
      <div className={styles.grid}>
        <Tilt as="figure" className={styles.desk} data-reveal="" data-cursor-hot="">
          <Image
            src={about.image.src}
            width={about.image.width}
            height={about.image.height}
            alt={about.image.alt}
            sizes="(min-width: 768px) 320px, 360px"
          />
          <figcaption className={`${styles.tag} cap`}>{about.image.caption}</figcaption>
        </Tilt>

        <div className={styles.copy}>
          <p className={styles.big} data-reveal="">{intro}</p>
          {rest.map((text) => (
            <p key={text.slice(0, 24)} data-reveal="">{text}</p>
          ))}

          <ul className={styles.facts} data-reveal="">
            {about.facts.map((f) => (
              <li key={f.label}>
                <span>{f.label}</span>
                <span>{f.value}</span>
              </li>
            ))}
          </ul>

          <SocialLinks className={styles.socials} data-reveal="" />
        </div>
      </div>
    </Section>
  );
}

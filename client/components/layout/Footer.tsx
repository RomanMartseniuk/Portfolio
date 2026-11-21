import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { CurrentYear } from "./CurrentYear";
import styles from "./Footer.module.css";

/** Site footer: socials, back to top link and copyright. */
export function Footer() {
  return (
    <footer className={styles.foot}>
      <Container className={styles.inner}>
        <SocialLinks />
        <a className={styles.top} href="#top">
          <Icon name="arrowUp" />
          Back to top
        </a>
        <p className="cap">
          © <CurrentYear /> {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

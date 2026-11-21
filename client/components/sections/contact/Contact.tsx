import { contact } from "@/data/contact";
import { Topo } from "@/components/decor/Decor";
import { Section } from "@/components/ui/Section";
import { ContactCard } from "./ContactCard";
import { ContactForm } from "./ContactForm";
import { CopyEmailButton } from "./CopyEmailButton";
import styles from "./Contact.module.css";

/** Contact details on the left, message form on the right. */
export function Contact() {
  return (
    <Section
      id="contact"
      number="05"
      kicker={contact.kicker}
      title={contact.title}
      background={<Topo />}
      clip
      bordered
    >
      <div className={styles.grid}>
        <div className={styles.cards}>
          {contact.email && (
            <ContactCard
              icon="mail"
              label="Email"
              value={contact.email}
              action={<CopyEmailButton text={contact.email} />}
            />
          )}
          <ContactCard icon="pin" label="Address" value={contact.address} />
          <ContactCard
            icon="phone"
            label="Phone"
            value={contact.phone.label}
            href={contact.phone.href}
          />
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}

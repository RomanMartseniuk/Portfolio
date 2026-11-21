"use client";

import { useState, type FocusEvent, type FormEvent } from "react";
import { siteConfig } from "@/lib/site";
import { validators, type FieldName } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { FormField } from "./FormField";
import styles from "./ContactForm.module.css";

type Errors = Record<FieldName, boolean>;
const noErrors: Errors = { name: false, email: false, message: false };

/**
 * Contact form with inline validation (on blur and on submit).
 * There is no backend yet: a valid form opens the visitor's mail app with the text filled in.
 * Later this can post to a Strapi endpoint instead; only `onSubmit` has to change.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>(noErrors);
  const [status, setStatus] = useState("");

  const validate = (name: FieldName, value: string) => {
    const ok = validators[name](value);
    setErrors((prev) => ({ ...prev, [name]: !ok }));
    return ok;
  };

  const onBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    validate(e.target.name as FieldName, e.target.value);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // Run every check (no short circuit) so all invalid fields get highlighted
    const results = [
      validate("name", name),
      validate("email", email),
      validate("message", message),
    ];
    if (!results.every(Boolean)) {
      setStatus("Check the highlighted fields and try again.");
      return;
    }

    if (!siteConfig.email) {
      setStatus("The contact email is not configured yet.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    setStatus(
      `Opening your mail app. If nothing opens, write to ${siteConfig.email}.`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className={styles.form} noValidate onSubmit={onSubmit} data-reveal="">
      <FormField
        name="name"
        label="Name"
        autoComplete="name"
        invalid={errors.name}
        onBlur={onBlur}
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        invalid={errors.email}
        onBlur={onBlur}
      />
      <FormField name="message" label="Message" multiline invalid={errors.message} onBlur={onBlur} />

      <Button type="submit" magnetic>
        Send message <Icon name="up" />
      </Button>

      {/* Live region: screen readers announce the status text when it changes */}
      <p className={styles.status} role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

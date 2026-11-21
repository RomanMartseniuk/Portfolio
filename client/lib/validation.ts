/** Contact form rules. Kept separate so they are easy to test and to reuse with a real backend later. */

export type FieldName = "name" | "email" | "message";

export const validators: Record<FieldName, (value: string) => boolean> = {
  name: (v) => v.trim().length > 1,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  message: (v) => v.trim().length > 4,
};

export const errorMessages: Record<FieldName, string> = {
  name: "Enter your name.",
  email: "Enter an email address like name@example.com.",
  message: "Write a short message.",
};

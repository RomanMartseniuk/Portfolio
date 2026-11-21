import type { ChangeEvent, FocusEvent } from "react";
import type { FieldName } from "@/lib/validation";
import { errorMessages } from "@/lib/validation";
import styles from "./FormField.module.css";

type FormFieldProps = {
  name: FieldName;
  label: string;
  /** Renders a <textarea> instead of an <input> */
  multiline?: boolean;
  type?: "text" | "email";
  autoComplete?: string;
  invalid: boolean;
  onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

/**
 * Input with a floating label and its own error message.
 * The label floats with pure CSS: placeholder=" " makes :placeholder-shown tell us if the field is empty.
 */
export function FormField({
  name,
  label,
  multiline,
  type = "text",
  autoComplete,
  invalid,
  onBlur,
  onChange,
}: FormFieldProps) {
  const id = `f-${name}`;
  const errorId = `e-${name}`;
  const shared = {
    id,
    name,
    placeholder: " ",
    required: true,
    "aria-invalid": invalid,
    "aria-describedby": invalid ? errorId : undefined,
    onBlur,
    onChange,
  };

  return (
    <div className={`${styles.field} ${invalid ? styles.bad : ""}`}>
      {multiline ? (
        <textarea {...shared} />
      ) : (
        <input {...shared} type={type} autoComplete={autoComplete} />
      )}
      <label htmlFor={id}>{label}</label>
      <p className={styles.err} id={errorId}>
        {errorMessages[name]}
      </p>
    </div>
  );
}

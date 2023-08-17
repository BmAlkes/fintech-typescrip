import React from "react";
type IDateInput = React.ComponentProps<"input"> & {
  label: string;
};
const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  fontSize: "1rem",
  color: "var(--color-1)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  fontSize: "1rem",
  color: "var(--color-1)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
};

export const InputData = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyle}
        type="date"
        id={label}
        name={label}
        {...props}
      />
    </div>
  );
};

import { TextField } from "@material-ui/core";

export const Input = ({ label, placeholder, variant, value, type, onChange }) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      variant={variant}
      value={value}
      type={type}
      onChange={onChange}
      style={{ marginBottom: "20px" }}
    />
  );
};

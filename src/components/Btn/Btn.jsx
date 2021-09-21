import { Button } from "@material-ui/core";

export const Btn = ({ onClick, label, variant, color }) => {
  return (
    <Button variant={variant} color={color} size="small" onClick={onClick}>
      {label}
    </Button>
  );
};

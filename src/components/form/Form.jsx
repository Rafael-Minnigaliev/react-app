import "./Form.scss";
import { TextField, Button, Icon } from "@material-ui/core";
import { useEffect, useRef } from "react";

export const Form = ({ handleClick, handleMessageChange, message }) => {
  const ref = useRef();

  useEffect(() => {
    ref?.current?.focus();
  }, []);

  return (
    <div className="Form">
      <TextField
        id="outlined-basic"
        multiline
        fullWidth
        maxRows={2}
        minRows={2}
        label="Message"
        placeholder="Enter a message"
        variant="outlined"
        inputRef={ref}
        value={message}
        onChange={handleMessageChange}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "10px" }}
        endIcon={<Icon>send</Icon>}
        onClick={handleClick}
      >
        SEND
      </Button>
    </div>
  );
};

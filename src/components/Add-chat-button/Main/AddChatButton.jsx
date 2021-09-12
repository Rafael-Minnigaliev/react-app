import { Button, Dialog, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import { TextField } from "@material-ui/core";

export const AddChatButton = ({
  handleClickOpen,
  open,
  handleClose,
  newChat,
  handleChatNameChange,
  handleAddChat,
}) => {
  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add a chat
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>Enter the chat name</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Chat"
            type="text"
            fullWidth
            value={newChat}
            onChange={handleChatNameChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddChat} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

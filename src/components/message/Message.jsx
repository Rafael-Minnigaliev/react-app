import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginBottom: "10px",
      color: "#fff",
      wordBreak: "break-all",
      display: "block",
      backgroundColor: theme.palette.primary.main,
      padding: "3px 15px 6px",
      fontSize: "14px",
      borderRadius: "14px",
      // opacity: 0.5,
    },
  })
);

export const Message = ({ chatList, chatId }) => {
  const classes = useStyles();
  if (!chatList[chatId]) {
    return null;
  } else {
    return chatList[chatId].messages.map((id) => (
      <p key={id} className={classes.root}>
        {id.message}
      </p>
    ));
  }
};

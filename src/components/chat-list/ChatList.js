import { ListItem, ListItemText, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        color: theme.palette.secondary.main
    }
}));

export const ChatList = ({ chatList }) => {
    const classes = useStyles();

    return (chatList.map((el) => {
        return <ListItem divider button key={el.chatId} >
            <ListItemText className={classes.root} primary={el.name} />
        </ListItem>
    }))
}
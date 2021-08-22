import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        marginBottom: '10px',
        color: '#fff',
        wordBreak: 'break-all',
        display: 'block',
        backgroundColor: theme.palette.primary.main,
        padding: '3px 15px 6px',
        fontSize: '14px',
        borderRadius: '14px'
    }
}));

export const Message = ({ messageList }) => {
    const classes = useStyles();

    return (
        messageList.map((el) => {
            return <p key={el.messageId} className={classes.root}>{el.message}</p>
        })
    );
}
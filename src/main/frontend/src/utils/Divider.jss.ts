import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    border: {
        borderBottom: '1px solid lightgray',
        flexGrow: 1
    },
    content: {
        padding: `0 ${theme.spacing(1)}px 0 ${theme.spacing(1)}px`,
        color: theme.palette.primary.main
    }
}))

export default styles
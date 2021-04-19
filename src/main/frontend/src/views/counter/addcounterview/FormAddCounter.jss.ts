import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
    button: {
        '& > *': {
            margin: theme.spacing(1)
        },
        display: 'flex',
        justifyContent: 'flex-end'
    },
    inputFields: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        alignItems: 'center'
    },
    divider: {
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    paragraph: {
        borderLeft: '1px solid grey',
        paddingLeft: theme.spacing(4)
    }
}))

export default styles
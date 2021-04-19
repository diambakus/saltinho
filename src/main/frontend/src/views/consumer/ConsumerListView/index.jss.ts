import { makeStyles, Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.grey[300],
        minHeight: '100%',
        padding: theme.spacing(3),
    },
    topBox: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(3),
    },
    container: {
        marginTop: theme.spacing(0)
    },
    addButton: {
        marginRight: theme.spacing(2)
    }
}))
export default styles
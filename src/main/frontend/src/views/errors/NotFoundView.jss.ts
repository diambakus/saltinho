import { makeStyles, Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        height: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    image: {
        marginTop: 50,
        display: 'inline-block',
        maxWidth: '100%',
        width: 560
    }
}))

export default styles
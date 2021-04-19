import { makeStyles, Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}))

export default styles
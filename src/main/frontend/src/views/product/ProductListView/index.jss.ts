import { makeStyles, Theme } from '@material-ui/core'

const styles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.grey[300],
        minHeight: '100%',
        padding: theme.spacing(3),
    },
    productCard: {
        height: '100%'
    }
}))

export default styles
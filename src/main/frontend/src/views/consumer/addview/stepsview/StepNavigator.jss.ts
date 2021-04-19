import { makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) => ({
    navigator: {
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        bottom: -1,
        transition: 'box-shadow .5s, padding .5s, background .5s',
        borderTop: '0px solid rgb(189, 189, 189)',
        padding: '10px 0',
        zIndex: 1,
        '&[stuck]': {
            backgroundColor: 'rgb(250, 250, 250)',
            borderTop: '1px solid rgb(189, 189, 189)',
            boxShadow: '-0.1em -0.1em 0.5em rgb(189, 189, 189)'
        }
    },
    buttons: {
        textAlign: 'center',
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    saveButton: {
        marginLeft: theme.spacing(9)
    }
}))
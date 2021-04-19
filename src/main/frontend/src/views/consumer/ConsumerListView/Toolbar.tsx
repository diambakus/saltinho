import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import styles from './Toolbar.jss'
import { NavLink as RouterLink } from 'react-router-dom'

const Toolbar = () => {
  const classes = styles()

  return (
    <div
      className={clsx(classes.root)}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >

      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Buscar consumidor"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
}

export default Toolbar

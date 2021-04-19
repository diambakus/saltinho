import React from 'react'
import clsx from 'clsx'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import styles from './TotalCustomers.jss'

const TotalCustomers = (props: any) => {
  const classes = styles()
  const { ...rest } = props
  return (
    <Card
      className={clsx(classes.root)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              TOTAL CUSTOMERS
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              1,600
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <ArrowUpwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            16%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since last month
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
export default TotalCustomers

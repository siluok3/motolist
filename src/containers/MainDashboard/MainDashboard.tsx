import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ItemsList from '../../components/ItemsList/ItemsList';
import AddItem from '../../UI/AddItem/AddItem';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    justifyContent: 'center'
  },
}));

const MainDashboard = () => {
  const classes = useStyles({});

  return (
    <Grid container className={classes.root}>
      <Typography align='center' variant="h4" color="primary"> Motorcycles List</Typography>
      <ItemsList />
      <AddItem />
    </Grid>
  )
}

export default MainDashboard;
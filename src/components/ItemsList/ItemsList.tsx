import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { ItemList } from './ItemsList.types';

//TODO to be fetched from a db
const motorcycles: ItemList[] = [
    {id: 'dasdas', type: 'Royal Enfield', model: 'Interceptor', cc: 648, horsepower: 47, price: 6300},
    {id: 'dasddsdas', type: 'Moto Guzzi', model: 'VIII', cc: 744, horsepower: 52, price: 9359},
    {id: 'dasddsadasas', type: 'Malaguti', model: 'Dune', cc: 125, horsepower: 15, price: 3500},
]

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(5),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

const ItemsList = () => {
  const classes = useStyles({});

  return (
    <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell><strong>Brand</strong></TableCell>
          <TableCell align="right"><strong>Model</strong></TableCell>
          <TableCell align="right"><strong>CC</strong></TableCell>
          <TableCell align="right"><strong>Horsepower</strong></TableCell>
          <TableCell align="right"><strong>Price (€)</strong></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {motorcycles.map(motorcycle => (
          <TableRow key={motorcycle.id}>
            <TableCell component="th" scope="row">
              {motorcycle.type}
            </TableCell>
            <TableCell align="right">{motorcycle.model}</TableCell>
            <TableCell align="right">{motorcycle.cc}</TableCell>
            <TableCell align="right">{motorcycle.horsepower}</TableCell>
            <TableCell align="right">{motorcycle.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
  )
};

export default ItemsList;
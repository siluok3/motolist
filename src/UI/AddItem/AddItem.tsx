import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import CustomTextField from './ItemTextField';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const AddItem = (): React.ReactElement => {
  const classes = useStyles({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add new motorcycle
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new motorcycle data</DialogTitle>
        <DialogContent>
          <CustomTextField label="Brand" type="text" />
          <CustomTextField label="Model" type="text" />
          <CustomTextField label="CC" type="number" />
          <CustomTextField label="Horsepower" type="number" />
          <CustomTextField label="Price (€)" type="number" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add 
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default AddItem;
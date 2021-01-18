import React from 'react';

import TextField from '@material-ui/core/TextField';

type ItemTextFieldProps = {
  label: string,
  type: string,
};

const itemTextField: React.FC<ItemTextFieldProps> = ({label, type}): React.ReactElement => (
  <TextField
    autoFocus
    margin="dense"
    id={label.toLocaleLowerCase()}
    label={label}
    type={type}
    fullWidth
  />
);

export default itemTextField;
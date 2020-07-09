import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<span>
  <TextField
          id="standard-full-width"
          label=":)"
          style={{ margin: 8 }}
          placeholder="Новое задание"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
  </span>);

export default InputItem;

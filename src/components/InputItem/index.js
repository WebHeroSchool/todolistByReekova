import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';

const InputItem = () => (<span className={styles.input}>
  <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Новое задание"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="outlined" color="secondary">
          Добавить
        </Button>
  </span>);

export default InputItem;

import React from 'react';
import Proptypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';

class InputItem extends React.Component {
  state = {
    inputValue: '',
    helperText: '',
    error: false
  };

  onButtonClick = () => {
    if (this.state.inputValue !== '' ) {
      this.setState({
      inputValue: ''
    });
    this.props.onClickAdd(this.state.inputValue.toUpperCase());
  } else {
    this.setState({
      helperText: "Обязательное поле для заполнения",
      error: true
    })
  }

}

  render() {
    const { onClickAdd } = this.props;

    return (<span className={styles.input}>
      <TextField
              id="standard-full-width"
              style={{ margin: 8 }}
              placeholder="Новое задание"
              helperText=''
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              value={this.state.inputValue.toUpperCase()}
              onChange={event => this.setState({
                inputValue: event.target.value,
                helperText: ''
               })}
               helperText={this.state.helperText}
               error={this.state.error}
            />
            <Button
            variant="outlined"
            color="secondary"
            onClick={this.onButtonClick}>
              Добавить
            </Button>
      </span>);
  }
}

InputItem.propTypes = {
  onClickAdd: Proptypes.func.isRequired
}

export default InputItem;

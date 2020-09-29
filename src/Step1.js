import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, MenuItem, TextField } from '@material-ui/core';

const currencies = [
  {
    value: '1',
    label: 'breakfast',
  },
  {
    value: '2',
    label: 'lunch',
  },
  {
    value: '3',
    label: 'dinner',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    marginTop: '50px'
  }
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
  const [people, setPepple] = React.useState('')

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangePeople = (event) =>{
    setPepple(event.target.value)
  }
  const handleClick = (event) => {{
    let meal = ""
    currencies.map((e) => {
      if(e.value == currency){
        meal = e.label
      }
    })
    console.log('OK')
    props.history.push({
      pathname: `/react-deploy/Step2/${meal}`,
      state : {People: people, meal: meal}
    })
  }}

  return (
    <Container>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <p>Please select a meal</p>
          <TextField
            id="outlined-basic"
            select
            value={currency}
            onChange={handleChange}
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <p>Please Enter Number of People</p>
          <TextField
            id="outlined-basic"
            type="number"
            variant="outlined"
            value={people}
            onChange={handleChangePeople}
          >
          </TextField>
        </div>
      </form>
      <Button
        variant="contained"
        onClick={handleClick}
        color="primary"
        className={classes.button}
      >
        Next
      </Button>
    </Container>
  );
}

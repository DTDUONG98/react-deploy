import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, MenuItem, TextField } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    marginTop: '50px',
    marginLeft: '50px'
  },
  review: {
      padding: '50px'
  }
}));

export default function MultilineTextFields(props) {
  const classes = useStyles();

  const handleClickSubmit = (event) => {
      alert('Bạn đã đặt hàng thành công. Cảm ơn bạn đã Ủng hộ chúng tôi!')
  }
  const handleClickBack = (event) => {{
    props.history.push({
        pathname: `/react-deploy/Step3/${props.location.state.restaurant}`,
        state : {
            People: props.location.state.People,
            meal: props.location.state.meal,
            restaurant: props.location.state.restaurant
        }
      })
  }}
  const {People, meal, dish, restaurant, servings} = props.location.state
  console.log(People, meal, dish, restaurant, servings)

  return (
    <Container>
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.review}>
            <span>Meal : </span> {meal} <br/><br/>
            <span>No of People : </span> {People} <br/><br/>
            <span>Restaurant : </span> {restaurant} <br/><br/>
            <span>Dish : </span> {dish} -{servings}  <br/>
        </div>
      </form>
      <Button
        variant="contained"
        onClick={handleClickBack}
        color="primary"
        className={classes.button}
      >
        Previous
      </Button>
      <Button
        variant="contained"
        onClick={handleClickSubmit}
        color="primary"
        className={classes.button}
      >
        Submit
      </Button>
    </Container>
  );
}

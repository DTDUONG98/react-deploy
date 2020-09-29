import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, MenuItem, TextField, IconButton } from '@material-ui/core';
import dishes from './data/dishes.json'
import AddIcon from '@material-ui/icons/AddCircleOutline'

const data = dishes.dishes

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
    }
}));

export default function MultilineTextFields(props) {
    const classes = useStyles();
    const [dish, setDish] = React.useState('EUR');
    const [servings, setServings] = React.useState('1')

    const DataDish = []
    data.map((element) => {
        if (element.restaurant == props.location.state.restaurant) {
            DataDish.push(element)
        }
    })
    // set Dish
    const handleChange = (event) => {
        setDish(event.target.value);
    };
    // set number of servings
    const handleChangeServings = (event) => {
        setServings(event.target.value)
    }
    // changePage
    const handleClickNext = (event) => {
        {
            props.history.push({
                pathname: `/react-deploy/Step4/review`,
                state: {
                    People: props.location.state.People,
                    meal: props.location.state.meal,
                    restaurant: props.location.state.restaurant,
                    dish: dish,
                    servings: servings
                }
            })
        }
    }
    const handleClickBack = (event) => {
        {
            props.history.push({
                pathname: `/react-deploy/Step2/${props.location.state.meal}`,
                state: {
                    meal: props.location.state.meal
                }
            })
        }
    }
    const handleAddDish = (event) => {
        console.log(event.currentTarget.spacingvalue)
    }

    return (
        <Container>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <p>Please select a Dish</p>
                    <TextField
                        id="outlined-basic"
                        select
                        value={dish}
                        onChange={handleChange}
                        variant="outlined"
                    >
                        {DataDish.map((element) => (
                            <MenuItem key={element.id} value={element.name}>
                                {element.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    <IconButton aria-label="add">
                        <AddIcon onClick={handleAddDish} value="2" />
                    </IconButton>
                    <p>Please Enter no. of servings</p>
                    <TextField
                        id="outlined-basic"
                        type="number"
                        variant="outlined"
                        value={servings}
                        onChange={handleChangeServings}
                    >
                    </TextField>
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
                onClick={handleClickNext}
                color="primary"
                className={classes.button}
            >
                Next
      </Button>
        </Container>
    );
}

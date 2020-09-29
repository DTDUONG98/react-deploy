import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, MenuItem, TextField } from '@material-ui/core';
import dishes from './data/dishes.json'

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
    const [restaurant, setRestaurant] = React.useState('EUR');

    const DataRestaurant = []
    data.map(element => {
        for (let value of element.availableMeals) {
            if (props.location.state.meal == value) {
                DataRestaurant.push(element)
            }
        }
    })
    console.log(DataRestaurant)

    const handleChange = (event) => {
        setRestaurant(event.target.value);
    };
    const handleClickNext = (event) => {{
        props.history.push({
            pathname: `/react-deploy/Step3/${restaurant}`,
            state : {
                People: props.location.state.People,
                meal: props.location.state.meal,
                restaurant: restaurant
            }
          })
    }}
    const handleClickBack = (event) => {
        {
            console.log('Back')
            props.history.push('/react-deploy/')
        }
    }

    return (
        <Container>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <p>Please select a Restaurant</p>
                    <TextField
                        id="outlined-basic"
                        select
                        value={restaurant}
                        onChange={handleChange}
                        variant="outlined"
                    >
                        {DataRestaurant.map((element) => (
                            <MenuItem key={element.id} value={element.restaurant}>
                                {element.restaurant}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </form>
            <Button
                variant="contained"
                onClick={handleClickBack}
                color="primary"
                className={classes.button}
            >
                Previouss
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

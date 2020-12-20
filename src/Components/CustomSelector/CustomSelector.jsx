import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {getCartItemsFromLS} from "../../Data/CartReducer";

const currencies = [
    {
        value: 'USD',
        label: 'USD $',
    },
    {
        value: 'EUR',
        label: 'EUR €',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
}));

export default function CustomSelector(props) {
    const classes = useStyles();

    const handleChange = (event) => {
        props.SetCurrency(event.target.value)
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="currency"
                    disabled={getCartItemsFromLS() && getCartItemsFromLS().length > 0}
                    value={props.currency}
                    onChange={handleChange}
                    variant="outlined"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
        </form>
    )
}
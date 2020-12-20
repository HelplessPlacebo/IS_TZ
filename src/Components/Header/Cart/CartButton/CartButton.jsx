import React from "react"
import Grid from "@material-ui/core/Grid"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge';
import {makeStyles, withStyles} from "@material-ui/core/styles"
import {getCartItemsFromLS} from "../../../../Data/CartReducer";

const useStyles = makeStyles((theme) => ({
    CartContainer: {
        margin: theme.spacing(1),
        color: "#e9e9e9",
        backgroundColor: "#ef6104",
        minWidth: "6rem",
        minHeight: "3rem",
        borderRadius: "0.7rem",
        fontSize: 20,
        fontWeight: "500",
        cursor: "pointer",
        zIndex : 20
    },
}))
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -7,
        top: 19,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 3px',
    },
}))(Badge);

const CartButton = (props) => {
    const classes = useStyles()
    return <Grid className={classes.CartContainer} container direction="row" justify="center" alignItems="center">
        <Grid style={{paddingLeft: 3}} item>
            Cart
        </Grid>
        <Grid item>
            <StyledBadge badgeContent={getCartItemsFromLS() && getCartItemsFromLS().length}
                // badgeContent={props.itemsCount && props.itemsCount}
                         style={{color: "#eeeeee"}}>
                <ShoppingCartIcon/>
            </StyledBadge>
        </Grid>
    </Grid>
}

export default CartButton

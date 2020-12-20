import React from "react"
import Empty from "../../../../../assets/imgs/emptycart.png"
import Grid from "@material-ui/core/Grid"

const EmptyCart=(props)=>{
    return <Grid style={{padding : "1rem"}} container direction="column" alignItems="center" justify="center">
        <Grid  item>
            <img style={{maxWidth : "14rem",maxHeight : "14rem",paddingTop:"1rem"}}
                 src={Empty} alt="cart-empty-img"/>
        </Grid>
        <Grid style={{fontSize : "1.1rem",fontWeight : 500,paddingTop:"1.5rem"}} item>
            Add some items and come back here to checkout
        </Grid>
    </Grid>
}
export default EmptyCart
import React from "react"
import Grid from "@material-ui/core/Grid";

const OrderItem = (props) => {
    return <div  className="OrderItemContainer">

            <Grid  style={{padding:"0.5rem",borderWidth : 1,borderStyle:"solid",borderColor:"#222",borderRadius:5}}
                   container direction="row">

                <Grid item xs={3}>
                    <img style={{width:"6rem",height:"6rem"}} src={props.imgUrl} alt="www"/>
                </Grid>

                <Grid  item xs={7}>
                        <Grid item>
                            {props.name}
                        </Grid>
                </Grid>

                <Grid item xs={1}>
                    count : {props.count}
                </Grid>

                <Grid  item xs={1}>
                    cost : {props.price[props.currency] }
                </Grid>
            </Grid>

        </div>
}

export default OrderItem
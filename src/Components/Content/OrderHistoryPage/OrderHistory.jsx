import React from "react"
import OrderItem from "./OrederItem";
import Grid from "@material-ui/core/Grid";

const OrderHistory = (props) => {
    return <Grid style={{paddingLeft: "10%", paddingRight: "10%"}} className="OrderHistoryContainer">
        {
            props.OrdersHistory.map(Order => {
                return <>
                    <Grid key={Order.article} container  style={{paddingTop:"1rem"}}
                               direction="row" justify="flex-start" alignItems="flex-start">

                    <Grid item xs={1}>
                        {Order.date}
                    </Grid>

                    <Grid item xs={7}>
                        {Order.status}
                    </Grid>

                    <Grid item xs={4}>
                        {props.article}
                    </Grid>

                </Grid>
                {
                    Order.Items.map(item=>{
                        return <div key={item.id} style={{paddingBottom : "1rem"}}>
                            <OrderItem   {...item} currency={props.currency}/>
                        </div>
                    })
                }
                </>

            })
        }
        {/*{*/}
        {/*    props.OrdersHistory.map(Order=>{*/}
        {/*        return <OrderItem {...Order} />*/}
        {/*    })*/}
        {/*}*/}
    </Grid>
}

export default OrderHistory
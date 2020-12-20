import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide'
import Link from "@material-ui/core/Link"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const  ModalInfo=(props)=> {
    const onClose=()=>{
        props.close()
        localStorage.clear()
    }
    return (
        <div>
            <Dialog
                open={props.ModalMenuISOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.close}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Success"}</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{color : "#222", fontSize : "1.125rem"}} id="alert-dialog-slide-description">
                        We are already preparing your order, check your phone for more details
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link color="inherit" href="/home" underline="none">
                        <Button onClick={onClose} color="primary">
                            close
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default ModalInfo
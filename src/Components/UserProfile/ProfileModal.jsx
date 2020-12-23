import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import {reduxForm} from "redux-form";
import ProfileModalForm from "./ProfileModalForm";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProfileModal = (props)=> {
    const handleSubmit = (formData) => {
        props.close()
        props.SetUserInfo(formData)
    }
    return (
        <div>
            <Dialog
                open={props.isOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.close}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Profile settings"}</DialogTitle>
                <DialogContent>
                <ProfileModalFormRedux onSubmit={handleSubmit} close={props.close}
                                       initialValues={JSON.parse(localStorage.getItem("isAuth")) && props.UserInfo}/>
                </DialogContent>
            </Dialog>
        </div>
    );
}
const ProfileModalFormRedux = reduxForm({form: 'ProfileModalForm1'})(ProfileModalForm)
export default ProfileModal
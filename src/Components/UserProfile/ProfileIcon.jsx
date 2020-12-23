import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Avatar from "@material-ui/core/Avatar";
import TestAvatar from "../../assets/imgs/TestAvatar.jpg"
import {NavLink} from "react-router-dom";

const ProfileIcon=(props)=> {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const onLogOut=()=>{
        localStorage.setItem("isAuth","false")
        props.logOut()
        setAnchorEl(null);
        props.history.push("/Home")
    }
    const OpenProfileModal=()=>{
        props.OpenProfileModal()
        setAnchorEl(null);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Avatar style={{cursor:"pointer"}}  alt="UserAvatar" src={TestAvatar} onClick={handleClick}/>
            <Menu
                id="user-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={OpenProfileModal}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>
                   <NavLink style={{textDecoration: "none",color:"rgba(34,34,34,0.93)"}} to="OrdersHistory">
                       Order history
                   </NavLink>
                </MenuItem>
                <MenuItem onClick={onLogOut}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
export default ProfileIcon
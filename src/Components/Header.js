import React from "react";
import {useNavigate} from 'react-router-dom';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';

export default function Header() {
    const Navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear('token');
        Navigate('/');
    }

    return <header>
        <h1><TipsAndUpdatesIcon />Keeper</h1>
        <Tooltip title="Logout" placement="left-start">
            <div onClick={handleLogOut}><LogoutIcon /></div>
        </Tooltip>
    </header>
}
import React from 'react';
import '../global.scss';
import settingsIcon from '../../assets/icons/settings.png';
import { Link } from 'react-router-dom';

function SettingsButton() {
    return (
        <Link className="calBtn orange" to="/settings">
            <img className="icon" src={settingsIcon} alt="S"></img>
        </Link>
    );
}

export default SettingsButton;

import React from 'react';
import '../global.scss';
import settingsIcon from '../../assets/icons/settings.png';
import MyLink from '../MyLink/MyLink.tsx';

function SettingsButton() {
    return (
        <MyLink orange={true} to="/settings">
            <img className="icon" src={settingsIcon} alt="S"></img>
        </MyLink>
    );
}

export default SettingsButton;

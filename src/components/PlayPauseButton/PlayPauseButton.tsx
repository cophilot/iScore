import React from 'react';
import '../global.scss';
import playIcon from '../../assets/icons/play.png';
import pauseIcon from '../../assets/icons/pause.png';

import { usePlaying, useTogglePlaying } from '../../providers/TimeProvider.tsx';

function PlayPauseButton() {
    const playing = usePlaying();
    const togglePlaying = useTogglePlaying();

    return (
        <button className="calBtn orange" onClick={togglePlaying}>
            <img
                className="icon"
                src={playing ? pauseIcon : playIcon}
                alt="P"
            ></img>
        </button>
    );
}

export default PlayPauseButton;

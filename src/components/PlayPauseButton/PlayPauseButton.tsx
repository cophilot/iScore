import React, { useState } from 'react';
import '../global.scss';
import playIcon from '../../assets/icons/play.png';
import pauseIcon from '../../assets/icons/pause.png';

function PlayPauseButton() {
    const [playing, setPlaying] = useState(false);

    return (
        <button className="calBtn orange" onClick={() => setPlaying(!playing)}>
            <img
                className="icon"
                src={playing ? pauseIcon : playIcon}
                alt="P"></img>
        </button>
    );
}

export default PlayPauseButton;

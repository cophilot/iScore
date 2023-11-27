import React from 'react';
import '../global.scss';
import { usePlayers } from '../../providers/PlayerProvider.tsx';
import DoubleBtn from '../DoubleBtn/DoubleBtn.tsx';
import { Link } from 'react-router-dom';
import { useGetCurrentRound } from '../../providers/PlayerProvider.tsx';
import { useGetTimeAsString } from '../../providers/TimeProvider.tsx';
import './Scoreboard.scss';

function Scoreboard() {
    const btnWidth = window.innerWidth * 0.9;
    const marginLeft = window.innerWidth * 0.05;

    const players = usePlayers().sort((a, b) => b.score - a.score);

    const time = useGetTimeAsString();

    const getRound = useGetCurrentRound();

    return (
        <>
            <div className="scoreboardBox">
                <div className="display">
                    <div className="displayText">Scoreboard</div>
                </div>
                <p>
                    <i>{'Time: ' + time()}</i>
                </p>
                <p>
                    <i>{'Round: ' + getRound()}</i>
                </p>
                {players.map((player, index) => (
                    <div
                        className="player"
                        key={player.name}
                        style={{ marginLeft: marginLeft }}
                    >
                        <DoubleBtn
                            onClick={() => {}}
                            btnWidth={btnWidth}
                            middleText={true}
                        >
                            {index +
                                1 +
                                '. ' +
                                player.name +
                                ': ' +
                                player.score}
                        </DoubleBtn>
                    </div>
                ))}
                <div style={{ marginLeft: marginLeft }}>
                    <Link to="/">
                        <DoubleBtn
                            onClick={() => {}}
                            btnWidth={btnWidth}
                            middleText={true}
                            orange={true}
                        >
                            Back
                        </DoubleBtn>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Scoreboard;

/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import '../global.scss';
import DoubleBtn from '../DoubleBtn/DoubleBtn.tsx';
import PlayPauseButton from '../PlayPauseButton/PlayPauseButton.tsx';
import scoreIcon from '../../assets/icons/score.png';
import trophyIcon from '../../assets/icons/trophy.png';
import pbIcon from '../../assets/icons/pb.png';
import SettingsButton from '../SettingsButton/SettingsButton.tsx';
import PlayerBar from '../PlayerBar/PlayerBar.tsx';
import PlayerPage from '../../utils/PlayerPage.ts';
import {
    usePlayers,
    useRemovePlayer,
} from '../../providers/PlayerProvider.tsx';
import MyLink from '../MyLink/MyLink.tsx';

function PlayerOverview() {
    const [playerPages, setPlayerPages] = useState<PlayerPage[]>([
        new PlayerPage(),
    ]);
    const [pageIndex, setPageIndex] = useState(0);
    const [selectedPlayer, setSelectedPlayer] = useState('Players');

    const players = usePlayers();

    const removePlayer = useRemovePlayer();

    const initPlayerPages = () => {
        let newPlayerPages: PlayerPage[] = [];
        let currentPage = new PlayerPage();
        for (let player of players) {
            if (!currentPage.addPlayer(player)) {
                newPlayerPages.push(currentPage);
                currentPage = new PlayerPage();
                currentPage.addPlayer(player);
            }
        }
        if (!currentPage.isEmpty() || newPlayerPages.length === 0) {
            newPlayerPages.push(currentPage);
        }

        if (pageIndex >= newPlayerPages.length) {
            setPageIndex(newPlayerPages.length - 1);
        }
        setPlayerPages(newPlayerPages);
    };

    useEffect(initPlayerPages, [players, pageIndex]);

    const getPlayerName = (x: number, y: number) => {
        let player = playerPages[pageIndex].getPlayer(x, y);
        if (player) {
            return player.name;
        }
        return ' ';
    };

    const onPlayerClick = (x: number, y: number) => {
        const name = getPlayerName(x, y);
        if (name !== ' ') {
            setSelectedPlayer(name);
        }
    };

    const getPlayerColor = (x: number, y: number) => {
        let player = playerPages[pageIndex].getPlayer(x, y);
        if (player) {
            return player.color;
        }
        return '#333333';
    };

    return (
        <div>
            <PlayerBar emptyText="No players yet. Click the plus icon to add a player."></PlayerBar>

            <div className="container">
                <div className="display">
                    <div className="displayText">{selectedPlayer}</div>
                </div>
                <div className="row">
                    <button
                        className="calBtn lightGrey first"
                        onClick={() => {}}
                    >
                        C
                    </button>
                    <a
                        className="calBtn lightGrey"
                        href="https://philipp-bonin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className="icon" src={pbIcon} alt="PB"></img>
                    </a>
                    <MyLink lightGrey={true} to="/scoreboard">
                        <img className="icon" src={trophyIcon} alt="SB"></img>
                    </MyLink>
                    <SettingsButton></SettingsButton>
                </div>
                <div className="row">
                    <button
                        className={
                            'calBtn grey first ' +
                            (selectedPlayer == getPlayerName(0, 0)
                                ? 'circled'
                                : '')
                        }
                        onClick={() => {
                            onPlayerClick(0, 0);
                        }}
                        style={{ backgroundColor: getPlayerColor(0, 0) }}
                    >
                        {getPlayerName(0, 0)[0]}
                    </button>
                    <button
                        className={
                            'calBtn grey ' +
                            (selectedPlayer == getPlayerName(0, 1)
                                ? 'circled'
                                : '')
                        }
                        onClick={() => {
                            onPlayerClick(0, 1);
                        }}
                        style={{ backgroundColor: getPlayerColor(0, 1) }}
                    >
                        {getPlayerName(0, 1)[0]}
                    </button>
                    <button
                        className={
                            'calBtn grey ' +
                            (selectedPlayer == getPlayerName(0, 2)
                                ? 'circled'
                                : '')
                        }
                        onClick={() => {
                            onPlayerClick(0, 2);
                        }}
                        style={{ backgroundColor: getPlayerColor(0, 2) }}
                    >
                        {getPlayerName(0, 2)[0]}
                    </button>
                    <PlayPauseButton></PlayPauseButton>
                </div>
                <div className="row">
                    <button
                        className={
                            'calBtn grey first ' +
                            (selectedPlayer == getPlayerName(1, 0)
                                ? 'circled'
                                : '')
                        }
                        onClick={() => {
                            onPlayerClick(1, 0);
                        }}
                        style={{ backgroundColor: getPlayerColor(1, 0) }}
                    >
                        {getPlayerName(1, 0)[0]}
                    </button>
                    <button
                        className={
                            'calBtn grey ' +
                            (selectedPlayer == getPlayerName(1, 1)
                                ? 'circled'
                                : '')
                        }
                        onClick={() => {
                            onPlayerClick(1, 1);
                        }}
                        style={{ backgroundColor: getPlayerColor(1, 1) }}
                    >
                        {getPlayerName(1, 1)[0]}
                    </button>
                    <button
                        className={
                            'calBtn grey ' +
                            (selectedPlayer == getPlayerName(1, 2)
                                ? 'circled'
                                : '')
                        }
                        onClick={() => {
                            onPlayerClick(1, 2);
                        }}
                        style={{ backgroundColor: getPlayerColor(1, 2) }}
                    >
                        {getPlayerName(1, 2)[0]}
                    </button>
                    <button
                        className={'calBtn orange'}
                        onClick={() => {
                            if (selectedPlayer !== 'Players') {
                                removePlayer(selectedPlayer);
                                setSelectedPlayer('Players');
                                initPlayerPages();
                            }
                        }}
                    >
                        -
                    </button>
                </div>
                <div className="row">
                    <button
                        className={
                            'calBtn grey first' +
                            (selectedPlayer == getPlayerName(2, 0)
                                ? 'circled'
                                : '')
                        }
                        onClick={() => {
                            onPlayerClick(2, 0);
                        }}
                        style={{ backgroundColor: getPlayerColor(2, 0) }}
                    >
                        {getPlayerName(2, 0)[0]}
                    </button>
                    <button
                        className={
                            'calBtn grey ' +
                            (selectedPlayer == getPlayerName(2, 1)
                                ? 'circled'
                                : '')
                        }
                        onClick={() => {
                            onPlayerClick(2, 1);
                        }}
                        style={{ backgroundColor: getPlayerColor(2, 1) }}
                    >
                        {getPlayerName(2, 1)[0]}
                    </button>
                    <button
                        className={
                            'calBtn grey ' +
                            (selectedPlayer == getPlayerName(2, 2)
                                ? 'circled'
                                : '')
                        }
                        onClick={() => {
                            onPlayerClick(2, 2);
                        }}
                        style={{ backgroundColor: getPlayerColor(2, 2) }}
                    >
                        {getPlayerName(2, 2)[0]}
                    </button>
                    <MyLink orange={true} to="/add-player">
                        +
                    </MyLink>
                </div>
                <div className="row">
                    <DoubleBtn
                        onClick={() => {
                            if (pageIndex > 0) {
                                setPageIndex(pageIndex - 1);
                            } else {
                                setPageIndex(playerPages.length - 1);
                            }
                        }}
                        btnWidth={170}
                    >
                        {'<'}
                    </DoubleBtn>
                    <button
                        className="calBtn grey"
                        onClick={() => {
                            setPageIndex((pageIndex + 1) % playerPages.length);
                        }}
                    >
                        {'>'}
                    </button>
                    <MyLink orange={true} to="/">
                        <img className="icon" src={scoreIcon} alt="S"></img>
                    </MyLink>
                </div>
            </div>
        </div>
    );
}

export default PlayerOverview;

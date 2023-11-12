/* eslint-disable indent */
import React, { Component } from 'react';
import Calculator from './components/Calculator/Calculator.jsx';
import PlayerOverview from './components/PlayerOverview/PlayerOverview.jsx';
import './index.scss';
import Header from './components/Header/Header.tsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddPlayer from './components/AddPlayer/AddPlayer.jsx';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="background"></div>
                    <Header></Header>
                    <Routes>
                        <Route
                            path="iScore/player"
                            element={<PlayerOverview></PlayerOverview>}></Route>
                        <Route
                            path="iScore/add-player"
                            element={<AddPlayer></AddPlayer>}></Route>
                        <Route
                            path="iScore"
                            element={<Calculator></Calculator>}></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}

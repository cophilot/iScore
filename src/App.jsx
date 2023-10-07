import React, { Component } from 'react';
import Calculator from './components/Calculator/Calculator.jsx';
import PlayerOverview from './components/PlayerOverview/PlayerOverview.jsx';
import './index.scss';
import Header from './components/Header/Header.jsx';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddPlayer from './components/AddPlayer/AddPlayer.jsx';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div class="background"></div>
                    <Header></Header>
                    <Routes>
                        <Route
                            path="player"
                            element={<PlayerOverview></PlayerOverview>}></Route>
                        <Route
                            path="add-player"
                            element={<AddPlayer></AddPlayer>}></Route>
                        <Route
                            path="/"
                            element={<Calculator></Calculator>}></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}
/* render() {
        return (
            <Router>
                <div>
                    <div class="background"></div>
                    <Header></Header>
                    <Switch>
                        <Route path="/player">
                            <PlayerOverview></PlayerOverview>
                        </Route>
                        <Route path="/">
                            <Calculator></Calculator>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    } */

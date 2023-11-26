/* eslint-disable indent */
import React from 'react';
import Calculator from './components/Calculator/Calculator.tsx';
import PlayerOverview from './components/PlayerOverview/PlayerOverview.tsx';
import './index.scss';
import Header from './components/Header/Header.tsx';
import Settings from './components/Settings/Settings.tsx';

import { Route, Routes, HashRouter } from 'react-router-dom';
import AddPlayer from './components/AddPlayer/AddPlayer.tsx';

function App() {
    return (
        <div>
            <div className="background"></div>
            <Header></Header>
            <HashRouter>
                <Routes>
                    <Route
                        path="/player"
                        element={<PlayerOverview></PlayerOverview>}></Route>
                    <Route
                        path="/add-player"
                        element={<AddPlayer></AddPlayer>}></Route>
                    <Route
                        path="/settings"
                        element={<Settings></Settings>}></Route>
                    <Route path="/" element={<Calculator></Calculator>}></Route>
                    <Route path="*" element={<Calculator />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;

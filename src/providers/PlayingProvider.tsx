import React, { useState } from 'react';

const PlayingContext = React.createContext({
    playing: false,
    // eslint-disable-next-line no-unused-vars
    setPlaying: (playing: boolean) => {},
});

function PlayingProvider({ children }) {
    const [playing, setPlaying] = useState(false);

    return (
        <PlayingContext.Provider value={{ playing, setPlaying }}>
            {children}
        </PlayingContext.Provider>
    );
}

export default PlayingProvider;

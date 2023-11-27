import React, { useEffect, useState } from 'react';
import { useGetFromLS, useStoreInLS } from './StorageProvider.tsx';

const TimeContext = React.createContext({
    time: 0,
    // if the timer is running or not
    playing: false,
    //toggle function
    // eslint-disable-next-line no-unused-vars
    togglePlaying: () => {},
    reset: () => {},
    getTimeAsString: (): string => {
        return '00:00:00';
    },
});

// costum hook
export function usePlaying() {
    const context = React.useContext(TimeContext);
    if (!context) {
        throw new Error('usePlaying must be used within a PlayingProvider');
    }
    return context.playing;
}

export function useTime() {
    const context = React.useContext(TimeContext);
    if (!context) {
        throw new Error('useTime must be used within a PlayingProvider');
    }
    return context.time;
}

// costum hook
export function useTogglePlaying() {
    const context = React.useContext(TimeContext);
    if (!context) {
        throw new Error(
            'usePlayingToggle must be used within a PlayingProvider'
        );
    }
    return context.togglePlaying;
}

export function useResetTimer() {
    const context = React.useContext(TimeContext);
    if (!context) {
        throw new Error('useResetTimer must be used within a PlayingProvider');
    }
    return context.reset;
}

export function useGetTimeAsString() {
    const context = React.useContext(TimeContext);
    if (!context) {
        throw new Error(
            'useGetTimeAsString must be used within a PlayingProvider'
        );
    }
    return context.getTimeAsString;
}

export function TimeProvider({ children }) {
    const [time, setTime] = useState(0);
    const [playing, setPlaying] = useState(false);

    const storeInLS = useStoreInLS();
    const getFromLS = useGetFromLS();

    const togglePlaying = () => {
        saveToLocalStorage(!playing, time);
        setPlaying(!playing);
    };

    const reset = () => {
        saveToLocalStorage(false, 0);
        setPlaying(false);
        setTime(0);
    };

    const incrementTime = () => {
        saveToLocalStorage(playing, time + 1);
        setTime((time) => time + 1);
    };

    const saveToLocalStorage = (pPlaying: boolean, pTime: number) => {
        storeInLS(
            'iscore-timer',
            JSON.stringify({ playing: pPlaying, time: pTime })
        );
    };

    const getTimeAsString = (): string => {
        const hours: number = Math.floor(time / 3600);

        const minutes: number = Math.floor((time % 3600) / 60);

        const seconds: number = time % 60;

        return (
            hours.toString().padStart(2, '0') +
            ':' +
            minutes.toString().padStart(2, '0') +
            ':' +
            seconds.toString().padStart(2, '0')
        );
    };

    useEffect(() => {
        const data = getFromLS('iscore-timer');
        if (data) {
            const { playing, time } = JSON.parse(data);
            setPlaying(playing);
            setTime(time);
        }
    }, []);

    useEffect(() => {
        let interval: any = null;
        if (playing) {
            interval = setInterval(incrementTime, 1000);
        } else if (!playing && time !== 0) {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [playing, time]);

    return (
        <TimeContext.Provider
            value={{ time, playing, togglePlaying, reset, getTimeAsString }}
        >
            {children}
        </TimeContext.Provider>
    );
}

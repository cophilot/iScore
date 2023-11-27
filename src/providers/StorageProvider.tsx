import React, { useEffect } from 'react';
import '../components/global.scss';
import DoubleBtn from '../components/DoubleBtn/DoubleBtn.tsx';

const StorageContext = React.createContext({
    cookieAllowed: false,
    acceptCookies: () => {},
    rejectCookies: () => {},
    // eslint-disable-next-line no-unused-vars
    storeInLS: (name: string, value: string) => {},
    // eslint-disable-next-line no-unused-vars
    getFromLS: (name: string): any => {},
});

export function useCookieAllowed() {
    const context = React.useContext(StorageContext);
    if (!context) {
        throw new Error(
            'useCookieAllowed must be used within a PlayingProvider'
        );
    }
    return context.cookieAllowed;
}

export function useAcceptCookie() {
    const context = React.useContext(StorageContext);
    if (!context) {
        throw new Error(
            'useAcceptCookie must be used within a PlayingProvider'
        );
    }
    return context.acceptCookies;
}

export function useRejectCookies() {
    const context = React.useContext(StorageContext);
    if (!context) {
        throw new Error(
            'useRejectCookies must be used within a PlayingProvider'
        );
    }
    return context.rejectCookies;
}
export function useStoreInLS() {
    const context = React.useContext(StorageContext);
    if (!context) {
        throw new Error('useStoreInLS must be used within a PlayingProvider');
    }
    return context.storeInLS;
}
export function useGetFromLS() {
    const context = React.useContext(StorageContext);
    if (!context) {
        throw new Error('useGetFromLS must be used within a PlayingProvider');
    }
    return context.getFromLS;
}

export function StorageProvider({ children }) {
    const [cookieAllowed, setCookieAllowed] = React.useState(false);
    const [display, setDisplay] = React.useState(true);

    const btnWidth = window.innerWidth * 0.9;

    useEffect(() => {
        if (localStorage.getItem('iscore-cookie-allowed') === 'true') {
            setCookieAllowed(true);
            setDisplay(false);
        }
    }, []);

    const acceptCookies = () => {
        setCookieAllowed(true);
        setDisplay(false);
        localStorage.setItem('iscore-cookie-allowed', 'true');
    };

    const rejectCookies = () => {
        setCookieAllowed(false);
        setDisplay(false);
        localStorage.clear();
    };

    const storeInLS = (name: string, value: string) => {
        if (!cookieAllowed) {
            return;
        }
        localStorage.setItem(name, value);
    };

    const getFromLS = (name: string): any => {
        return localStorage.getItem(name);
    };

    return (
        <>
            <StorageContext.Provider
                value={{
                    cookieAllowed,
                    acceptCookies,
                    rejectCookies,
                    storeInLS,
                    getFromLS,
                }}
            >
                {children}
            </StorageContext.Provider>
            {display && (
                <>
                    <div className="bg"></div>

                    <div className="container settingsBox">
                        <div className="display">
                            <div className="displayText">Cookies</div>
                        </div>
                        <p
                            style={{
                                color: 'white',
                                marginTop: 20,
                                marginBottom: 20,
                                textAlign: 'right',
                            }}
                        >
                            This website uses cookies to enhance the user
                            experience.
                        </p>
                        <DoubleBtn
                            onClick={rejectCookies}
                            btnWidth={btnWidth}
                            middleText={true}
                        >
                            Reject
                        </DoubleBtn>
                        <DoubleBtn
                            onClick={acceptCookies}
                            btnWidth={btnWidth}
                            middleText={true}
                            orange={true}
                        >
                            Accept
                        </DoubleBtn>
                    </div>
                </>
            )}
        </>
    );
}

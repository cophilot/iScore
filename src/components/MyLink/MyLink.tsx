import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../global.scss';

function MyLink({
    children,
    to,
    orange = false,
    grey = false,
    lightGrey = false,
}) {
    const navigate = useNavigate();

    const goTo = () => {
        navigate(to);
    };

    return (
        <button
            className={
                'calBtn ' +
                (orange ? 'orange ' : '') +
                (lightGrey ? 'lightGrey ' : '') +
                (grey ? 'grey ' : '')
            }
            onClick={goTo}
        >
            {children}
        </button>
    );
}

export default MyLink;

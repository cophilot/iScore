import React from 'react';
import './ContentBox.scss';

function ContentBox({ children }) {
    const boxStyle = {
        width: window.innerWidth > 370 ? '370px' : '100%',
    };
    return (
        <div className="content-box" style={boxStyle}>
            {children}
        </div>
    );
}

export default ContentBox;

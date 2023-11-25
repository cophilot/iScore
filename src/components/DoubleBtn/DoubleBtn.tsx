import React from 'react';
import './DoubleBtn.scss';

interface Props {
    children: string;
    btnWidth: number;
    onClick: () => void;
    middleText?: boolean;
}

function DoubleBtn({
    children,
    btnWidth = 75,
    onClick,
    middleText = false,
}: Props) {
    return (
        <div className="dblBtn" onClick={onClick}>
            <button className="left circle">
                {!middleText ? children : ''}
            </button>
            <button className="middle" style={{ width: btnWidth - 75 }}>
                {middleText ? children : ''}
            </button>
            <div className="right circle"></div>
        </div>
    );
}

export default DoubleBtn;

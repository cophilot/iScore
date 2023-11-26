import React from 'react';
import './DoubleBtn.scss';
import '../global.scss';

interface Props {
    children: string;
    btnWidth: number;
    onClick: () => void;
    middleText?: boolean;
    orange?: boolean;
}

function DoubleBtn({
    children,
    btnWidth = 75,
    onClick,
    middleText = false,
    orange = false,
}: Props) {
    return (
        <div className="dblBtn" onClick={onClick}>
            <button className={'left circle ' + (orange ? 'orange' : 'grey')}>
                {!middleText ? children : ''}
            </button>
            <button
                className={'middle ' + (orange ? 'orange' : 'grey')}
                style={{ width: btnWidth - 75 }}
            >
                {middleText ? children : ''}
            </button>
            <div
                className={'right circle ' + (orange ? 'orange' : 'grey')}
            ></div>
        </div>
    );
}

export default DoubleBtn;

import React from 'react';
import parse from 'html-react-parser';

const Display = ({ input, currentNumber, operator }) => {
    return (
        <div id="screen">
            <div id="sum">{parse(input)}</div>
            <div id="display">{operator && currentNumber === '0' ? operator : currentNumber}</div>
        </div>
    );
}

export default Display;

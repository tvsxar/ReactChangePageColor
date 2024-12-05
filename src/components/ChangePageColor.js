import React, { useState } from "react";
import '../App.css';

function ChangePageColor() {
    const [buttonText, setButtonText] = React.useState('CHANGE IT')

    function changeColor() {
        const hex = '0123456789ABCDEF';
        let randomColor = '#';

        for(let i = 0; i < 6; i++) {
            randomColor += hex[Math.floor(Math.random() * hex.length)];
        }

        document.body.style.backgroundColor = randomColor;

        setButtonText(randomColor);

        randomColor = '#';
    }

    return (
        <div className='container'>
            <div className='button'>
                <button onClick={changeColor} className='change'>{buttonText}</button>
            </div>
        </div>
    );
};

export default ChangePageColor;
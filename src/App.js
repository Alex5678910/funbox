import React from 'react';
import './App.css';
import './Trebuchet.ttf'
import CardOne from "./Cart/Card-one";
import CardTwo from "./Cart/Card-two";
import CardThree from "./Cart/Card-three";

function App() {
    return (
        <div className={'Main'}>
            <h1 className={'Text'}>Ты сегодня покормил кота?</h1>
            <div className={'Flex-box'}>
                <CardOne/>
                <CardTwo/>
                <CardThree/>
            </div>
        </div>
    );
}

export default App;

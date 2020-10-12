import React, {Component} from 'react';
import './App.css';
import './Trebuchet.ttf'
import CardOne from "./Cart/Card-one";
import CardTwo from "./Cart/Card-two";
import CardThree from "./Cart/Card-three";

class App extends Component {

    state = {
        handler: 'Ты сегодня покормил кота?',
        newHandler: 'Ты молодец'
    }

    changeTitle = () => {
        // eslint-disable-next-line no-unused-vars
        const handler = this.state.handler

        this.setState({
            handler: this.state.newHandler
        })
    }

    render() {
        return (
            <div className={'Main'}>
                <h1 className={'Text'}>{this.state.handler}</h1>
                <div className={'Flex-box'}>
                    <CardOne
                        newTile={this.changeTitle.bind(this)}
                    />
                    <CardTwo/>
                    <CardThree/>
                </div>
            </div>
        );
    }
}

export default App;

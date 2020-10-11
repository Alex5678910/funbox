import React, {Component} from 'react';
import './Card-two.css'

class CardTwo extends Component {
    state = {
        headerText: 'Сказочное заморское яство',
        mainText: 'Нямушка',
        infoText: 'с рыбой',
        smallText: '40 порций 2 мыши в подарок',
        divStyle: {
            display: 'none'
        }
    }

    showButton = () => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState(this.state.divStyle = {display: 'block'})
    }

    hiddenButton = () => {
        // eslint-disable-next-line react/no-direct-mutation-state
        this.setState(this.state.divStyle = {display: 'none'})
    }

    render() {
        return (
            <main>
                <div className={'Container-wrapper'} onMouseOver={this.showButton} onMouseOut={this.hiddenButton}>
                    <div className={'Container'}>
                        <div className={'Block-header'}>
                            <p>{this.state.headerText}</p>
                            <h1>{this.state.mainText}</h1>
                            <h2>{this.state.infoText}</h2>
                            <h4>{this.state.smallText}</h4>
                        </div>
                        <div className={'Cat'}>
                            <button type={'button'} className={'Button'} style={this.state.divStyle}>Купить</button>
                            <div className={'Span'}><p>2</p><p className={'Small'}>кг</p></div>
                        </div>
                    </div>
                </div>
                <div className="Description">
                    Чего Головы щучьи с чесноком да свежайшая сёмгушка.
                </div>
            </main>
        )
    }
}

export default CardTwo;

import React, {Component} from 'react';
import './Card-one.css'

class CardOne extends Component {
        state = {
            headerText: 'Сказочное заморское яство',
            mainText: 'Нямушка',
            infoText: 'с фуа-гра',
            smallText: '10 порций мышь в подарок',
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
                <div className={'Container-wrapper-one'} onMouseOver={this.showButton} onMouseOut={this.hiddenButton}>
                    <div className={'Container-one'}>
                        <div className={'Block-header-one'}>
                            <p>{this.state.headerText}</p>
                            <h1>{this.state.mainText}</h1>
                            <h2>{this.state.infoText}</h2>
                            <h5>{this.state.smallText}</h5>
                        </div>

                        <div className={'Cat-one'}>
                            <button type={'button'} className={'Button-one'} style={this.state.divStyle}>Купить</button>
                            <div className={'Span-one'}><p>0,5</p><p className={'Small-one'}>кг</p></div>
                        </div>
                    </div>
                </div>
                <div className={'Description-one'}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                   Чего сидишь? Порадуй котэ, <a href="#">купи.</a>
                </div>
            </main>
        )
    }
}

export default CardOne;

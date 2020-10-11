import React, {Component} from 'react';
import './Card-three.css'

class CardThree extends Component {
    state = {
        headerText: 'Сказочное заморское яство',
        mainText: 'Нямушка',
        infoText: 'с курой',
        smallText: '100 порций\n' +
            '5 мышей в подарок\n' +
            'заказчик доволен'
    }

    render() {
        return (
            <main>
                <div className={'Container-wrapper-three'}>
                    <div className={'Container-three'}>
                        <div className={'Block-header-three'}>
                            <p>{this.state.headerText}</p>
                            <h1>{this.state.mainText}</h1>
                            <h2>{this.state.infoText}</h2>
                            <h6>{this.state.smallText}</h6>
                        </div>
                        <div className={'Cat-three'}>
                            <div className={'Span-three'}><p>5</p><p className={'Small-three'}>кг</p></div>
                        </div>
                    </div>
                </div>
                <div className="Description-three">
                    Печалька, с курой закончился.
                </div>
            </main>
        )
    }
}

export default CardThree;

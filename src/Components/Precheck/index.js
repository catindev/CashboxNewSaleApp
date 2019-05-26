/**
* Контейнер для компонентов предчека
*/

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toggleStorno, calculateTotal } from './Precheck.actions';

import Position from "./Position/Position";
import Totals from "./Total/Total";
import Header from "./Header/Header";

const NoPositions = () => (
    <li className="list-group-item">
        <span role="img" aria-label="">👈 </span>
        Заполните форму и добавьте позицию в предчек
    </li>
);


class Precheck extends Component {
    static propTypes = {
        /**
         * Список товарных позиций 
         */
        Positions: PropTypes.array,
        /**
         * Итоговая сумма к оплате по предчеку
         */
        Total: PropTypes.number,
        /**
         * Сумма наличных, полученных от клиента
         */
        Cash: PropTypes.number,
        /**
         * Сумма безналичных, полученных от клиента
         */
        NonCash: PropTypes.number
    }

    onStorno = index => {
        this.props.dispatch(toggleStorno(index))
        this.props.dispatch(calculateTotal())
    }

    render() {
        const { Positions, Total, Cash, NonCash, Change } = this.props;
        const hasPositions = Positions.length > 0;

        return (
            <Fragment>
                <Header Length={Positions.length} />

                <ul className="list-group mb-3">
                    {!hasPositions && <NoPositions />}

                    {hasPositions && Positions.map((p, i) =>
                        <Position key={i} Index={i} {...p}
                            onStorno={this.onStorno} />)}

                    <Totals
                        Total={Total} Cash={Cash}
                        NonCash={NonCash} Change={Change} />
                </ul>
            </Fragment>
        )
    }
}

function mapState({ Positions, Total, Cash, NonCash, Change }) {
    return { Positions, Total, Cash, NonCash, Change }
}

export default connect(mapState)(Precheck);
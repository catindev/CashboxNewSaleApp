/**
* Контейнер для всех компонентов предчека
*/

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { toggleStorno } from '../../Store/actions/positions';

import Position from "./Position/Position";
import Total from "./Total/Total";
import Header from "./Header/Header";

const NoPositions = () => (
    <li className="list-group-item">
        <span role="img" aria-label="">👈 </span>
        Заполните форму и добавьте позицию в предчек
    </li>
);


class Precheck extends Component {
    static propTypes = {
        Positions: PropTypes.array
    }

    onStorno = index => this.props.dispatch(toggleStorno(index))

    render() {
        const { Positions } = this.props;
        const hasPositions = Positions.length > 0;
        return (
            <Fragment>
                <Header Length={Positions.length} />

                <ul className="list-group mb-3">
                    {!hasPositions && <NoPositions />}

                    {hasPositions && Positions.map((p, i) =>
                        <Position key={i} Index={i} {...p}
                            onStorno={this.onStorno} />)}

                    {hasPositions && <Total
                        Total={123} Cash={456}
                        NonCash={789} Change={0} />}
                </ul>
            </Fragment>
        )
    }
}

export default connect()(Precheck);
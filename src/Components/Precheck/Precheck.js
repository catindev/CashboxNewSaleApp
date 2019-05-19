import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import Position from "./Position/Position";
import Total from "./Total/Total";
import Header from "./Header/Header";

class Precheck extends Component {
    render() {
        return (
        <Fragment>
            <Header Length="4" />
            <ul className="list-group mb-3 text-monospace">
                <Position Index="1" Name="Позиция 1"
                    SectionName="Без НДС"
                    Price="100"
                    Qty="2"
                    onClickStorno={() => alert(1)}
                />
                <Total Total="100" Cash="100" />
            </ul>
        </Fragment>)
    }
}

Precheck.propTypes = {}

export default Precheck;
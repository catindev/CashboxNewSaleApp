/**
* Компонент итогов для предчека
*/

import React from 'react';
import PropTypes from 'prop-types';
import formatMoney from '../../../Utils/FormatMoney';

function Total({ Total = 0, Cash = 0, NonCash = 0, Change = 0 }) {
    return (
        <li className="list-group-item list-group-item-warning">
            <div className="d-flex justify-content-between s-t">
                <span className="text-dark">К оплате</span>
                <strong>
                    {formatMoney(Total)}
                </strong>
            </div>

            <hr />
            <h5>Оплачено</h5>

            <div className="d-flex justify-content-between">
                <span className="text-dark">Безналичными</span>
                <strong>{formatMoney(NonCash)}</strong>
            </div>

            <div className="d-flex justify-content-between">
                <span className="text-dark">
                    Наличными
                </span>
                <strong>{formatMoney(Cash)}</strong>
            </div>

            {Change > 0 && (<div className="d-flex justify-content-between">
                <span className="text-dark">Сдача</span>
                <strong>{formatMoney(Change)}</strong>
            </div>)}

        </li>
    )
}

Total.propTypes = {
    /**
     * Cумма к оплате
     */
    Total: PropTypes.number.isRequired,
    /**
     * Внесено (оплачено?) наличными
     */
    Cash: PropTypes.number,
    /**
     * Внесено безналом
     */
    NonCash: PropTypes.number,
    /**
     * Сдача (для наличных)
     */
    Change: PropTypes.number
};

export default Total;
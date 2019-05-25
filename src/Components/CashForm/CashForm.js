/**
 * Компонент с формой для ввода суммы, полученной от клиента
 * Без состояния
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import InputNumber from '../Common/InputNumber/InputNumber';

function CashForm({ Cash, NonCash, OnChange = () => { } }) {
    return (
        <Fragment>
            <h4 className="mb-3">Внесённая сумма</h4>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="Cash">Наличными</label>
                    <InputNumber className="form-control" id="Cash"
                        placeholder="0" value={Cash} OnChange={OnChange} />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="NonCash">Безналичными</label>
                    <InputNumber className="form-control" id="NonCash"
                        placeholder="0" value={NonCash} OnChange={OnChange} />
                </div>
            </div>
        </Fragment>
    )
}

CashForm.propTypes = {
    /**
     * Внесённая сумма наличными
     */
    Cash: PropTypes.number.isRequired,
    /**
     * Внесённая сумма безналичными
     */
    NonCash: PropTypes.number.isRequired,
    /**
     * Коллбэк для изменения внешнего стейта формы
     */
    OnChange: PropTypes.func.isRequired,
}

export default CashForm;
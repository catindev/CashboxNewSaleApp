/**
 * Компонент с формой для ввода суммы, полученной от клиента
 * Без состояния
 */

import React from 'react';
import PropTypes from 'prop-types';

import InputNumber from '../Common/InputNumber/InputNumber';

function CashForm({ Cash, NonCash, OnChange = () => { } }) {
    const change = ({ target: { value, name } }) => OnChange({ value, name });
    return (
        <div className="border-top pt-4">
            <h4 className="mb-3">Внесённая сумма</h4>
            <div className="row">
                <div className="col-md-6 ">
                    <label htmlFor="Cash">Наличными</label>
                    <InputNumber className="form-control" id="Cash" name="Cash"
                        placeholder="0" value={Cash} OnChange={change} />
                </div>

                <div className="col-md-6">
                    <label htmlFor="NonCash">Безналичными</label>
                    <InputNumber className="form-control" id="NonCash" name="NonCash"
                        placeholder="0" value={NonCash} OnChange={change} />
                </div>
            </div>
        </div>
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
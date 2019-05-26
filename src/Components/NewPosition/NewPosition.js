/**
 * Компонент с формой для добавления новой позиции в предчек
 * Без состояния
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import InputNumber from '../Common/InputNumber/InputNumber';
import Directory from '../Common/Directory/Directory';
import Alert from '../Common/Alert/Alert';

function NewPosition({
    Name, Price = 0, Qty = 1, Discount = 0, Markup = 0, Section,
    Sections = [], Errors = {},
    OnChange, OnSubmit, OnReset
}) {
    const change = ({ target: { value, name } }) => OnChange({ value, name });
    const submit = e => { e.preventDefault(); OnSubmit(e); };
    const isValid = fieldName => Object.keys(Errors).length > 0 ?
        (fieldName in Errors && 'is-invalid') : false;
    const errors = Object.keys(Errors).map(key => Errors[key]);

    return (
        <Fragment>
            <h4 className="mb-3">Добавить позицию</h4>

            <Alert Title="Ошибка при добавлении позиции" Type="warning" List={errors}>
                Исправьте ошибки и попробуйте добавить позицию ещё раз
            </Alert>

            <form className="needs-validation" noValidate onSubmit={submit}>

                <div className="form-row pt-2">
                    <div className="form-group col-md-7">
                        <label htmlFor="PositionName">Наименование</label>
                        <input type="text"
                            className={`form-control form-control-lg ${isValid('Name')}`}
                            id="PositionName" placeholder="Название товара или услуги"
                            name="Name" onChange={change} value={Name} />
                    </div>

                    <div className="form-group col-md-3">
                        <label htmlFor="PositionPrice">Цена</label>
                        <InputNumber
                            className={`form-control form-control-lg ${isValid('Price')}`}
                            id="PositionPrice" placeholder="0"
                            name="Price" OnChange={change} value={Price} />
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="PositionQty">Кол-во</label>
                        <InputNumber
                            className={`form-control form-control-lg ${isValid('Qty')}`}
                            id="PositionQty"
                            name="Qty" OnChange={change} value={Qty} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-8">
                        <Directory Id="Section" Label="Секция"
                            Items={Sections} Selected={Section}
                            OnChange={change} />
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="PositionMarkup">% наценка</label>
                        <InputNumber
                            className={`form-control ${isValid('Markup')}`}
                            id="PositionMarkup"
                            name="Markup" OnChange={change} value={Markup} />
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="PositionDiscount">% cкидка</label>
                        <InputNumber
                            className={`form-control ${isValid('Discount')}`}
                            id="PositionDiscount"
                            name="Discount" OnChange={change} value={Discount} />
                    </div>
                </div>

                <div className="pt-3 pb-2">
                    <button type="submit" className="btn btn-primary btn-sm mr-2">
                        Добавить в предчек
                    </button>

                    <small>или&#8194;</small>

                    <button type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={OnReset}>
                        Очистить форму
                    </button>
                </div>
            </form>
        </Fragment>
    )
}

NewPosition.propTypes = {
    /**
     * Название товара
     */
    Name: PropTypes.string.isRequired,
    /**
     * Цена за единицу
     */
    Price: PropTypes.number.isRequired,
    /**
     * Количество
     */
    Qty: PropTypes.number.isRequired,
    /**
     * Индекс выбранной секции в массиве справочника секций
     */
    Section: PropTypes.number.isRequired,
    /**
     * Скидка в %
     */
    Discount: PropTypes.number.isRequired,
    /**
     * Наценка в %
     */
    Markup: PropTypes.number.isRequired,
    /**
     * Список ошибок из формы
     */
    Errors: PropTypes.objectOf(PropTypes.string),
    /**
     * Список секций (справочник с бекенда)
     */
    Sections: PropTypes.array,
    /**
     * Коллбэк для изменения внешнего стейта формы
     */
    OnChange: PropTypes.func.isRequired,
    /**
     * Коллбэк для подтверждения внешнего стейта формы
     */
    OnSubmit: PropTypes.func.isRequired,
    /**
     * Коллбэк для сброса внешнего стейта формы
     */
    OnReset: PropTypes.func.isRequired
}

export default NewPosition;
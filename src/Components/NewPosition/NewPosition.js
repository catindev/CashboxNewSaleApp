/**
 * Компонент с формой для добавления новой позиции в предчек
 * Состояние формы пробрасывается снаружи и отдаётся при изменении полей
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './NewPosition.css';

import InputNumber from '../Common/InputNumber/InputNumber';
import Directory from '../Common/Directory/Directory';

const ErrorMessage = ({ List = {} }) => Object.keys(List).length > 0 ?
    (
        <div className="NewPosition__alert alert alert-warning mb-4 shadow"
            role="alert">
            <h5 className="alert-heading">Ошибка при добавлении позиции</h5>
            {Object.keys(List).map((field, i) => <p key={i}>{List[field]}</p>)}
            <hr />
            <small>Исправьте ошибки и попробуйте добавить позицию ещё раз</small>
        </div>
    ) : null;

function NewPosition({
    Name, Price = 0, Qty = 1, Discount = 0, Markup = 0, Section,
    Sections = [], Errors = {},
    OnChange, OnSubmit, OnReset
}) {
    const change = ({ target: { value, name, type } }) => {
        return OnChange({ [name]: type === 'number' && value !== '0' ? parseInt(value, 10) : value });
    }
    const submit = e => { e.preventDefault(); OnSubmit(e); };
    const isValid = fieldName => Object.keys(Errors).length > 0 ?
        (fieldName in Errors && 'is-invalid') : false;

    return (
        <Fragment>
            <h4 className="mb-3">Добавить позицию</h4>
            <ErrorMessage List={Errors} />

            <form className="needs-validation" noValidate
                onSubmit={submit}>

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
                            name="Price" onChange={change} value={Price} />
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="PositionQty">Кол-во</label>
                        <InputNumber
                            className={`form-control form-control-lg ${isValid('Qty')}`}
                            id="PositionQty"
                            name="Qty" onChange={change} value={Qty} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-8">
                        <Directory Id="Section" Label="Секция" Items={Sections} Selected={Section} OnChange={change} />

                        {/* <label htmlFor="PositionSections">Секция</label>
                        <select name="Section" id="PositionSections"
                            className={`form-control ${isValid('Section')}`}
                            onChange={change} value={Section}>
                            {Sections.length > 0 && Sections.map(({ Id, Name }, index) =>
                                <option key={index} value={index}>{Name}</option>)}
                        </select>
                        {Sections.length === 0 && (
                            <small className="form-text text-muted">
                                Загружаем справочник...
                            </small>
                        )} */}
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="PositionMarkup">% наценка</label>
                        <InputNumber
                            className={`form-control ${isValid('Markup')}`}
                            id="PositionMarkup"
                            name="Markup" onChange={change} value={Markup} />
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="PositionDiscount">% cкидка</label>
                        <InputNumber
                            className={`form-control ${isValid('Discount')}`}
                            id="PositionDiscount"
                            name="Discount" onChange={change} value={Discount} />
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
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Directory = ({
    Id, Label,
    Items = [],
    Selected = 0,
    OnChange = () => { }
}) => (
        <Fragment>
            <label htmlFor={Id}>{Label}</label>
            <select name={Id} id={Id} className="form-control"
                onChange={OnChange} value={Selected}>
                {Items.length > 0 ?
                    Items.map(({ Name }, i) =>
                        <option key={i} value={i}>{Name}</option>)
                    :
                    null}
            </select>
            {Items.length === 0 && (
                <small className="form-text text-muted">
                    Загружаем справочник...
            </small>
            )}
        </Fragment>
    );

Directory.propTypes = {
    /**
     * Идентификатор (для HTML)
     */
    Id: PropTypes.string.isRequired,
    /**
     * Название справочника (label)
     */
    Label: PropTypes.string.isRequired,
    /**
     * Список элементов справочника
     */
    Items: PropTypes.array.isRequired,
    /**
     * Индекс выбранного элемента в списке
     */
    Selected: PropTypes.number.isRequired,
    /**
     * Коллбэк для изменения внешнего стейта
     */
    OnChange: PropTypes.func.isRequired,
};

export default Directory;
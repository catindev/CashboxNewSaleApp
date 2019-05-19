import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Sections({ Items = [], Selected = 0, OnChange = () => { } }) {
    return (
        <Fragment>
            <label htmlFor="PositionSections">Секция</label>
            <select name="Section" id="PositionSections" className="form-control"
                onChange={OnChange} value={Selected}>
                {Items.length > 0 ?
                    Items.map(({ Id, Name }) =>
                        <option value={Id}>{Name}</option>)
                    :
                    null}
            </select>
        </Fragment>
    );
}

Sections.propTypes = {
    /**
     * Список секций (справочник с бекенда)
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

export default Sections;
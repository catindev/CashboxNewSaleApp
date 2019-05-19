/**
 * Компонент заголовка для предчека
 */

// TODO: 
// - Добавить вид деятельности;
// - Поиграть со слотами вместо пропсов.

import React from 'react';
import PropTypes from 'prop-types';

function LabelText(Length) {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ['позиция', 'позиции', 'позиций'];
    return titles[
        (Length % 100 > 4 && Length % 100 < 20) ?
            2 : cases[(Length % 10 < 5) ? Length % 10 : 5]
    ];
}

function Header({ Length }) {
    return (
        <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Предчек</span>
            <span className="badge badge-primary badge-pill">
                {Length} {LabelText(Length)}
            </span>
        </h4>
    )
}

Header.propTypes = {
    /**
     * Длина массива с позициями в стейте
     */
    Length: PropTypes.number.isRequired
}

export default Header;
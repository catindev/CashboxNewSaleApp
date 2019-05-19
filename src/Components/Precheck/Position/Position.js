/**
 * Компонент товарной позиции в предчеке
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helpers from './Helpers';
import './Position.css';
import CalculatePositionCost from '../../../Utils/CalculatePositionCost';
import FormatMoney from '../../../Utils/FormatMoney';


function Position({
    Index, Name, SectionName, Nds = false, Qty = 1, Markup = 0, Discount = 0,
    Storno = false, Price, Cost, onStorno = () => { }
}) {
    // 🙈 Monkey patch. Rem0ve later
    const Total = Cost ? Cost : CalculatePositionCost({ Price, Qty, Markup, Discount });

    const buttonStyles = Storno ?
        'btn btn-outline-secondary btn-sm'
        :
        'btn btn-danger btn-sm';

    return (
        <li className={`list-group-item bPosition ${Storno ? 'bg-light' : ''}`}>
            <div className="d-flex justify-content-between pb-1">
                <div className={Storno ? 'text-danger' : ''}>
                    <div className="my-0 text-truncate">
                        {Name} <Helpers.Qty value={Qty} />
                    </div>
                    <small className="text-muted">Цена {Price}</small>
                    <Helpers.Discount value={Discount} />
                    <Helpers.Markup value={Markup} />
                </div>
                <strong>{FormatMoney(Total)}</strong>
            </div>

            <div className="pb-1">
                <small className="text-muted">
                    Секция "{SectionName}"
                </small>
                {Nds === true && <Helpers.Nds Price={Price} Qty={Qty} />}
            </div>

            <div className="pt-2 d-none bPosition__buttons">
                <button className={buttonStyles}
                    onClick={() => onStorno(Index)}>
                    {Storno ? 'Отменить сторно' : 'Сторно'}
                </button>
            </div>
        </li>
    )
}

Position.propTypes = {
    /**
     * Индекс (номер в массиве позиций в стейте)
     */
    Index: PropTypes.number.isRequired,
    /**
     * Наименование товара
     */
    Name: PropTypes.string.isRequired,
    /**
     * Цена за единицу товара
     */
    Price: PropTypes.number.isRequired,
    /**
     * Название секции (view only)
     */
    SectionName: PropTypes.string.isRequired,
    /**
     * Кол-во товара
     */
    Qty: PropTypes.number.isRequired,
    /**
     * Коллбэк для кнопки "Сторно"
     */
    onStorno: PropTypes.func,
    /**
     * Флаг НДС (view only)
     * Включён ли НДС в стоимость товара
     */
    Nds: PropTypes.bool,
    /**
     * % наценки
     */
    Markup: PropTypes.number,
    /**
     * % скидки
     */
    Discount: PropTypes.number,
    /**
     * Итоговая стоимость товара (view only)
     * (с учётом кол-ва и % скидки и наценки)
     */
    Cost: PropTypes.number,
    /**
     * Флаг сторно (view only?)
     * показывает была ли отменена покупка позиции
     */
    Storno: PropTypes.bool
};

export default Position;
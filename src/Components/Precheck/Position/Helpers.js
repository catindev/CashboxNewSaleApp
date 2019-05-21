/**
 * Вспомогательные элементы для товарной позиции в предчеке
 * (чтобы не засирать ХТМЛом основной компонент) 
 */

import React, { Fragment } from 'react';

export default {
    /**
     * Количество товара в позиции
     * Выводится если больше единицы
     */
    Qty: ({ value }) => value ?
        value > 1 && (
            <Fragment>
                <span>&#215;</span> <span>{value}</span>
            </Fragment>
        ) : null,
    /**
    * Скидка на товар 
    * Выводится в % или не выводится если !value
    */
    Discount: ({ value, Storno = false }) => value ?
        value > 0 && (
            <Fragment>
                <span className="text-muted s-d"> • </span>
                <small className={`badge badge-pill badge-${Storno ? 'secondary' : 'success'} s-i`}>
                    Скидка {value}%
                </small>
            </Fragment>
        ) : null,
    /**
    * Наценка на товар 
    * Выводится в % или не выводится если !value
    */
    Markup: ({ value, Storno = false }) => value ?
        value > 0 && (
            <Fragment>
                <span className="text-muted s-d"> • </span>
                <small className={`badge badge-pill badge-${Storno ? 'secondary' : 'warning'} s-i`}>
                    Наценка {value}%
                </small>
            </Fragment>
        ) : null,
    /**
    * НДС от стоимости товарной позиции 
    * Выводится в тенге
    */
    Nds: ({ Price, Qty, Storno = false }) => {
        const NdsValue = ((Price * 12 / 112) * Qty).toFixed(2);
        const type = Storno ? 'secondary' : 'info';
        return (
            <Fragment>
                <span className="text-muted s-d"> • </span>
                <small className={`badge badge-pill badge-${type} s-i`}>
                    НДС {NdsValue}
                </small>
            </Fragment>
        )
    }
}
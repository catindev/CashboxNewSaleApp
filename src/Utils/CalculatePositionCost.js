/**
 * Утилита для расчёта стоимости позиции
 * 
 * С = (Ц + СН - СС) * К
 * Обозначения в формуле:
 * С    - итоговая стоимость позиции
 * Ц    - цена за единицу товара
 * СН   - сумма наценки или 0
 * СС   - сумма скидки или 0
 * К    - количество товара в позиции
 * 
 * Если стоимость float, то округляем до сотых
 */

import isDecimal from './IsDecimal';

export default function CalculatePositionCost({
    Price, Qty = 1, Markup = 0, Discount = 0
}) {
    console.log('new position', Price, Qty, Markup, Discount)
    const Cost = (Price + (Markup > 0 ? (Price * Markup) / 100 : 0) -
        (Discount > 0 ? (Price * Discount) / 100 : 0)) * Qty;

    return isDecimal(Cost) ? parseFloat(Cost.toFixed(2)) : Cost;
}
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

export default function CalculatePositionCost({
    Price, Qty = 1, Markup = 0, Discount = 0
}) {
    const Cost = (Price + (Markup > 0 ? (Price * Markup) / 100 : 0) -
        (Discount > 0 ? (Price * Discount) / 100 : 0)) * Qty;

    return Number(Cost) === Cost && Cost % 1 !== 0 ? Cost.toFixed(2) : Cost;
}
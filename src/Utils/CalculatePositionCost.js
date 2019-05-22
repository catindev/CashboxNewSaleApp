/**
 * Утилита для расчёта итоговой стоимости позиции
 */

export default function CalculatePositionCost({
    Price, Qty = 1, Markup = 0, Discount = 0
}) {
    const DiscountMoney = Price * (Discount / 100);
    const MarkupMoney = Price * (Markup / 100);
    const PriceTotal = Math.round(Price + MarkupMoney - DiscountMoney);
    return PriceTotal * Qty;
}
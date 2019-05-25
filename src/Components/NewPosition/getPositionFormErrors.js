/** Валидатор формы новой позиции
 *  Возвращает объект с ошибками в параметрах формы
 */

export default function getPositionFormErrors(position) {
    return Object.keys(position).reduce((errors, key) => {
        switch (key) {
            case 'Name':
                if (position[key] === '') {
                    errors[key] = 'Введите наименование товара';
                }
                return errors;

            case 'Price':
                if (Number(position.Price) <= 0 || !position.Price) errors.Price = 'Введите цену за единицу товара';
                return errors;

            case 'Qty':
                if (Number(position.Qty) <= 0 || !position.Qty) errors.Qty = 'Введите количество товара';
                return errors;

            case 'Markup':
                if (position.Markup && Number(position.Markup) !== 0) {
                    if (Number(position.Markup) <= 0) errors.Markup = 'Введите наценку в процентах';
                }
                return errors;

            case 'Discount':
                if (position.Discount && Number(position.Discount) !== 0) {
                    if (Number(position.Discount) <= 0) errors.Discount = 'Введите скидку в процентах';
                    if (Number(position.Discount) >= 100) errors.Discount = 'Скидка не может быть 100% и более';
                }
                return errors;

            default:
                return errors;
        }
    }, {});
}
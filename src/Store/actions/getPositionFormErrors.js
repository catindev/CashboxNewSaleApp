export default function getPositionFormErrors(position) {
    return (Object.keys(position)).reduce((errors, key) => {
        switch (key) {
            case 'Name':
                if (position[key] === '') {
                    errors[key] = 'Введите наименование товара';
                }
                return errors;

            case 'Price':
                if (position[key] === '') errors[key] = 'Цена не должна быть пустой';
                if (typeof (position[key]) === 'number' && position[key] <= 0) errors[key] = 'Цена не может быть 0 и должна быть положительным числом';
                return errors;

            case 'Qty':
                if (position[key] === '' || (typeof (position[key]) === 'number' && position[key] <= 0)) errors[key] = 'Введите количество товара';
                if (typeof (position[key]) === 'number' && position[key] <= 0) errors[key] = 'Количество не может быть 0 и должно быть положительным числом';
                return errors;

            case 'Markup':
                if (position[key] !== '' && position[key] > 0) {
                    if (typeof (position[key]) === 'number' && position[key] <= 0) errors[key] = 'Наценка должна быть положительным числом';
                }
                return errors;

            case 'Discount':
                if (position[key] !== '' && position[key] > 0) {
                    if (typeof (position[key]) === 'number' && position[key] <= 0) errors[key] = 'Скидка должна быть положительным числом';
                    if (position[key] >= 100) errors[key] = 'Скидка не должна быть больше 100%';
                }
                return errors;

            default:
                return errors;
        }
    }, {});
}
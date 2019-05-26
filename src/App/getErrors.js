// Todo: Сумма сдачи не превышает сумму наличных в кассе

export default function getErrors(state) {
    const errors = [];
    const { Total, Cash, NonCash } = state;

    if (Total === 0)
        errors.push('Нужна хотя бы одна не сторнированная позиция');

    if (Cash === 0 && NonCash === 0)
        errors.push('Введите сумму полученную от клиента');

    if (NonCash > Total)
        errors.push('Сумма безналичных не должна превышать общую сумму к оплате');

    if ((NonCash + Cash) > 0 && (NonCash + Cash) < Total)
        errors.push('Внесённой суммы недостаточно');

    return errors;
}
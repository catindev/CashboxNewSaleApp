export const TOGGLE_POSITION_STORNO = 'Кассир сторнирует или отменяет сторно в предчеке';
export const CALCULATE_TOTAL = 'Приложение пересчитывает общую сумму к оплате';

export const toggleStorno = index => ({
    type: TOGGLE_POSITION_STORNO, index
});
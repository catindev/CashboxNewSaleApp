export const TOGGLE_POSITION_STORNO = 'Кассир сторнирует или отменяет сторно в предчеке';
export const CALCULATE_TOTAL = 'Приложение пересчитывает общую сумму к оплате и сдачу';

export const toggleStorno = index => ({
    type: TOGGLE_POSITION_STORNO, index
});

export const calculateTotal = () => (dispatch, getState) => {
    const { Positions, Cash, NonCash } = getState();

    const Total = Positions.reduce(
        (total, { Storno, Cost }) => Storno ? total : total + Cost, 0
    );

    const Change = Cash > 0 && Total > 0 ?
        (Cash + NonCash) > Total ? (Cash + NonCash) - Total : 0
        : 0;

    return dispatch({
        type: CALCULATE_TOTAL,
        Total, Change
    });
}
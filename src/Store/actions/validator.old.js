import livr from 'livr';

export default getErrors() {
    const validator = new livr.Validator({
        "Name": ["required", "not_empty"],
        "Price": ["required", "positive_integer"],
        "Markup": [{ "default": 0 }],
        "Discount": [
            { "number_between": [0, 99] },
            { "default": 0 }
        ],
        "Qty": [{ "min_number": 1 }, { "default": 1 }],
    });

    const validData = validator.validate({ ...Position });
    return validData ?
        { type: ADD_POSITION, Position }
        :
        { type: ADD_POSITION_ERROR, Position: validator.getErrors() }
}
import React from 'react';

class InputNumber extends React.Component {
    handleChange = e => {
        if (e.target.value === '') {
            e.target.value = 0;
            return this.props.OnChange(e)
        }

        if (/^\d+$/.test(e.target.value)) {
            e.target.value = parseInt(e.target.value)
            this.props.OnChange(e)
        } else e.preventDefault();
    }
    render() {
        const { className, id, name, value } = this.props;
        return (
            <input type="number"
                onChange={this.handleChange}
                {...{ className, id, name, value }} step="any" />
        );
    }
}

export default InputNumber;
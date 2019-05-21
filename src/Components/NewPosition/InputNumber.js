import React from 'react';

class InputNumber extends React.Component {
    onKeyDown = ({ keyCode, preventDefault }) =>
        (keyCode === '38' || keyCode === '40') && preventDefault();

    render() {
        let inputProps = { ...this.props };
        delete inputProps.onlydigits;
        return (
            <input type="number"
                pattern={this.props.onlydigits && navigator.userAgent.match(/iPhone|iPad|iPod/i) ? `[0-9]*` : ''}
                onKeyDown={this.onKeyDown} {...inputProps} />
        );
    }
}

export default InputNumber;
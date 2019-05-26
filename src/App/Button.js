import React from 'react';
import { bool, func } from 'prop-types';

const BigSaleButton = ({ onClick, isFetching }) => {
    const buttonType = isFetching ? 'secondary' : 'success';
    const buttonClass = `btn btn-${buttonType} btn-lg btn-block mt-4`;
    return (
        <button disabled={isFetching} onClick={onClick} className={buttonClass}>
            {isFetching ? (
                <span
                    className="spinner-border spinner-border-sm text-primary"
                    role="status"
                    aria-hidden="true"
                />
            ) : ('Оформить продажу')}
        </button>
    );
}

BigSaleButton.propTypes = {
    /**
     * Флаг отправки данных на сервер (для спинера)
     */
    isFetching: bool,
    /**
     * Коллбэк для нажатия
     */
    onClick: func.isRequired,
}

export default BigSaleButton;
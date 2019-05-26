import React, { Fragment } from 'react';
import { array, string, oneOf } from 'prop-types';

import './Alert.css';

const Alert = ({ Title, List = [], Type = "danger", children }) => List.length > 0 ?
    (
        <div className={`NewSale__alert alert alert-${Type} mb-3 shadow`} role="alert">
            <h5 className="alert-heading">{Title}</h5>
            {List.map((error, i) => <p key={i}>{error}</p>)}
            {children && (<Fragment><hr /><small>{children}</small></Fragment>)}
        </div>
    ) : null;

Alert.propTypes = {
    /**
     * Флаг отправки данных на сервер (для спинера)
     */
    Title: string.isRequired,
    /**
     * Тип сообщения
     */
    Type: oneOf(['success', 'danger', 'warning', 'info']),
    /**
     * Флаг отправки данных на сервер (для спинера)
     */
    List: array
}

export default Alert;
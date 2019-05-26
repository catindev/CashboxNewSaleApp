import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
    RESET_POSITION_ERRORS,
    POSITION_FORM_RESET,
    editPosition,
    validatePositionForm,
    calculatePosition,
    addPosition,
} from './NewPosition.actions';

import NewPosition from './NewPosition';

function getValue({ value, name }) {
    if (name === 'Name') return value;
    if (value === '') return 0;
    if (isNaN(value)) return 0;
    return parseInt(value)
}

class NewPositionContainer extends Component {

    change = ({ value, name }) => this.props.dispatch(
        editPosition({ [name]: getValue({ value, name }) })
    )

    submit = () => {
        const {
            PositionForm: Position, PositionFormErrors: Errors,
            Sections, Total, dispatch
        } = this.props;

        dispatch({ type: RESET_POSITION_ERRORS });

        dispatch(validatePositionForm(Position));

        dispatch(calculatePosition(Position, Errors, Sections));

        dispatch(addPosition(Position, Errors, Total));
    }

    reset = () => this.props.dispatch({ type: POSITION_FORM_RESET });

    render() {
        const {
            Sections,
            PositionForm = {},
            PositionFormErrors = {}
        } = this.props

        return (
            <Fragment>
                <NewPosition
                    Errors={PositionFormErrors}
                    Sections={Sections}
                    {...PositionForm}
                    OnChange={this.change}
                    OnSubmit={this.submit}
                    OnReset={this.reset} />
            </Fragment>
        );
    }
}

function mapState({ Sections, PositionForm, PositionFormErrors, Total }) {
    return { Sections, PositionForm, PositionFormErrors, Total }
}

export default connect(mapState)(NewPositionContainer)
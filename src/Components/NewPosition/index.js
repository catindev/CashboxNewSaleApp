import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
    ADD_POSITION_BUTTON,
    RESET_POSITION_ERRORS,
    addPosition,
    editPosition,
    positionFormReset
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
        editPosition({
            value: getValue({ value, name }),
            name
        })
    )

    submit = () => {
        this.props.dispatch({ type: ADD_POSITION_BUTTON })
        this.props.dispatch({ type: RESET_POSITION_ERRORS });
        this.props.dispatch(addPosition());
    }

    reset = () => this.props.dispatch(positionFormReset())

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

function mapState({ Sections, PositionForm, PositionFormErrors }) {
    return { Sections, PositionForm, PositionFormErrors }
}

export default connect(mapState)(NewPositionContainer)
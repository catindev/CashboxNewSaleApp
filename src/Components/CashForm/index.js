import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { editCashForm } from './CashForm.actions';
import CashForm from './CashForm';

function getValue(value) {
    if (value === '') return 0;
    if (isNaN(value)) return 0;
    return parseInt(value)
}

class CashFormContainer extends Component {

    change = ({ value, name }) => this.props.dispatch(
        editCashForm({ value: getValue(value), name })
    )

    render() {
        const { Cash, NonCash } = this.props
        return (
            <Fragment>
                <CashForm
                    Cash={Cash}
                    NonCash={NonCash}
                    OnChange={this.change} />
            </Fragment>
        );
    }
}

function mapState({ Cash, NonCash }) {
    return { Cash, NonCash }
}

export default connect(mapState)(CashFormContainer)
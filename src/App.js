import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import AppSettings from './Utils/Settings.json';

import {
  RESET_ERRORS,
  addPosition, editPosition,
  positionFormReset
} from './Store/actions/positions';
import { fetchSections } from './Store/actions/sections';
import { fetchDomains } from './Store/actions/domains';

import Precheck from './Components/Precheck/Precheck';
import NewPosition from './Components/NewPosition/NewPosition';


const ErrorMessage = ({ List = {} }) => Object.keys(List).length > 0 ?
  (
    <div className="NewPosition__alert alert alert-danger mb-4"
      role="alert">
      <h5 className="alert-heading">Ошибка</h5>
      {Object.keys(List).map((field, i) => <p key={i}>{List[field]}</p>)}
    </div>
  ) : null;

class App extends Component {
  componentDidMount() {
    const { IdKkm, Token } = this.props;
    const { API_URL } = AppSettings;

    this.props.dispatch(fetchSections({ IdKkm, Token, API_URL }));
    this.props.dispatch(fetchDomains({ IdKkm, Token, API_URL }));
  }

  change = newFormData => this.props.dispatch(editPosition(newFormData))
  submit = () => {
    this.props.dispatch({ type: RESET_ERRORS })
    this.props.dispatch(addPosition(this.props.PositionForm))
  }
  reset = () => this.props.dispatch(positionFormReset())

  render() {
    const {
      Sections,
      Positions = [],
      PositionForm = {},
      Errors = {}
    } = this.props

    return (
      <div className="container pt-4">
        <h1 className="h2 pt-3 pb-2 mb-5 border-bottom">Новая продажа</h1>
        <ErrorMessage List={Errors} />

        <div className="row">
          <div className="col-md-5 order-md-2 mb-5 ">
            <Precheck Positions={Positions} />
          </div>

          <div className="col-md-7 order-md-1 pr-3">
            <NewPosition
              Errors={Errors}
              Sections={Sections}
              {...PositionForm}
              OnChange={this.change}
              OnSubmit={this.submit}
              OnReset={this.reset} />
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return state
}

export default connect(mapState)(App)
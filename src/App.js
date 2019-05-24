import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import AppSettings from './Utils/Settings.json';

import {
  RESET_POSITION_ERRORS,
  addPosition, editPosition,
  positionFormReset
} from './Store/actions/positions';
import { fetchSections } from './Store/actions/sections';
import { fetchDomains } from './Store/actions/domains';

import Precheck from './Components/Precheck/Precheck';
import NewPosition from './Components/NewPosition/NewPosition';


const SysErrors = ({ List = [] }) => List.length > 0 ?
  (
    <div className="NewPosition__alert alert alert-danger mb-3"
      role="alert">
      <h5 className="alert-heading">Системные ошибки</h5>
      {List.map((error, i) => <p key={i}>{error}</p>)}
      <hr />
      <small>Проверьте соединение с интернетом и обновите страницу.<br />
        Если проблема повторится, то обратитесь за помощью в тех. поддержку
      </small >
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
    this.props.dispatch({ type: RESET_POSITION_ERRORS })
    this.props.dispatch(addPosition(this.props.PositionForm))
  }
  reset = () => this.props.dispatch(positionFormReset())

  render() {
    const {
      SystemErrors,
      Sections,
      PositionForm = {},
      PositionFormErrors = {}
    } = this.props

    return (
      <div className="container pt-4">
        <SysErrors List={SystemErrors} />
        <h1 className="h2 pt-3 pb-2 mb-5 border-bottom">Новая продажа</h1>

        <div className="row">
          <div className="col-md-5 order-md-2 mb-5 ">
            <Precheck />
          </div>

          <div className="col-md-7 order-md-1 pr-3">
            <NewPosition
              Errors={PositionFormErrors}
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
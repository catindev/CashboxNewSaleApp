import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import AppSettings from '../Utils/Settings.json';

import { fetchDomains, onDomainChange } from './domains.actions';
import { fetchSections } from './sections.actions';

import Precheck from '../Components/Precheck';
import NewPositionForm from '../Components/NewPosition';
import CashForm from '../Components/CashForm'
import Directory from '../Components/Common/Directory/Directory';


const SysErrors = ({ List = [] }) => List.length > 0 ?
  (
    <div className="NewPosition__alert alert alert-danger mb-3" role="alert">
      <h5 className="alert-heading">Системные ошибки</h5>
      {List.map((error, i) => <p key={i}>{error}</p>)}
      <hr />
      <small>
        Проверьте соединение с интернетом и обновите страницу.<br />
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

  onDomainChange = ({ target: { value } }) =>
    this.props.dispatch(onDomainChange(parseInt(value)));

  render() {
    const { SystemErrors, Domains, Domain } = this.props;
    return (
      <div className="container pt-4 pb-5">

        <SysErrors List={SystemErrors} />

        <h1 className="h2 pt-3 pb-2 mb-3 border-bottom">Новая продажа</h1>

        <div className="row">
          <div className="col-md-5 order-md-2 mb-5 ">
            <Precheck />
          </div>

          <div className="col-md-7 order-md-1 pr-3">
            <NewPositionForm />

            <div className="form-group border-top mt-4 pt-4 pb-3">
              <Directory Id="Domain" Label="Вид деятельности"
                Items={Domains} Selected={Domain}
                OnChange={this.onDomainChange} />
            </div>

            <CashForm />

            <hr className="mb-4" />
            <button className="btn btn-success btn-lg btn-block">
              Оформить продажу
            </button>
          </div>

        </div>
      </div>
    );
  }
}

function mapState({ SystemErrors, IdKkm, Token, Domains, Domain }) {
  return { SystemErrors, IdKkm, Token, Domains, Domain }
}

export default connect(mapState)(App)
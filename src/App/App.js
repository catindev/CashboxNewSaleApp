import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { API_URL } from '../Utils/Settings.json';

import { fetchDomains, onDomainChange } from './domains.actions';
import { fetchSections } from './sections.actions';
import { validateAndSavePrecheck } from './App.actions';

import Precheck from '../Components/Precheck';
import NewPositionForm from '../Components/NewPosition';
import CashForm from '../Components/CashForm'
import Directory from '../Components/Common/Directory/Directory';
import MainButton from './Button';
import Alert from '../Components/Common/Alert/Alert';

const DomainTitles = {
  "DOMAIN_TRADING": "Торговля",
  "DOMAIN_SERVICES": "Услуги",
  "DOMAIN_GASOIL": "ГСМ",
  "DOMAIN_HOTELS": "Отели",
  "DOMAIN_TAXI": "Такси",
  "DOMAIN_PARKING": "Парковка"
};


class App extends Component {

  componentDidMount() {
    const { IdKkm, Token } = this.props;

    this.props.dispatch(fetchSections({ IdKkm, Token, API_URL }));
    this.props.dispatch(fetchDomains({ IdKkm, Token, API_URL }));
  }

  onDomainChange = ({ target: { value } }) =>
    this.props.dispatch(onDomainChange(parseInt(value)));

  save = () => this.props.dispatch(validateAndSavePrecheck(API_URL));

  render() {
    const {
      SystemErrors, PrecheckErrors, Domains, Domain,
      PrecheckSaving, PrecheckSaved, Receipt
    } = this.props;
    const DomainsWithTitles = Domains.map(
      ({ Id, Name }) => ({ Id, Name: DomainTitles[Name] })
    );

    return (
      <div className="container pt-4 pb-5">

        <Alert Title="Системные ошибки" List={SystemErrors}>
          Проверьте подключение к интернету и попробуйте обновить страницу<br />
          Если проблема повторится, то обратитесь в техническую поддержку.
        </Alert>

        <h1 className="h2 pt-3 pb-2 mb-3 border-bottom">Новая продажа</h1>

        <div className="row">
          <div className="col-md-5 order-md-2 mb-5 ">
            <Precheck />
          </div>

          <div className="col-md-7 order-md-1 pr-3">
            <NewPositionForm />

            <div className="form-group border-top mt-4 pt-4 pb-2">
              <Directory Id="Domain" Label="Вид деятельности"
                Items={DomainsWithTitles} Selected={Domain}
                OnChange={this.onDomainChange} />
            </div>

            <CashForm />

            <div className="form-group border-top mt-4 pt-4 pb-3">
              <Alert Title="Ошибки оформления продажи" List={PrecheckErrors}>
                Исправьте ошибки и попробуйте оформить продажу ещё раз
              </Alert>

              {PrecheckSaved && (
                <Alert Title="Операция сохранена" Type="info"
                  List={['Продажа оформлена']}>
                  <a class="btn btn-primary btn-sm" href={Receipt} role="button">
                    <span role="img" aria-label="Receipt">🧾 </span>
                    Открыть чек
                  </a>
                </Alert>
              )}

              <MainButton onClick={this.save} isFetching={PrecheckSaving} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapState = ({
  SystemErrors, IdKkm, Token, Domains, Domain,
  PrecheckErrors, PrecheckSaving, PrecheckSaved,
  Receipt
}) => ({
  SystemErrors, IdKkm, Token, Domains, Domain,
  PrecheckErrors, PrecheckSaving, PrecheckSaved,
  Receipt
});

export default connect(mapState)(App)
import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import { addPosition, editPosition } from './Store/actions/positions';
import { fetchSections } from './Store/actions/sections';

import NewPosition from './Components/NewPosition/NewPosition'
import Position from './Components/Precheck/Position/Position';
import Total from './Components/Precheck/Total/Total';
import Header from './Components/Precheck/Header/Header';


class App extends Component {
  componentDidMount() {
    const { IdKkm, Token } = this.props;
    this.props.dispatch(fetchSections({ IdKkm, Token }));
  }

  change = newFormData => this.props.dispatch(editPosition(newFormData))

  render() {
    console.log('props', this.props)
    const { Sections, Positions = [], PositionForm = {} } = this.props

    return (
      <div className="container pt-4">
        <h1 className="h2 pt-3 pb-2 mb-5 border-bottom">Новая продажа</h1>

        <div className="row">
          <div className="col-md-5 order-md-2 mb-5 ">
            <Header Length={Positions.length} />
            <ul className="list-group mb-3">
              {Positions.map(i => <Position {...i} onClickStorno={() => { }} />)}
              <Total Total={123} Cash={456}
                NonCash={789} Change={0} />
            </ul>
          </div>

          <div className="col-md-7 order-md-1 pr-3">
            <NewPosition
              Sections={Sections}
              {...PositionForm}
              OnChange={this.change}
              OnSubmit={() => {
                this.props.dispatch(addPosition({
                  "Index": 1,
                  "Name": "Молочко",
                  "SectionName": "Без НДС",
                  "Price": 1000,
                  "Qty": 2,
                  "Discount": 10,
                  "Markup": 0,
                  "Storno": false
                }))
              }}
              OnReset={() => { }} />
          </div>
        </div>
      </div>
    );
  }
}

function mapState({ Sections, Positions, PositionForm }) {
  return { Sections, Positions, PositionForm }
}

export default connect(mapState)(App)
import React, { Component } from 'react';
import { connect, ReactReduxContext } from 'react-redux'
import './App.css';

import { addPosition } from './Store/actions';

import NewPosition from './Components/NewPosition/NewPosition'
import Position from './Components/Precheck/Position/Position';
import Total from './Components/Precheck/Total/Total';
import Header from './Components/Precheck/Header/Header';



const PrecheckState = {
  "Balances": {
    "Cash": 500,
    "NonCash": 5000
  },
  "Positions": [
    {
      "Index": 1,
      "Name": "Молочко",
      "SectionName": "Без НДС",
      "Price": 1000,
      "Qty": 2,
      "Discount": 10,
      "Markup": 0,
      "Storno": false
    },
    {
      "Index": 2,
      "Name": "Хлебушкек",
      "SectionName": "Товары с НДС",
      "Nds": true,
      "Price": 100,
      "Qty": 3,
      "Storno": true
    },
    {
      "Index": 1,
      "Name": "Сижки",
      "SectionName": "Товары с НДС",
      "Nds": true,
      "Price": 400,
      "Qty": 4,
      "Discount": 3,
      "Markup": 12,
      "Storno": false
    }
  ]
}

class App extends Component {


  render() {
    console.log('props', this.props)
    const { Positions } = this.props

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
              Errors={{}}
              Sections={[]}
              OnChange={() => { }}
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

function mapState({ Positions }) {
  return { Positions }
}

export default connect(mapState)(App)
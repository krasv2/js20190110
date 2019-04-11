import Table from '../Table/Table.js';

import Portfolio from '../Portfolio/Portfolio.js';

import TradeWidget from '../TradeWidget/TradeWidget.js';

import DataService from '../../services/DataService.js';

class App {
    constructor ({ element }) {
        this._el = element;
        
        this._userBalance = 0;

        this._render();

        this._data = DataService.getCurrencies();

        this._initTable();

        this._initPortfolio();

        this._initTradeWidget();
  
    }



    _initTable() {
        this._table = new Table({
            element: this._el.querySelector('[data-element="table"]'),
            data: this._data,
            onRowClick: (id) => {this._tradeItem(id);},
        })
    }

    _tradeItem(id) {
        const coin = this._data.find(c => c.id === id);
        //console.log(coin);
        this._tradeWidget.trade(coin);
    }

    _initPortfolio() {
        this._portfolio = new Portfolio({
            element: this._el.querySelector('[data-element="portfolio"]'),
            balance: this._userBalance
        })
    }

    _initTradeWidget() {
        this._tradeWidget = new TradeWidget({
            element: this._el.querySelector('[data-element="trade-widget"]')
        });

       
    }

    _render() {
        this._el.innerHTML = `
            <div class="row">
                <div class="col s12">
                    <h1>Tiny Crypto Market</h1>
                </div>
            </div>
            <div class="row portfolio-row">
                <div class="col s6 offset-s6" data-element="portfolio"></div>
            </div>
            <div class="row">
                <div class="col s12" data-element="table"></div>
            </div>
            <div data-element="trade-widget"></div>
        `;
    }
}

export default App;
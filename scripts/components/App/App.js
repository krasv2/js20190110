import Table from '../Table/Table.js';
import DataService from '../../services/DataService.js';

class App {
    constructor ({ element }) {
        this._el = element;
        
        this._render();

        this._data = DataService.getCurrencies();

        this._initTable();
    }



    _initTable() {
        this._table = new Table({
            element: this._el.querySelector('[data-element="table"]'),
            data: this._data
        })
    }

    _render() {
        this._el.innerHTML = `
            <div class="row">
                <div class="col s12">
                    <h1>Tiny Crypto Market</h1>
                </div>
            </div>
            <div class="row">
                <div class="col s12" data-element="table"></div>
            </div>
        `;
    }
}

export default App;
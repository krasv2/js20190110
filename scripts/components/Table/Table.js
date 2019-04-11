class Table {
    constructor ({ element, data, onRowClick }) {
        this._el = element;
        this._render(data);
        this._onRowClickCallback = onRowClick;

        this._el.addEventListener('click', e => this._onRowClick(e));

    }
    
_onRowClick(e) {
    const target = e.target.closest('tr');
    if (!target) return;
    
    //console.log(target.dataset.id);
    const id = target.dataset.id;
    
    if(id) {
        this._onRowClickCallback(id);
    };
    
}

_render(data) {
  this._el.innerHTML = `
      <table class="data-table highlight">
      <thead>
        <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Rank</th>
            <th>Price</th>
        </tr>
      </thead>

      <tbody>
      ${data.map(coin => `
      <tr data-id="${coin.id}">
        <td>${coin.name}</td>
        <td>${coin.symbol}</td>
        <td>${coin.rank}</td>
        <td>${coin.price}</td>
      </tr>
      `).join('')}  
      </tbody>

    </table>
     `;
}
}

export default Table;
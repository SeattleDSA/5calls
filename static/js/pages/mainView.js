const html = require('choo/html');
const store = require('../utils/localstorage.js');

const sidebar = require('../components/sidebar.js');
const content = require('../components/content.js');

module.exports = (state, prev, send) => {
  return html`
    <div id="root" class="layout container">
      <div class="row">
        <h1>DSA Call to Action <small>The revolution starts now.</small></h1>
      </div>
      <div class="row">      
      ${sidebar(state, prev, send)} 
      ${content(state, prev, send)}
      </div>
    </div>
  `;
}

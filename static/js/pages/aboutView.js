const html = require('choo/html');

const sidebar = require('../components/sidebar.js');
const about = require('../components/about.js');

module.exports = (state, prev, send) => {
  return html`
    <div id="root" class="layout">
    <div class="row header">
        <h1 class="txt-DSAwhite"><strong>DSA Call to Action</strong> <small class="txt-DSAgray">The revolution starts now.</small></h1>
     </div>
      <div class="row bg-DSAglass">     
      ${sidebar(state, prev, send)} 
      ${about(state, prev, send)}
      </div>
    </div>
  `;
}

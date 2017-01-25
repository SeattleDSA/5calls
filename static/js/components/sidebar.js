const html = require('choo/html');
const issues = require('./issues.js');

module.exports = (state, prev, send) => {
  return html`
    <aside role="contentinfo" class="layout__side col-md-4">
      ${issues(state, prev, send)}
    </aside>
  `;
}

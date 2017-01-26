const html = require('choo/html');

const issuesListItem = require('./issuesListItem.js');

module.exports = (state, prev, send) => {
  return html`
    <div class="btn-group-vertical issues-list" role="group">
      ${state.issues.map((issue) => issuesListItem(issue, state, prev, send))}
    </div>
  `;
}

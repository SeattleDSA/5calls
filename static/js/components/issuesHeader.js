const html = require('choo/html');

const issuesLocation = require('./issuesLocation.js');

module.exports = (state, prev, send) => {
  return html`
    <header class="${classString(state)}" role="banner">
      <h1 class="issues__title">
        <a href="http://www.seattledsa.org/"><img src="/img/seattledsa-logo.jpg" class="img-responsive" /></a>
      </h1>      
      <a href="/" class="btn btn-default btn-lg btn-block" onclick=${() => send('home')}><strong>View Active Issues</strong></a>
      ${issuesLocation(state, prev, send)} 
    </header>
  `;

  function classString(state) {
    const BASE_CLASS = 'issues__header';
    const ACTIVE_CLASS = 'is-active';

    let classes = [BASE_CLASS];

    state.location.params.issueid == null && classes.push(ACTIVE_CLASS);

    return classes.join(' ');
  }
}

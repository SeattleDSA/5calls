const html = require('choo/html');

const issuesLocation = require('./issuesLocation.js');

module.exports = (state, prev, send) => {
  return html`
    <header class="${classString(state)}" role="banner">
      <h1 class="issues__title">
        <a href="http://www.seattledsa.org/"><img src="/img/seattledsa-logo.jpg" class="img-responsive" /></a>
        <a href="/" onclick=${() => send('home')}>Active Issues</a>
      </h1>      
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

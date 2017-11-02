import React from 'react';
import ReactDOM from 'react-dom';
import BaseComponent from 'base-component';

import '../scss/app.scss';

export default class App extends BaseComponent {
  constructor(props) {
    super(props);
    window.performance.mark('navigationInteractive');
  }

  componentWillMount() {
    window.performance.mark('contentInteractive');
  }

  componentDidMount() {
    window.performance.mark('visuallyLoaded');
  }

  render() {
    return (
      <div id="app" tabIndex="-1">
        <h1 role="header" data-l10n-id="demo-title"></h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import StaticContent from './StaticContent/StaticContent';
import DynamicContent from './DynamicContent/DynamicContent';
import Specials from './Specials/Specials'

class App extends Component {
  render() {
    return (
      <div>
        <StaticContent />
        <DynamicContent />
        <Specials />
      </div>
    );
  }
}

export default App;

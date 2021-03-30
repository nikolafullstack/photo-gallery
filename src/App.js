import React from 'react';

import Flow from 'containers/Flow';
import {
  Header,
  Footer,
} from 'components';

function App() {
  return (
    <div className="app">
      <Header />
      <Flow />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';

import { AddBox, Search, Dashboard, Notifications } from '@material-ui/icons';

function Footer() {
  return (
    <div className="app-footer">
      <div className="app-footer__controls">
        <div className="app-footer__controls__search">
          <Search />
        </div>
        <div className="app-footer__controls__dashboard">
          <Dashboard />
        </div>
        <div className="app-footer__controls__notifications">
          <Notifications />
          <span>1</span>
        </div>
      </div>
      <div className="app-footer__add-button">
        <AddBox />
      </div>
    </div>
  );
}

export default Footer;

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getUsersRequestAction } from './actions/usersAction';

function App({ getUsersRequestAction }) {
  useEffect(() => {
    getUsersRequestAction();
  }, []);

  return (
    <div>
      ok
    </div>
  );
}

export default connect(
  null, {
    getUsersRequestAction,
  }
)(App);

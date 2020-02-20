import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  getUsersRequestAction,
  createUserRequestAction,
  deleteUserRequestAction,
} from './actions/usersAction';

import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App({
    getUsersRequestAction, users,
    createUserRequestAction,
    deleteUserRequestAction,
}) {
  useEffect(() => {
    getUsersRequestAction();
  }, []);


  const handleFormSubmit = userData => createUserRequestAction(userData);

  const handleUserDelete = userId => deleteUserRequestAction(userId);

  return (
    <div style={{ margin: '0 auto', padding: '32px', width: '800px' }}>
      <UserForm onSubmit={handleFormSubmit} />
      <UsersList users={users} onDelete={handleUserDelete} />
    </div>
  );
}

function mapSateToProps({ users }) {
  return { users: users.items };
}

export default connect(
  mapSateToProps, {
    getUsersRequestAction,
    createUserRequestAction,
    deleteUserRequestAction,
  }
)(App);

import React from 'react';

import { ListGroup, ListGroupItem, Button } from 'reactstrap';


function UsersList({ users, onDelete }) {
  return (
    <ListGroup>
      {
        users.sort((a, b) => {
          if (a.firstName > b.firstName) return 1;
          else return -1;
        }).map(user =>
          <ListGroupItem key={user.id}>
            <div style={{ display: 'flex' }}>
              <div style={{ flexGrow: 1, margin: 'auto 0' }}>
                { `${user.firstName} ${user.lastName}` }
              </div>
              <div>
                <Button outline color="danger" onClick={onDelete ? () => onDelete(user.id) : null}>
                  Delete
                </Button>
              </div>
            </div>
          </ListGroupItem>
        )
      }
    </ListGroup>
  );
}

export default UsersList;

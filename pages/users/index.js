import config from 'config';
import { useState, useEffect } from 'react';

import { Link } from "components";
import { userService } from "service";
import { useConfigContext, ConfigProvider } from "contexts/configContext";

const index = () => {
  const [users, setUsers] = useState(null);
  const {config} = useConfigContext(ConfigProvider);

  useEffect(() => {
    userService.getAll().then(resp => setUsers(resp));
  }, []);

  const deleteUser = (id) => {
    setUsers(users.map(user => {
      if (user.id == id) { user.isDeleting = true; }
      return user;
    }));

    userService.delete(id).then(() => {
      setUsers(users => users.filter(u => u.id !== id));
    });
  }

  return (
    <div>
      <h1>Users for {config.titleApplication}</h1>
      <Link href="/users/add" className="btn btn-sm btn-success mb-2">Add User</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Name</th>
            <th style={{ width: '30%' }}>UserName</th>
            <th style={{ width: '30%' }}>Email</th>
            <th style={{ width: '10%' }}></th>
          </tr>
        </thead>
        <tbody>
          {users && users.map(user =>
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td style={{ whiteSpace: 'nowrap' }}>
                <Link href={`/users/edit/${user.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className="btn btn-sm btn-danger btn-delete-user" disabled={user.isDeleting}>
                  {user.isDeleting
                    ? <span className="spinner-border spinner-border-sm"></span>
                    : <span>Delete</span>
                  }
                </button>
              </td>
            </tr>
          )}
          {!users &&
            <tr>
              <td colSpan="4" className="text-center">
                <div className="spinner-border spinner-border-lg align-center"></div>
              </td>
            </tr>
          }
          {users && !users.length &&
            <tr>
              <td colSpan="4" className="text-center">
                <div className="p-2">No Users To Display</div>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default index

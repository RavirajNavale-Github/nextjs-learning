import { useEffect, useState } from "react";
import axios from "axios";

const UserPage = () => {

  const [users, setUsers] = useState([]);
  // console.log('Users',users.data.users);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await axios.get('https://dummyjson.com/users');
    setUsers(data);
  }

  return(
    <div>
      <h1>Users</h1>
      {
        users && users.data && users.data.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))
      }
    </div>
  )
}

export default UserPage;
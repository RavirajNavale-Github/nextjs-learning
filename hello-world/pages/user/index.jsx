import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => axios.get(...args);

const UserPage = () => {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);

  console.log("data", data.data.users);
  console.log("error", error);

  if (error) {
    return <h1>Error Occured</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  // const [users, setUsers] = useState([]);
  // // console.log('Users',users.data.users);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   const data = await axios.get("https://dummyjson.com/users");
  //   setUsers(data);
  // };

  return (
    <div>
      <h1>--------------------------- All Users ---------------------------</h1>
      {/* {users &&
        users.data &&
        users.data.users.map((user) => (
          <Link href={`/user/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
          </Link>
        ))} */}

      {data &&
        data.data &&
        data.data.users.map((user) => (
          <Link href={`/user/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
};

export default UserPage;

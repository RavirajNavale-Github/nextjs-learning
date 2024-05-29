import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserInfo = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  console.log(user);

  useEffect(() => {
    getUserById();
  }, []);

  const id = router.query.id;
  //   console.log(id);

  const getUserById = async () => {
    const data = await axios.get(`https://dummyjson.com/users/${id}`);
    setUser(data.data);
  };

  return (
    <div>
      <h1>FirstName: {user?.firstName}</h1>
      <h1>LastName: {user?.lastName}</h1>
      <h1>Email: {user?.email}</h1>
      <h1>Username: {user?.username}</h1>
      <h1>Gender: {user?.gender}</h1>
    </div>
  );
};

export default UserInfo;

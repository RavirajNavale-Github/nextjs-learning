import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  return (
    <div>
      <h1>
        This is a Indes.js File in user dynamic folder for{" "}
        {router.query.username}
      </h1>

      {/*---------- .push() for redirecting to another page ----------*/}
      {/* <button onClick={(e) => {
          router.push(`/user/${router.query.username}/settings`)
        }}>Go to the Settings</button> */}

      {/*---------- .push() for redirecting to another page in another way ----------*/}
      <button
        onClick={(e) => {
          router.push({
            pathname: "/user/[username]/settings",
            query: { username: router.query.username },
          });
        }}
      >
        Go to the Settings
      </button>

      {/*---------- .replace() for redirecting to another page ----------*/}
      <button
        onClick={(e) => {
          router.replace(`/`);
        }}
      >
        Go to home
      </button>
    </div>
  );
};

export default User;

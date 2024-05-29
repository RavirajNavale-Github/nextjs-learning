import { useRouter } from "next/router";

const SettingsPage = () => {

    const router = useRouter();
    console.log(router)

    return (
      <div>
        <h1>This is a Settings Page for {router.query.username}</h1>
      </div>
    );
  };
  
  export default SettingsPage;
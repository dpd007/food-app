import { auth} from "../Service/FirebaseConfig";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});
  const history = useHistory();
  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("user signed out");
      history.push("/login");
    });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(() => {
          return {
            uid: user.displayName,
            name: user.displayName,
            email: user.email,
            phone: user.phoneNumber,
          };
        });
      }
    });
  }, []);
  return (
    <div className="home">
      <h2>Home page</h2>
      <h3>Hello, {user.name}</h3>
      <p>mail is {user.email}</p>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Home;

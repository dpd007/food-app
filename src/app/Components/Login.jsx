import { useEffect, useState } from "react";
import { auth, signInWithGoogle } from "../Service/FirebaseConfig";
import { useHistory } from "react-router";
const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        history.push("/home");
      } else {
        // console.log("user not signed in");
      }
    });
  }, [user]);
  console.log(user);
  return <button onClick={signInWithGoogle}>sign in with Google</button>;
};

export default Login;

import { auth, signInWithGoogle } from "../Service/FirebaseConfig";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  auth.onAuthStateChanged((user) => {
    if (user) {
      history.push("/home");
      // console.log("user signed in");
    } else {
    }
  });
  // console.log(user);
  return <button onClick={signInWithGoogle}>sign in with Google</button>;
};

export default Login;

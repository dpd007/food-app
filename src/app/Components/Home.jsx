import { logout } from "../Service/FirebaseConfig";
import { useHistory } from "react-router";
const Home = () => {
  const hist = useHistory();
  const handleLogout = () => {
    logout();
    hist.push("/login");
  };
  return (
    <div>
      <h2>Home page</h2>
      <h3>Hello</h3>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Home;

import Counter from "./components/Counter";
import store from "./Store";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const IsAuthenticated = useSelector((state) => state.auth.IsAuthenticated);

  return (
    <>
      <Header />
      {IsAuthenticated && <UserProfile />}
      {!IsAuthenticated && <Auth />}
      <Counter />;
    </>
  );
}

export default App;

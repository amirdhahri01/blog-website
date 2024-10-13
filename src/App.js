import "./App.css";
import Blogs from "./Components/Blogs";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import { selectSignedIn } from "./Features/userSlice";
import { useSelector } from "react-redux";
function App() {
  const isSignedIn = useSelector(selectSignedIn);
  return (
    <>
      <NavBar />
      <HomePage />
      {isSignedIn && <Blogs />}
    </>
  );
}

export default App;

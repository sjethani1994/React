import "./App.css";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Searchuser from "./components/Searchuser";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <div className="App">
      <h1>Github User Search.</h1>
      <BrowserRouter>
      <Routes>
        <Route element={<Searchuser />} path="/" />
        <Route element={<UserProfile />} path="/profile" />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

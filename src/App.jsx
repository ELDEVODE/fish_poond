import { RequireAuth } from "react-auth-kit";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<RequireAuth loginPath={"/login"}><Home /></RequireAuth>}
          // element={<Home />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;

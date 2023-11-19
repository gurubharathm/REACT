import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/login";
import About from "./pages/about";
import Dashboard from "./components/dashboard";
import Users from "./components/users";
import Settings from "./components/settings";

function App() {
  return (
    <>
      <div className="App"></div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;

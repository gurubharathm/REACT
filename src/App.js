import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ADMIN PAGES
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
// PUBLIC PAGES
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <div className="App"></div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage/>} />
          <Route index element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

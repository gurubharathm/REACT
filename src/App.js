import { BrowserRouter, Routes, Route } from "react-router-dom";

// ADMIN PAGES
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

// PUBLIC PAGES
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/react" element={<LoginPage />} />
          <Route index element={<LoginPage />} />
          <Route path="/logout" element={<LoginPage />} />
          <Route path="react/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;

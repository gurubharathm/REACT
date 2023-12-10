import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./common/AuthContext";
// ADMIN PAGES
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

// PUBLIC PAGES
import AboutPage from "./pages/AboutPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
    <>
      
      <div className="App">
        <AuthProvider>
      <BrowserRouter>
        <Routes>          
          <Route index element={<LoginPage />} />
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/react" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      </div>
    </>
  );
}

export default App;

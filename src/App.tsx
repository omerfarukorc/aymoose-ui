import "./App.css";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./themes/Theme";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import FootballCourts from "./pages/FootballCourts";
import CreateTeam from "./pages/CreateTeam";
import Footer from "./components/Footer";
import FootballCourtDetails from "./components/FootballCourtsDetails";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PasswordReset from "./components/PasswordReset";
import Support from "./pages/Support";
import Profil from "./pages/Profil";
import Reservations from "./pages/Reservations";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Header currentTheme={isDarkMode ? "dark" : "light"} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/fields" Component={FootballCourts}></Route>
        <Route path="/createteam" Component={CreateTeam}></Route>
        <Route path="/help" Component={Support}></Route>
        <Route path="/fields/field-details/:id" element={<FootballCourtDetails />} />
        <Route path="/login" Component={Login}></Route>
        <Route path="/signup" Component={SignUp}></Route>
        <Route path="/password-reset" Component={PasswordReset}></Route>
        <Route path="/Profil" Component={Profil}></Route>
        <Route path="/Reservations" Component={Reservations}></Route>
      </Routes>
      {location.pathname !== '/fields' && <Footer />}
    </ThemeProvider>
  );
}

export default App;

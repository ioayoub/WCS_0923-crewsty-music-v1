import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "./App.css";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="flex flex-row grow min-h-screen">
      <ThemeContextProvider>
        <Navbar />
        <Outlet />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

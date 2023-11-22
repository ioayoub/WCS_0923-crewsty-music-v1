import { NavLink } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

export default function Navbar() {
  const { theme, handleThemeChange } = useTheme();

  return (
    <div className="flex">
      <div className="flex flex-col h-full p-3 bg-white dark:bg-neutral-700 dark:text-white shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">CrewstyMusic 🎧</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="flex items-center p-2 space-x-3">
                <NavLink to="/">🏠</NavLink>
                <span>Home</span>
              </li>
              <li className="flex items-center p-2 space-x-3 ">
                <button type="button" onClick={handleThemeChange}>
                  {theme === "dark" ? "☀️" : "🌙"}
                </button>
                <span className="inline-block pl-[0.15rem] hover:cursor-pointer">
                  Theme
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

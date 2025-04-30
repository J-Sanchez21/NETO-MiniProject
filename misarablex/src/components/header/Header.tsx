import DarkModeButton from "./DarkModeButton";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-group">
        <div className="justify">
          <DarkModeButton />
        </div>

        <h1 className="header-title">Workout Finder App</h1>
      </div>
    </>
  );
};

export default Header;

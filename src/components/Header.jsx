import logo from "../assets/reactlogo.png";

function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="React logo" />
      <h1>THE REACT QUIZ</h1>
    </header>
  );
}

export default Header;

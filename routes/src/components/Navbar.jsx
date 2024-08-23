import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav id="navbar">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/purple">Purple</Link>
    </nav>
  );
};

export default Nav;

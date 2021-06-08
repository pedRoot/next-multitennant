import { NavLink, SelectTennant } from "components";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-link"> Home</NavLink>
        <NavLink href="/users" className="nav-item nav-link"> Users</NavLink>
      </div>
      {
        process.env.NODE_ENV == 'development' && <SelectTennant />
      }
    </nav>
  );
}

export { Nav };
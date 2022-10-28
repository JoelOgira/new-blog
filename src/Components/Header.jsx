import { Link } from "react-router-dom";
import Search from "./Search";

const Header = ({search, setSearch}) => {
    return (
    <header className="Header navbar navbar-expand-sm py-3">
        <div className="container">
            <div className="navbar-brand">
                <Link to='/'>Windfall Technologies</Link>
            </div>
            <ul className="navbar-nav ">
                <li className="nav-item">
                    <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/post' className="nav-link">New</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-link">About</Link>
                </li>
                <Search search={search} setSearch={setSearch} />
            </ul>
        </div>
    </header>
    )
}

export default Header;
import { Outlet, Link } from "react-router-dom";
import './index.scss'
const Header = () => {
    return (
        <>
            <nav className="header">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/staking">Staking</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Header;

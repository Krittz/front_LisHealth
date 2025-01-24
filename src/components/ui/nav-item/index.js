import './style.css';
import { Link } from "react-router-dom";
const NavItem = ({ active, icon, content, route }) => {
    return (
        <>
            <Link to={route} className={`nav-item ${active ? 'active' : ''} `}>
                <i className={`bx ${icon}`}></i>
                <span>{content}</span></Link>
        </>
    );
}

export default NavItem;
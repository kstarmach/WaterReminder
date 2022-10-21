import { Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from 'react-router-dom';

const SideBar = prop => {

    return (
        <Nav
            card
            pills
            // justified
            fill
            tabs
            vertical
            className="fs-5"
        >
            <NavItem>
                <NavLink
                    tag={RRNavLink}
                    to="/"
                    activeclassname="active"
                >
                    <i className="bi bi-house-heart-fill me-1"></i>
                    <span className="d-lg-none d-xl-block">Home</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={RRNavLink}
                    to="/stats"
                    activeclassname="active">
                    <i className="bi bi-bar-chart-fill me-1"></i>
                    <span className="d-lg-none d-xl-block">Stats</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    tag={RRNavLink}
                    to="/settings"
                    activeclassname="active"
                >
                    <i className="bi bi-gear-fill me-1"></i>
                    <span className="d-lg-none d-xl-block">Settings</span>
                </NavLink>
            </NavItem>
        </Nav>
    )
}

export default SideBar
import { Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from 'react-router-dom';

const SideBar = prop => {

    return (
        <>

            <Nav
                card
                pills
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
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        tag={RRNavLink}
                        to="/stats"
                        activeclassname="active">
                        <i className="bi bi-bar-chart-fill me-1"></i>
                        Stats
                    </NavLink>
                </NavItem>
                <NavItem className="d-md-block d-block d-xl-none">
                    <NavLink
                        tag={RRNavLink}
                        to="/settings"
                        activeclassname="active"
                    >
                        <i className="bi bi-gear-fill me-1"></i>
                        Settings
                    </NavLink>
                </NavItem>
            </Nav>
            <Nav
                card
                pills
                vertical
                className="fs-5 mb-3 d-none d-xl-block"
                style={{
                    position: "absolute",
                    width: "150px",
                    bottom: "0",

                }}
            >
                <NavItem>
                    <NavLink
                        tag={RRNavLink}
                        to="/settings"
                        activeclassname="active"
                    >
                        <i className="bi bi-gear-fill me-1"></i>
                        Settings
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default SideBar
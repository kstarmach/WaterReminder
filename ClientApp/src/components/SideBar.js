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

// import { Nav, NavLink, NavItem } from "reactstrap";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// const SideBar = prop => {
//     const [isDashboard, setIsDashboard] = useState(false)
//     const [isStats, setIsStats] = useState(false)
//     const [isSettings, setIsSettings] = useState(false)
//     const location = useLocation();
//     //const locationString = location.pathname
//     useEffect(() => {
//         if (location.pathname === '/') {
//             setIsDashboard(true)
//         }
//         if (location.pathname === '/stats') {
//             setIsStats(true)
//         }
//         if (location.pathname === '/settings') {
//             setIsSettings(true)
//         }
//     }, [])


//     return (
//         <Nav
//             card
//             pills
//             tabs
//             vertical
//             className="fs-5"
//         >
//             <NavItem>
//                 <NavLink
//                     className={isDashboard ? 'active' : ''}
//                     href="/"
//                 >
//                     <i className="bi bi-house-heart-fill me-1"></i> Dashboard
//                 </NavLink>
//             </NavItem>
//             <NavItem>
//                 <NavLink
//                     className={isStats ? 'active' : ''}
//                     href="/stats">
//                     <i className="bi bi-bar-chart-fill me-1"></i>Stats
//                 </NavLink>
//             </NavItem>
//             <NavItem>
//                 <NavLink
//                     className={isSettings ? 'active' : ''}
//                     href="/settings"
//                 >
//                     <i className="bi bi-gear-fill me-1"></i>Settings
//                 </NavLink>
//             </NavItem>
//         </Nav >
//     )
// }

// export default SideBar
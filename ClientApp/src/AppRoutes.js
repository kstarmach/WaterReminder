import Statistics from './Pages/Statistics/Statistics'
import WaterReminder from "./Pages/WaterReminder/WaterReminder";
import Settings from "./Pages/Settings/Settings";
import Profile from './Pages/Profile/Profile';
const AppRoutes = [
  {
    index: true,
    element: <WaterReminder />
  },
  {
    path: '/calculator',
    element: <Profile />
  },
  {
    path: '/stats',
    element: <Statistics />
  },
  {
    path: '/settings',
    element: <Settings />
  }
];

export default AppRoutes;

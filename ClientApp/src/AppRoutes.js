import { FetchData } from './Pages/Statistics/Statistics'
import WaterReminder from "./Pages/WaterReminder/WaterReminder";
import Settings from "./Pages/Settings/Settings";
const AppRoutes = [
  {
    index: true,
    element: <WaterReminder />
  },
  {
    path: '/stats',
    element: <FetchData />
  },
  {
    path: '/settings',
    element: <Settings />
  }
];

export default AppRoutes;

import { FetchData } from "./components/FetchData";
import WaterReminder from "./components/WaterReminder";
import Settings from "./components/Settings";
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

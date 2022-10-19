import { FetchData } from "./components/FetchData";
import WaterReminder from "./components/WaterReminder";

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
    element: <FetchData />
  }
];

export default AppRoutes;

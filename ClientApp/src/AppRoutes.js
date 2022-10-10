import { FetchData } from "./components/FetchData";
import WaterReminder from "./components/WaterReminder";

const AppRoutes = [
  {
    index: true,
    element: <WaterReminder />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;

import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import WaterReminder from "./components/WaterReminder";
import Timer from "./components/Timer";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/water-reminder',
    element: <WaterReminder />
  },
  {
    path: '/timer',
    element: <Timer />
  }
];

export default AppRoutes;

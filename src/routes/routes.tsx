import { Navigate, type RouteObject } from "react-router-dom";
import { routes as authRoutes } from "./auth-routes";
import PrivateRoute from "../components/auth/PrivateRoute";
import App from "../App";
import Home from "../components/dashboard/Home";
import MainContent from "../components/dashboard/MainContent";
import HistoryTable from "../components/history-table/HistoryTable";

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      ...authRoutes,
      {
        element: <PrivateRoute></PrivateRoute>,
        children: [
          {
            element: <Home />,
            children: [
              {
                path: "home",
                element: <MainContent />,
              },
              {
                path: "history-table",
                element: <HistoryTable />,
              },
            ],
          },
          {
            path: "/",
            element: <Navigate to="/home" />,
          },
          // Not Found Route
          {
            path: "*",
            element: <div>Not Found</div>,
          },
        ],
      },
    ],
  },
];

export { routes };

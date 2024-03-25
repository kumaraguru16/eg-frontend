import { RouteObject } from "react-router-dom";
import AuthBaseLayout from "../components/auth/AuthBaseLayout";
import Login from "../components/auth/Login";
import LoginBaseLayout from "../components/auth/LoginBaseLayout";
import SignUp from "../components/auth/Signup";

const routes: RouteObject[] = [
  {
    path: "auth",
    element: <AuthBaseLayout />,
    children: [
      {
        element: <LoginBaseLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
];

export { routes };

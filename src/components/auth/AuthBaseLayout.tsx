import { Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import ConditionalRoute from "./ConditionalRoute";

const AuthBaseLayout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // If the user is authenticated take the user to the dashboard page
  return (
    <ConditionalRoute condition={!isAuthenticated} fallbackPath="/">
      <Outlet />
    </ConditionalRoute>
  );
};

export default AuthBaseLayout;

import { Navigate, Outlet, useLocation } from "react-router-dom";

interface Props {
  condition: boolean;
  fallbackPath: string;
  children?: React.ReactNode;
}

const ConditionalRoute = ({ condition, fallbackPath, children }: Props) => {
  const location = useLocation();

  if (condition) {
    if (children) {
      return <>{children}</>;
    }

    return <Outlet />;
  }

  return <Navigate to={fallbackPath} state={{ fromPath: location.pathname }} />;
};

export default ConditionalRoute;

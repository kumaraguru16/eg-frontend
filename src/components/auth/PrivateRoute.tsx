import { useAuthStore } from "../../store/auth.store";
import ConditionalRoute from "./ConditionalRoute";

type Props = {
  children?: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <ConditionalRoute fallbackPath="/auth/login" condition={isAuthenticated}>
      {children}
    </ConditionalRoute>
  );
};

export default PrivateRoute;

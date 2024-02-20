import { ReactNode } from "react";
import { useAppSelector } from "../../redux/Hook";
import { useCurrentToken } from "../../redux/features/auth/AuthSlice";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  }

  return children;
};

export default ProtectedRoute;

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const { name, avatar } = useSelector(states => states.trainerName);

    // Verificar que el nombre tenga al menos 3 caracteres y que se haya seleccionado un avatar
    if (name.length >= 3 && avatar) {
        return <Outlet />;
    } else {
        return <Navigate to="/" />;
    }
}

export default ProtectedRoutes;

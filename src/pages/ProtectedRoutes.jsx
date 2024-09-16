import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
    const {trainerName} = useSelector(states => states)

    if(trainerName.length >= 3){
        return <Outlet />
    }else{

        }
    }

export default ProtectedRoutes
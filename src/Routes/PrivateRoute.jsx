import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation(); //children er path janar jonno

    //loding ta na thakle user ase kina seta check kore asar age e abar login page pathaye dey,
    // sei jonno pore user login e thakle o login page e rekhe dey
    //tai somadan jotokhon user ase kina seta check kore asbe na toto khon loding hote thakbe
    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user) {
        return children;
    }
    //user jothy na thake tahole take login page e niye jabe
    return <Navigate to='/login' state={{from:location}} replace></Navigate> //'state={{from:location}}'ei khane redirect kora hosse bole {{}} disi
};

export default PrivateRoute;
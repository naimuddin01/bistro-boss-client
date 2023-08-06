import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    //loding ta na thakle user er sase kina seta check kore asar age e abar login page pathaye dey,
    // sei jonno pore user login e thakle o login page e rekhe dey
    //tai somadan jotokhon user ase kina seta check kore asbe na toto khon loding hote thakbe
    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    //eikhane  check kortese user (admin naki normal user) tarpor je page e jete chasse setate pathasse 
    //isAdmin check korbe, admin na hoye jothy admin pare amon kno page e jete chay tahole if() er vitor duckbe na, Navigate take home page e niye jabe
    //eikhane asole hosse ke normal user r ke admin eita jante parbe
    if(user && isAdmin) { 
        return children;
    }
    //eikhane hosse normal user jothy admin kno page e jete chay tahole take home page e pathaye dibe
    return <Navigate to='/' state={{from:location}} replace></Navigate> //'state={{from:location}}'ei khane redirect kora hosse bole {{}} disi
    
};

export default AdminRoute;


/**
 * Admin er jonno security
 * 1.admin je route e jabe normal user seta deckte parbe na
 * 2.secarce box e route er url talikhe o jete parbe na
 * 3.
 */
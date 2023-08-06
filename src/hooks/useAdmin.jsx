import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loading} = useAuth();
    //backend theke token ane, seita localStorage e seve kore abar client side theke backend token pathano 
    //backend e token check kore result(401, 403) abar cliend e phanor kaj ei gullo sob useAxiosSecure er vitore korce
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log('is admin response', res) //axiosSecure await = korle e backend er data ke payo jay
            //res.data er vitore axios data ta pathay
            //res er vitore data tar vitore admin ta pathasse
            return res.data.admin; 
            
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
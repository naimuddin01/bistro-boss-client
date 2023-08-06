import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user, loading} = useContext(AuthContext);
    // const token = localStorage.getItem('access-token'); //locatstorage theke token ta nisce
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({ //useQuery amader web er kaj ke sohoj korar moto onek kisu e dey
    // queary key= queary holo data catch kora, catch er mane holo client side theke jokhon API er maddome server theke data niye ase thokhon queary key sei data ke catch kore
    // rekhe dey pore jokhon client side e data dorkar hoy tokhon r client side theke API ke call na kore e queary key Api ke Call kore sei data ta client side e diye dey
        queryKey: ['carts', user?.email], // 'carts=holo database e je naam e data rakha' carts & user?.email change hole autometic queryFn ke abar call korbe
        enabled: !loading,//authProvider er vitore token get korar jonno jwt ke call korce tai sekhane loading false hoyo porjonto eikhane opekkha kortece 
        //axiosSecure use na korle queryFn ta korle start  ====== amara simply useAxiosSecure() use kori na kintu eita theke axiosSecure ta valo
        //amra sudu token r email check kortece......ei porjonto 401/403 asle logOut hoye jabe ta kortece na.
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         //locastorage er token ta backend e pathasce.(amra ei khane get api ke call korce, get api er vitore o headers er vitore authorization pathano jay)
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json(); //backend er data ke json() kore upore data naam er veriable e disse
        // },
        //axiosSecure use na korle queryFn ta korbe end

        //axiosSecure use korle start
        //401/403 asle logOut hoye jabe ta kortece.
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
        //axiosSecure use korle end
    })
    return [cart, refetch] //useCart ke call korle eita gulo return pabe.
}
export default useCart;
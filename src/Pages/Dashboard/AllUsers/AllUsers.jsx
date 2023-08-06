import { FaUserShield, FaTrashAlt  } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const {data: users = [], refetch} = useQuery(['users'], async() => {
        // const res = await fetch('http://localhost:5000/users', {
        //     headers: {
        //         authorization: `bearer ${token}`
        //     }
        // })
        const res = await axiosSecure.get('/users') //'http://localhost:5000'useAxiosSecure er modde base ulr e save kore disi
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH' //amra ei fetch e sudu id ta pathasce, onno kno data pathasce na tai headers lagtese na
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDelete = () => {

    }
    return (
        <div className="w-full">
        <Helmet>
            <title>Bistro Boss | All users</title>
        </Helmet>
        <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>   
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ user.role === 'admin' ? 'admin' : //''admin' ? 'admin'' eitar mane admin jothy hoy tahole admin lekha dekhabe
                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600  text-white"><FaUserShield></FaUserShield></button> 
                                }</td>
                            <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllUsers;
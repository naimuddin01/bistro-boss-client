import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
const useMenu = () => {
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         })
    // }, [])

    //useQuery use kortece karon amader refetch ta lagbe
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey:['menu'],
        queryFn: async()=>{
            //token lagtese na bole amra 'useAxiosSecure' use kortece na
            //useQuery use kortece karon amader refetch ta lagbe
            const res = await fetch('http://localhost:5000/menu');
            return res.json();
        }
    })


    return [menu, loading, refetch] //useMenu ke import korle, je data gulo oykhane jabe seta return er vitore thakbe
}

export default useMenu;
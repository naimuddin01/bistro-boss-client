// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
const PopularMenu = () => {

    //useMenu hook bebohar kore ==== start
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    //useMenu hook bebohar kore ==== end

    //useMenu hook bebohar na  korle ==== start
    // const [menu, setMenu] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItem = data.filter(item => item.category === 'popular');
    //         setMenu(popularItem);
    //     })
    // }, [])
    //useMenu hook bebohar na  korle ==== end

    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Populer menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4  ">view Full Menu</button>
        </section>
    );
};

export default PopularMenu;
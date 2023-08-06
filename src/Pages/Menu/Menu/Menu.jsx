import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            {/* Main Cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu */}
            <MenuCategory items={offered}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={desserts} title="dessert" img={dessertImg}></MenuCategory>
            {/* drink menu items */}
            <MenuCategory items={drinks} title="drinks" img={dessertImg}></MenuCategory>
            
            
            
        </div>
    );
};

export default Menu;
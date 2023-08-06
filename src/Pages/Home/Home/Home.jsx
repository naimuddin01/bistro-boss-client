import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Fetured from "../Fetured/Fetured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Fetured></Fetured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feturedImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Fetured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                heading='Fetured Item'
                subHeading={"Check it out"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={feturedImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusamus, error architecto in modi doloribus, deserunt eos corporis esse atque, id rerum. Ex sed deleniti architecto, commodi officia voluptatibus repellendus nesciunt at iste saepe recusandae repudiandae ut incidunt exercitationem dolore consequuntur itaque. Vitae neque numquam, rem dolorum sed quis odit.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Fetured;
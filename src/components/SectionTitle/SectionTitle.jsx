
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
        <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
        {/* (border-y-4 py-4) heading er upor r nicher border er jonno */}
        <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
    );
};

export default SectionTitle;
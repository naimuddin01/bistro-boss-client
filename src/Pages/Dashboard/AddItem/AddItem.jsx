import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
//imgbb er token
const img_hosting_token=import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure();

    //imgbb ====img uploaded imbb er url
    // const img_hosting_url=`https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
    //img 10 sec por expiration hoye jascelo tai'expiration=600&' kete dibo
    const img_hosting_url=`https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    // 
    const onSubmit = data  => {
        console.log('fromdata',data);
        //img ke upload er age fromData kore nite hobe
        const formData = new FormData();
        //from data te img append kore
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST', //imgbb er uploader er url e post korte hobe
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log('Imagedata',imgResponse);
            if(imgResponse.success) {
                const imgURL = imgResponse.data.display_url;
                // console.log('imgURL',imgURL);
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log('newItem',newItem);

                //menuItem post kortece
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's new" heading="Add an item" ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Desi</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;



/** Image Hosting options 
 * 1. user je image dibe---seta amar server e folder kore image gulo rackte pari, pore folder er data ta file kore use korte pari
 * ------pblm: amar server site e jayga besi nite pare, karon user 5/6 mb er pic upload korte pare
 * ------pblm: security issu hote pare
 * 
 * 2.Image hosting service website ====best way
 * 3.mongoDb: emnitei soto khato icon er jonno use kore ...lagbe image er jonno use na kora e batter
 */
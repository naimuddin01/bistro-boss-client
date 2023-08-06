import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    //sudu refetch korle hobe na tar age koma dite hobe
    const [ , refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            } )
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            //Swal webside e ase
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => { //eikhane then ta Swal webside er vitore e celo
                if (result.isConfirmed) {
                    //eikhane page er location ta niye tarpor pathano hosse....redirect kortece na korle 'state={{from:location}}' eivabe ditam
                    navigate('/login', { state: { from: location } }) 
                }
            })
            //Swal webside e ase
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white">{price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>${recipe}</p>
                <div className="card-actions justify-end">
                    {/* jehetu click er moddome amra ekta data pathasce sei jonno eivabe '() => handleAddToCart(item)' kora */}
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
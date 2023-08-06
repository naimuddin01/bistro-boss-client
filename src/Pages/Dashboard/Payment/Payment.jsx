import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutFrom from "./CheckoutFrom";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_pk);
const Payment = () => {
    const [cart] = useCart();
    //reduce() er vitore 2 ta peramiter thakbe....1:callback function 2: initial value
    //(callback function) er vitore 2 ta peramiter thakbe 1.sum 2.item
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                {/* server side e price naam e distruction kore rack sei jonno */}
                <CheckoutFrom cart={cart} price={price}></CheckoutFrom>
            </Elements>

        </div>
    );
};

export default Payment;
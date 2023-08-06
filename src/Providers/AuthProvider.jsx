import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email, password);
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile (auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {  //user asole login ase ba login nei ei jinista check korbe 
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('currentUser',currentUser);
            //get and set token 
            //axios amader fetch er kaj ke sohoj kore dey, post er somoy amader method , header , tarpor data ke stringfy kore deyo lage na r o onek subida ase
            if(currentUser){
                axios.post('http://localhost:5000/jwt', {email: currentUser.email}) //'{email: currentUser.email}' = eita hosse amra je data ta pathate chasce seita 
                .then(data =>{
                    // console.log(data.data.token) //axios data er vitore data er modde backend er data ta pathay
                    localStorage.setItem('access-token', data.data.token) // backend theke asa token ta localStorage e save kortece.
                //setLoading ei khane deyor karon = 
                //user asar por user cart/menu jekno component e jete pare tokhon to token ta r passe na tai abar login page e pathaye dey tai loading state ta er vitore deyo hoy
                //user ke jokhon payo jabe tarpor  jwt theke token nibe tarpor localStorage e save korbe tarpor setLoading state  false korbo
                //kintu setLoading(false) set kora porjonto Api Call kora porjonto opekkha korbe na,...
                //tai amarder api call korar age loading er jonno opekkha korte hobe...r project er vitore....
                //(amra useCart er vitore loading ta set kora dorkar karon backend e /carts Api er vitore veryfuJWT ke call korce)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
        });
        return () => {
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


/** JWT TOKEN VERIFY STEPS
 * 
 * verify korbo 2 ta token same kina r login user er email r API call er somoy je email astese ei 2ta email same kina
 * 
 * 1.backend er ekta token create kore .env te save korte hobe
 * 2.backend theke sei token ke cliet side e pathate hobe, r client side theke current user er email ta nite hobe.(jwt API korbe)
 * 3.verifyJWT name ekta middleware toyri korte hobe = jar vitore client side theke ekta token payo jabe(req.headers.authorization) er vitorer, r
 *  login kora email payo jabe.
 * 4.verifyJWT function er kaj backend er token r client side theke asa token same kina deckbe
 * 5.amra jokhon kno API ke secure korte chaibo tokhon verifyJWT diye dibo
 * 
 * 1.client side e jokhon jwt API ke call korbo tokhon, ses e loading(false) kore dibo and je API ke call korle token dite hobe tar age (loadin na asa porjonto wait korbo),
 * karon jokhon jwt theke token anbo tokhon Api call hole sei api er vitore token dite parbo na, tai loading false kore dibo r api call korar age loading er jonno wait
 * korbo
 * 2.je API ke call korle clien side theke token dite hobe,sei aAPI ke call kore (headers.authorization) er modde token diye dibo
 */
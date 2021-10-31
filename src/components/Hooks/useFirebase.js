import initAuth from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initAuth();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const [error, setError] = useState({})


    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)


    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => {
                setError(error.message)
            });
    }
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setError("")
            }
        });
    }, [])
    return { logOut, loginWithGoogle, user, error }
}

export default useFirebase;
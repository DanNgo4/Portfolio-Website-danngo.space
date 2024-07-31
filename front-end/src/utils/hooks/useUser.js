import { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

// custom authentication hook
// checking if user is logged in or not on client side
const useUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => { // checks log in/out state
            setUser(user);                                          // user can be null or a firebase's user object
            setIsLoading(false);
        });
        
        return unsubscribe;
    }, []);

    return { user, isLoading };
};

export default useUser;
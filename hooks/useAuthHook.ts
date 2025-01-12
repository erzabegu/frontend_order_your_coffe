import { firebaseAuth } from "@/config/firebase";
import { useState, useEffect } from "react";

const useAuthHook = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                setIsUserAuthenticated(true);
            } else {
                setIsUserAuthenticated(false);
            }
        });

    }, []);

    return { isUserAuthenticated };
};

export default useAuthHook;

import { createContext, useState, useEffect, type ReactNode, useContext } from 'react';
import { auth } from "./firebase.ts";
import { onAuthStateChanged, type User as FirebaseUser } from 'firebase/auth';

interface AuthContextProps {
    currentUser: FirebaseUser | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextProps>({
    currentUser: null,
    loading: true,
});

// Rest of your code remains the same
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const value: AuthContextProps = { currentUser, loading };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
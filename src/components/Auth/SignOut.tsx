import React, { useState } from 'react';
import { auth } from './firebase.ts'
import { signOut } from "@firebase/auth";

const SignOut = () => {
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await signOut(auth);
        }catch(err){
            setError(err.message);
        }
    };

    return (
        <div>
            <button onClick={handleSubmit}>Sign Out</button>
        </div>
    );
};

export default SignOut;

import { auth } from './firebase.ts'
import { signOut } from "@firebase/auth";

const SignOut = () => {

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try{
            await signOut(auth);
        }catch(err){
            console.log(err);
        }
    };

    return (
        <div>
            <button onClick={handleSubmit}>Sign Out</button>
        </div>
    );
};

export default SignOut;

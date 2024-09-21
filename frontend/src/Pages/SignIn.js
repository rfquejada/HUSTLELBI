import { useOutletContext } from "react-router-dom";
import { useState } from "react";


function SignIn () {
    const {clients, freelancers, setSignedInUser} = useOutletContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    

    const handleSubmit = () =>
    {

    }

    return (
        <div>
            <form>

            </form>
        </div>
    )
}

export default SignIn
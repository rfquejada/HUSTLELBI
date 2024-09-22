import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function SignUp () {
    const {clients, freelancers, setSignedInUser, setFreelancers, setClients} = useOutletContext();
    const[free, setFree] = useState(false)
    const[cli, setCli] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const checkEmailValidity = (navigate) =>
    {
        let check = email.slice(-10)

        if (check !== "@up.edu.ph")
        {
            alert("Please enter a valid UP email address")
            navigate('/SignUp')
        }
    }
    const handleSubmit = (event, navigate) =>
    {
        event.preventDefault();

        checkEmailValidity(navigate);
        if (free)
        {
            const largestId = freelancers.reduce((maxId, freelancer) => Math.max(maxId, freelancer.id), 0);
            const new_freelancer = {
                id: largestId + 1,
                name: name,
                email: email,
                contact: contact,
                password: password
            }

            setFreelancers([...freelancers, new_freelancer])
            setName("");
            setEmail("")
            setContact("")
            setPassword("")
            navigate('/BuildFreelancer')
        }else if (cli)
        {
            const largestId = clients.reduce((maxId, client) => Math.max(maxId, client.id), 0);
            const new_client = {
                id: largestId + 1,
                name: name,
                email: email,
                contact: contact,
                password: password
            }

            setClients([...clients, new_client])
            setName("");
            setEmail("")
            setContact("")
            setPassword("")
            navigate('/BuildClient')
        }
    }

    return (
        <div className="signup-container">
            <form onSubmit={e => handleSubmit(e, navigate)}className="sign-upform">
                <h1 className="sign-uph">SIGN UP</h1>
                <div className="signupf">
                <div>
                <label className="signup-label">Name:</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label className="signup-label">Email:</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="signup-label">Contact:</label>
                    <input
                    type="text"
                    pattern="^09[0-9]{9}" placeholder="09XXXXXXXXX"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    />
                </div>

                <div>
                <label >Password:</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                </div>
                <div className="button-container">
                <button type="submit" onClick={() => setFree(true)}className="sign-upbutton">Freelancer</button>
            <button type="submit" onClick={() => setCli(true)}className="sign-upbutton">Client</button>
            </div>
            </form>
            <h1 className="become-a">BECOME A</h1>
            <h1 className="hustlebee"> HUSTLEBEE!</h1>
            
        </div>
    )
}

export default SignUp
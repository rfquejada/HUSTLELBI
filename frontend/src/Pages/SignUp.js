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
        <div>
            <form onSubmit={e => handleSubmit(e, navigate)}>
                <div>
                <label>Name:</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Contact:</label>
                    <input
                    type="text"
                    pattern="^09[0-9]{9}" placeholder="09XXXXXXXXX"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    />
                </div>

                <div>
                <label>Password:</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" onClick={() => setFree(true)}>Freelancer</button>
            <button type="submit" onClick={() => setCli(true)}>Client</button>
            </form>
            
        </div>
    )
}

export default SignUp
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function SignUp() {
    const { clients, freelancers, setFreelancers, setClients } = useOutletContext();
    const [free, setFree] = useState(false);
    const [cli, setCli] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const checkEmailValidity = (navigate) => {
        let check = email.slice(-10);
        if (check !== "@up.edu.ph") {
            alert("Please enter a valid UP email address");
            navigate('/SignUp');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        checkEmailValidity(navigate);
        if (free) {
            const largestId = freelancers.reduce((maxId, freelancer) => Math.max(maxId, freelancer.id), 0);
            const new_freelancer = {
                id: largestId + 1,
                name: name,
                email: email,
                contact: contact,
                password: password
            };
            setFreelancers([...freelancers, new_freelancer]);
            resetForm();
            navigate('/BuildFreelancer');
        } else if (cli) {
            const largestId = clients.reduce((maxId, client) => Math.max(maxId, client.id), 0);
            const new_client = {
                id: largestId + 1,
                name: name,
                email: email,
                contact: contact,
                password: password
            };
            setClients([...clients, new_client]);
            resetForm();
            navigate('/BuildClient');
        }
    };

    const resetForm = () => {
        setName("");
        setEmail("");
        setContact("");
        setPassword("");
    };

    return (
        <div className="bg-black shadow-lg px-6 py-4 flex flex-col items-start w-full h-screen overflow-y-auto overflow-x-hidden relative bg-cover bg-center" style={{ backgroundImage: "url('./assets/Rectangle 6.png')" }}>
            <form onSubmit={handleSubmit} className="bg-[#E3BB2F] shadow-lg rounded-[40px] absolute w-[652px] h-[737px] left-[16px] top-[-10px] flex flex-col items-center justify-center mt-[30px]">
                <h1 className="absolute w-[200px] h-[39px] left-[251px] top-[51px] text-[#0E0D0A] font-bold text-[40px] leading-[70px]">SIGN UP</h1>
                <div className="flex flex-col w-full px-40">
                    <div>
                        <label className="block text-sm font-medium mb-2">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border border-[#E7E4D3] rounded-[12px] px-4 py-2 mb-4  w-full"


                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-[#E7E4D3] rounded-[12px] p-2 mb-4 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Contact:</label>
                        <input
                            type="text"
                            pattern="^09[0-9]{9}" placeholder="09XXXXXXXXX"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="border border-[#E7E4D3] rounded-[12px] p-2 mb-4 w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-[#E7E4D3] rounded-[12px] p-2 mb-4 w-full"
                        />
                    </div>
                </div>
                <div className="flex justify-center space-x-4 mt-4 w-full">
                    <button type="submit" onClick={() => setFree(true)} className="bg-black text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:ring focus:ring-blue-300">Freelancer</button>
                    <button type="submit" onClick={() => setCli(true)} className="bg-black text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:ring focus:ring-blue-300">Client</button>
                </div>
            </form>
            <h1 className="absolute w-[547px] h-[46px] right-[100px] top-[40px] text-right text-[#FDFCFC] font-bold text-[60px] leading-[46px]">BECOME A</h1>
            <h1 className="absolute w-[467px] h-[97px] right-[150px] top-[86px] text-right text-[#E3BB2F] font-extrabold text-[90px] leading-[107px] italic">HUSTLEBEE!</h1>
        </div>
    );
}

export default SignUp;

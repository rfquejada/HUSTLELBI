import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function SignUp() {
    const { clients, freelancers, setFreelancers, setClients } = useOutletContext();
    const [isFreelancer, setIsFreelancer] = useState(true); // Toggle between Freelancer and Client
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const checkEmailValidity = () => {
        let check = email.slice(-10);
        if (check !== "@up.edu.ph") {
            alert("Please enter a valid UP email address");
            return false;
        }
        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!checkEmailValidity()) return;

        if (isFreelancer) {
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
        } else {
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
        <div className="font-[sans-serif] h-full"
            style={{
                backgroundImage: "url('./assets/Rectangle 6.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                backgroundColor: "#474105",
            }}
        >
            <div className="grid md:grid-cols-2 items-center h-full">
                <div className="flex flex-col justify-end items-start p-8 h-full">
                    <h1 className="text-4xl font-extrabold text-white">BECOME A</h1>
                    <h1 className="text-6xl font-extrabold text-[#E3BB2F]">HUSTLEBEE!</h1>
                </div>

                <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full" style={{ backgroundColor: "#1E1E1E" }}>
                    <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
                        <h3 className="text-4xl font-extrabold text-[#E3BB2F] text-center mb-6">SIGN UP</h3>

                        <div className="mb-4">
                            <label className="text-xs block mb-2 text-[#E3BB2F]">Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-xs block mb-2 text-[#E3BB2F]">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-xs block mb-2 text-[#E3BB2F]">Contact</label>
                            <input
                                type="text"
                                pattern="^09[0-9]{9}" placeholder="09XXXXXXXXX"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                                className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-xs block mb-2 text-[#E3BB2F]">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Toggle buttons for Freelancer or Client */}
                        <div className="flex justify-center space-x-4 mt-4 w-full">
                            <button
                                type="button"
                                onClick={() => setIsFreelancer(true)}
                                className={`w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white ${
                                    isFreelancer ? 'bg-[#E3BB2F]' : 'bg-gray-400'
                                } hover:bg-[#d6a73f]`}
                            >
                                Freelancer
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsFreelancer(false)}
                                className={`w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white ${
                                    !isFreelancer ? 'bg-[#E3BB2F]' : 'bg-gray-400'
                                } hover:bg-[#d6a73f]`}
                            >
                                Client
                            </button>
                        </div>

                        {/* Sign Up button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-6 mt-6 text-sm font-semibold tracking-wider rounded-full text-white bg-[#E3BB2F] hover:bg-[#d6a73f]"
                        >
                            Sign Up
                        </button>

                        <p className="text-white text-sm mt-4 text-center">
                            Already have an account?
                            <a href="/SignIn" className="text-[#E3BB2F] font-semibold hover:underline ml-1 whitespace-nowrap">Sign In Here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

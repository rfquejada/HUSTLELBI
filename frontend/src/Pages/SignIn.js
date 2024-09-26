import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";
import rectangleImage from '../assets/Rectangle 3.png';
import logoImage from '../assets/HUST__2_-removebg-preview 2.png';

function SignIn() {
    const { clients, setSignedInUser } = useOutletContext();  // Fetch clients and the function to set the signed-in user
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");  // To store sign-in error messages

    const navigate = useNavigate();  // To navigate after successful sign-in

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if email and password match any client in the list
        const user = clients.find(client => client.email === email && client.password === password);

        if (user) {
            // User found, set signed-in user
            setSignedInUser(user);
            navigate(`/`);  // Navigate to the user's profile page
        } else {
            // If no match, set an error message
            setError("Invalid email or password.");
        }
    };

    return (
        <div
            className="font-[sans-serif] md:h-screen h-full"
            style={{
                backgroundImage: `url(${rectangleImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                backgroundColor: "#474105",
            }}
        >
            <div className="grid md:grid-cols-2 items-center h-full">
                <div className="flex flex-col justify-end items-start p-8 h-full">
                    <h3 className="leading-tight text-white">
                        <span className="text-4xl font-extrabold">READY TO</span><br />
                        <span className="text-6xl font-extrabold" style={{ color: "#E3BB2F" }}>HUSTLE?</span>
                    </h3>
                </div>

                <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full" style={{ backgroundColor: "#1E1E1E" }}>
                    <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-6 text-center">
                            <img src={logoImage} alt="Logo" className="mx-auto w-150 h-70" />
                        </div>

                        <div className="mb-12 text-left">
                            <h3 className="text-4xl font-extrabold" style={{ color: "#E3BB2F" }}>SIGN IN</h3>
                        </div>

                        <div>
                            <label className="text-xs block mb-2" style={{ color: "#E3BB2F" }}>Email</label>
                            <div className="relative flex items-center">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}  // Update email state
                                    name="email"
                                    type="text"
                                    required
                                    className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                                    placeholder="Enter email"
                                />
                            </div>
                        </div>
                        <div className="my-6 flex items-center gap-4">
                            <hr className="w-full" style={{ borderColor: "#E3BB2F" }} />
                        </div>
                        <div className="mt-8">
                            <label className="text-xs block mb-2" style={{ color: "#E3BB2F" }}>Password</label>
                            <div className="relative flex items-center">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}  // Update password state
                                    name="password"
                                    type="password"
                                    required
                                    className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-3 outline-none"
                                    placeholder="Enter password"
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-500 mt-4">{error}</p>} {/* Display error message */}

                        <div className="mt-12 text-center">
                            <button
                                type="submit"
                                className="w-full py-3 px-6 text-sm font-semibold tracking-wider rounded-full text-white"
                                style={{ backgroundColor: "#E3BB2F" }}
                            >
                                Sign in
                            </button>
                            <p className="text-white text-sm mt-4">
                                Don't have an account?
                                <a href="/SignUp" className="text-[#E3BB2F] font-semibold hover:underline ml-1 whitespace-nowrap">
                                    Register here
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;

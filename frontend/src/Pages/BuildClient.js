import { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

import rectangleImage from '../assets/Rectangle 3.png'; 
import logoImage from '../assets/HUST__2_-removebg-preview 2.png'; 

function BuildClient() {
    const { freelancers, clients, setClients } = useOutletContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [img, setImage] = useState("");
    const [service_type, setServiceType] = useState([]);
    
    const largestId = clients.reduce((maxId, client) => Math.max(maxId, client.id), 0);
    const uniqueServiceTypes = [...new Set(freelancers.flatMap(freelancer => freelancer.service_type))];
    const navigate = useNavigate();

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setServiceType((prevType) =>
            prevType.includes(value)
                ? prevType.filter((type) => type !== value)
                : [...prevType, value]
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setClients((currentClients) => {
            const updateList = [...currentClients];
            updateList[largestId - 1] = {
                ...updateList[largestId - 1],
                average_rating: 0,
                img: img,
                service_type: service_type,
            };
            return updateList;
        });

        setName("");
        setEmail("")
        setContact("")
        setImage("")
        navigate('/')
    };

    return (
        <div
            className="font-[sans-serif] min-h-screen"
            style={{
                backgroundImage: `url(${rectangleImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: "#474105",
            }}
        >
            <div className="grid md:grid-cols-2 h-screen"> 
                <div className="flex items-start md:p-4 p-6 bg-white md:rounded-tr-[55px] md:rounded-br-[55px] h-full" style={{ backgroundColor: "#1E1E1E" }}>
                    <form className="max-w-md w-full mx-auto " onSubmit={handleSubmit}>
                        <div className="mb-14 text-center">
                            <img src={logoImage} alt="Logo" className="mx-auto w-100 h-50" />
                        </div>

                        <div className="mb-10 text-center">
                            <h3 className="text-3xl font-extrabold" style={{ color: "#E3BB2F" }}>Client Info</h3>
                        </div>

                        <div>
                            <label className="text-xs block mb-2" style={{ color: "#E3BB2F" }}>Image URL</label>
                            <input
                                type="text"
                                value={img}
                                onChange={(e) => setImage(e.target.value)}
                                className="w-full text-sm border-b border-gray-300 focus:border-gray-800 px-2 py-2 outline-none"
                                placeholder="Enter image URL"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="text-xs block mb-2" style={{ color: "#E3BB2F" }}>Service Type(s) You Usually Hire</label>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {uniqueServiceTypes.map((type, index) => (
                                    <div key={index} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value={type}
                                            onChange={handleCheckboxChange}
                                            className="mr-2"
                                        />
                                        <label className="font-bold text-white">{type}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 text-sm font-semibold tracking-wider rounded-full text-white"
                                style={{ backgroundColor: "#E3BB2F" }}
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex flex-col justify-start items-end p-8 h-full">
                    <h3 className="leading-tight text-white text-right">
                        <span className="text-4xl font-extrabold">BUILD YOUR</span><br />
                        <span className="text-6xl font-extrabold" style={{ color: "#E3BB2F" }}>CLIENT PROFILE</span>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default BuildClient;

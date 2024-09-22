import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function BuildFreelancer() {
    const { freelancers, setFreelancers } = useOutletContext();
    const [img, setImage] = useState("");
    const [age, setAge] = useState(0);
    const [rate, setRate] = useState(0);
    const [location, setLocation] = useState("");
    const [service_type, setServiceType] = useState([]);
    const [avail, setAvail] = useState([]);

    const uniqueServiceTypes = [...new Set(freelancers.flatMap(freelancer => freelancer.service_type))];
    const availChoices = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const largestId = freelancers.reduce((maxId, freelancer) => Math.max(maxId, freelancer.id), 0);
    const navigate = useNavigate();

    const handleAvailChange = (event) => {
        const value = event.target.value;
        setAvail((prevAvail) =>
            prevAvail.includes(value)
                ? prevAvail.filter((type) => type !== value)
                : [...prevAvail, value]
        );
    };

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
        setFreelancers((currentFreelancers) => {
            const updateList = [...currentFreelancers];
            updateList[largestId - 1] = {
                ...updateList[largestId - 1],
                img: img,
                average_rating: 0,
                age: age,
                rates: rate,
                location: location,
                service_type: service_type,
                usual_availability: avail,
            };
            return updateList;
        });
        setImage("");
        setAge(0);
        setRate(0);
        setLocation("");
        setServiceType([]);
        setAvail([]);
        navigate('/');
    };

    return (
        <div className="signup-container bg-black p-6">
            <h1 className="absolute w-[800px] h-[97px] left-[614px] top-[86px] text-right text-[#ffffff] font-extrabold text-[60px] leading-[230px] ">
                Build your 
            </h1>
            <h1 className="freelancer absolute w-[800px] h-[97px] left-[614px] top-[86px] text-right text-[#E3BB2F] font-extrabold text-[70px] leading-[380px] italic">
                Freelancer Profile
            </h1>

            <form onSubmit={handleSubmit} className="bg-[#E3BB2F] shadow-lg rounded-[40px] p-6 flex flex-col w-[652px]">
                <h1 className="text-lg font-bold text-gray-700 mb-4 px-20 text-center">Freelancer</h1>

                <div className="flex flex-col gap-4 px-12">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mt-4">Image URL:</label>
                        <input
                            type="text"
                            value={img}
                            onChange={(e) => setImage(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E7E4D3] rounded-[12px]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mt-4">Age:</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E7E4D3] rounded-[12px]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mt-4">Rate per hour:</label>
                        <input
                            type="number"
                            value={rate}
                            placeholder="PHP xxx /hour"
                            onChange={(e) => setRate(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E7E4D3] rounded-[12px]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mt-4">Location:</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="mt-1 block w-full p-2 border border-[#E7E4D3] rounded-[12px]"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mt-4">Service Type(s):</label>
                    <div className="flex flex-wrap gap-6 mt-2">
                        {uniqueServiceTypes.map((type, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={type}
                                    onChange={handleCheckboxChange}
                                    className="mr-3"
                                />
                                <label className="font-bold">{type}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mt-4">Availability:</label>
                    <div className="flex flex-col gap-2 mt-2">
                        {availChoices.map((type, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={type}
                                    onChange={handleAvailChange}
                                    className="mr-3"
                                />
                                <label className="font-bold w-[150px] text-left">{type}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="button-container mt-5 w-full flex justify-center">
                    <button type="submit" className="bg-black text-white font-bold py-2 px-9 rounded-2xl focus:outline-none focus:ring focus:ring-blue-300">
                        Create Account
                    </button>
                </div>

            </form>
        </div>
    );
}

export default BuildFreelancer;

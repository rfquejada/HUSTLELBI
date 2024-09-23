import { useState } from "react";
import OfferJob from "../Components/OfferJob";
import FreelancerCompleted from "../Components/FreelancerCompleted";
import DirectOffer from "../Components/DirectOffer";

function FreelancerProfile(props) {
    const user = props.user;
    const offerJob = props.show;
    const setShowOfferJob = props.setShowOfferJob;
    const jobPostings = props.jobPostings;
    const signedInUser = props.signedInUser;
    const uniqueServiceTypes = props.uniqueServiceTypes;
    const setJobPostings = props.setJobPostings;
    const fHistory = props.fHistory;
    const clients = props.clients;
    const [showCompleted, setShowCompleted] = useState(true);
    const [showOffers, setShowOffers] = useState(false);

    return (
        <div className="w-full min-h-full bg-[#E9E6C7] p-6 rounded-3xl">
            <div className="flex">
                {/* Left Container */}
                <div className="flex flex-col items-center bg-[#1E1E1E] p-4 rounded-3xl shadow-md w-1/3 mr-4">
                <img
                        src={user.img ? user.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuxUOcfaNIa_PZ2zgpCjwtS6ziiwb0tAZJg&s"}
                        alt="Freelancer Profile"
                        className="w-44 h-44 rounded-xl object-cover mt-4 mb-2 border-4 border-yellow-400"
                    />

                    <h1 className="text-3xl font-extrabold text-yellow-400">{user.freelancer.name}</h1>
                    <p className="text-lg text-yellow-400">Average Rating: {user.freelancer.average_rating}</p>
                    
                    {/* Offer Job Button */}
                    <div className="flex justify-center my-4">
                        <button
                            className="bg-yellow-400 text-black px-4 py-2 rounded-lg shadow hover:bg-yellow-600 font-bold w-48"
                            onClick={() => setShowOfferJob(true)}
                        >
                            Offer Job
                        </button>
                    </div>
                    <div className="my-3 flex items-center">
                        <hr className="w-full" style={{ borderColor: "yellow-400", borderWidth: "1px" }} />
                    </div>
                    {/* OfferJob Component */}
                    {offerJob ? (
                        <OfferJob
                            direct={setShowOffers}
                            show={setShowOfferJob}
                            offer={user.freelancer.id}
                            jobs={jobPostings}
                            setJobs={setJobPostings}
                            user={signedInUser}
                            type={uniqueServiceTypes}
                        />
                    ) : null}
                </div>

                {/* Right Container */}
                <div className="flex flex-col w-2/3">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2 inter">Beelancer Profile</h2>
                    <div className="my-3 flex items-center">
                        <hr className="w-full" style={{ borderColor: "#1E1E1E", borderWidth: "1px" }} />
                    </div>

                    {/* Contact Details */}
                    <div className="my-1">
                        <h3 className="text-xl font-bold text-gray-800">Contact Details:</h3>
                        <ul className="list-disc list-inside">
                            <li>Email: <span className="font-bold text-lg text-black">{user.freelancer.email}</span></li>
                            <li>Contact: <span className="font-bold text-lg text-black">{user.freelancer.contact}</span></li>
                        </ul>
                    </div>

                    {/* Freelancer Rates and Location */}
                    <div className="my-4">
                        <h3 className="text-xl font-bold text-gray-800">Freelancer Rates and Location:</h3>
                        <p className="text-lg text-gray-800">Rates: <span className="font-bold">{user.freelancer.rates}</span></p>
                        <p className="text-lg text-gray-800">Location: <span className="font-bold">{user.freelancer.location}</span></p>
                    </div>

                    {/* Service Types and Usual Availability */}
                    <div className="flex flex-col my-2">
                        <div className="flex-1 flex items-center">
                            <h3 className="text-xl font-bold text-gray-800 mr-2">Service Type:</h3>
                            <div className="flex items-start">
                                {user.freelancer.service_type.map((service, index) => (
                                    <div 
                                        key={index} 
                                        className="bg-black rounded-2xl px-2 py-0.5 mx-1"
                                    >
                                        <h2 className="text-s font-semibold text-white">
                                            {service}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex-1 flex items-center mt-4"> {/* Added mt-4 for margin */}
                            <h3 className="text-xl font-bold text-gray-800 mr-2">Usual Availability:</h3>
                            <div className="flex items-start">
                                {user.freelancer.usual_availability.map((availability, index) => (
                                    <div 
                                        key={index} 
                                        className="bg-black rounded-2xl px-2 py-0.5 mx-1"
                                    >
                                        <h2 className="text-s font-semibold text-white">
                                            {availability}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="my-6">
                <hr className="border-gray-600" />
            </div>

            {/* Buttons for Completed Jobs and Direct Offers */}
            <div className="flex justify-center space-x-4 my-6">
                <button
                    className={`px-4 py-2 rounded-lg font-bold ${showCompleted ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-gray-800'}`}
                    onClick={() => {
                        setShowOffers(false);
                        setShowCompleted(true);
                    }}
                >
                    Completed Jobs
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-bold ${showOffers ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-gray-800'}`}
                    onClick={() => {
                        setShowCompleted(false);
                        setShowOffers(true);
                    }}
                >
                    Direct Offers
                </button>
            </div>

            {/* FreelancerCompleted and DirectOffer Components */}
            <div className="mt-4">
                {showCompleted ? (
                    <FreelancerCompleted
                        setJobPostings={setJobPostings}
                        jobPostings={jobPostings}
                        clients={clients}
                        fHistory={fHistory}
                    />
                ) : null}

                {showOffers ? (
                    <DirectOffer
                        show={setShowOffers}
                        setJobPostings={setJobPostings}
                        jobPostings={jobPostings}
                        userId={user.freelancer.id}
                        clients={clients}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default FreelancerProfile;

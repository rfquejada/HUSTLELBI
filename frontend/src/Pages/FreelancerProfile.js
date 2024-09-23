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
        <div className="w-full min-h-full bg-yellow-400 p-6 rounded-3xl"> {/* Adjusted height */}
            {/* Freelancer Image */}
            <div className="flex flex-col items-center">
            <img
                src={user.img ? user.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBuxUOcfaNIa_PZ2zgpCjwtS6ziiwb0tAZJg&s"}
                alt="Freelancer Profile"
                className="w-44 h-44 rounded-full object-cover mb-4 border-4 border-[#1E1E1E]" // Adjust border color and size as needed
            />
                <h1 className="text-3xl font-extrabold text-gray-800">{user.freelancer.name}</h1>
                <p className="text-lg text-gray-600">Average Rating: {user.freelancer.average_rating}</p>
            </div>

            {/* Offer Job Button */}
            <div className="flex justify-center my-4">
            <button
                className="bg-[#1E1E1E] text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 font-bold w-48" // Adjusted width
                onClick={() => setShowOfferJob(true)}
            >
                Offer Job
            </button>
            </div>
            <div className="my-3 flex items-center">
                <hr className="w-full" style={{ borderColor: "#1E1E1E", borderWidth: "1px" }} /> {/* Adjust the borderWidth as needed */}
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

            {/* Contact Details */}
            <div className="my-6">
                <h3 className="text-xl font-bold text-gray-800">Contact Details:</h3>
                <ul className="text-gray-600">
                    <li>Email: {user.freelancer.email}</li>
                    <li>Contact: {user.freelancer.contact}</li>
                </ul>
            </div>

            {/* Freelancer Rates and Location */}
            <div className="my-6">
                <p className="text-lg text-gray-800">Rates: {user.freelancer.rates}</p>
                <p className="text-lg text-gray-800">Location: {user.freelancer.location}</p>
            </div>

            {/* Service Types */}
            <div className="my-6">
                <h3 className="text-xl font-bold text-gray-800">Service Type:</h3>
                <ul className="text-gray-600">
                    {user.freelancer.service_type.map((type, index) => (
                        <li key={index}>{type}</li>
                    ))}
                </ul>
            </div>

            {/* Usual Availability */}
            <div className="my-6">
                <h3 className="text-xl font-bold text-gray-800">Usual Availability:</h3>
                <ul className="text-gray-600">
                    {user.freelancer.usual_availability.map((avl, index) => (
                        <li key={index}>{avl}</li>
                    ))}
                </ul>
            </div>

            {/* Buttons for Completed Jobs and Direct Offers */}
            <div className="flex justify-center space-x-4 my-6">
                <button
                    className={`px-4 py-2 rounded-lg font-bold ${
                        showCompleted ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-gray-800'
                    }`}
                    onClick={() => {
                        setShowOffers(false);
                        setShowCompleted(true);
                    }}
                >
                    Completed Jobs
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-bold ${
                        showOffers ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-gray-800'
                    }`}
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

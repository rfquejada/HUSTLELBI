import { useState } from "react";
import ClientCompleted from '../Components/ClientCompleted';
import ClientOnProgress from '../Components/ClientOnProgress';
import OfferList from '../Components/OfferList';

function ClientProfile(props) {
    const jobPostings = props.jobPostings;
    const setJobPostings = props.setJobPostings;
    const setFreelancers = props.setFreelancers;
    const freelancers = props.freelancers;
    const user = props.user;
    const cHistory = props.cHistory;
    const [showCompleted, setShowCompleted] = useState(true);
    const [showInProgress, setInProgress] = useState(false);
    const [showAwaiting, setShowAwaiting] = useState(false);

    return (
        <div className="w-full min-h-full bg-[#E9E6C7] p-6 rounded-3xl">
            <div className="flex">
                {/* Left Container */}
                <div className="flex flex-col items-center bg-[#1E1E1E] p-4 rounded-3xl shadow-md w-1/3 h-2/3 mr-4">
                    <img
                        src={user.client.img ? user.client.img : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"}
                        alt="Client Profile"
                        className="w-44 h-44 rounded-xl object-cover mt-4 mb-2 border-4 border-yellow-400"
                    />
                    <h1 className="text-3xl font-extrabold text-yellow-400">{user.client.name}</h1>
                    <p className="text-lg text-yellow-400 mb-24">Average Rating: {user.client.average_rating}</p>
                </div>

                {/* Right Container */}
                <div className="flex flex-col w-2/3">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">Client Profile</h2>
                    <div className="my-3 flex items-center">
                        <hr className="w-full" style={{ borderColor: "#1E1E1E", borderWidth: "1px" }} />
                    </div>

                    {/* Contact Details */}
                    <div className="my-1">
                        <h3 className="text-xl font-bold text-gray-800">Contact Details:</h3>
                        <ul className="text-gray-600">
                            <li>Email: <span className="font-bold text-lg text-black">{user.client.email}</span></li>
                            <li>Contact: <span className="font-bold text-lg text-black">{user.client.contact}</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="my-6">
                <hr className="border-gray-600" />
            </div>

            {/* Buttons for Job Status */}
            <div className="flex justify-center space-x-4 my-6">
                <button
                    className={`px-4 py-2 rounded-lg font-bold ${showCompleted ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-gray-800'}`}
                    onClick={() => {
                        setShowCompleted(true);
                        setInProgress(false);
                        setShowAwaiting(false);
                    }}
                >
                    Completed Jobs
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-bold ${showInProgress ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-gray-800'}`}
                    onClick={() => {
                        setShowCompleted(false);
                        setInProgress(true);
                        setShowAwaiting(false);
                    }}
                >
                    Jobs in Progress
                </button>
                <button
                    className={`px-4 py-2 rounded-lg font-bold ${showAwaiting ? 'bg-yellow-600 text-white' : 'bg-gray-300 text-gray-800'}`}
                    onClick={() => {
                        setShowCompleted(false);
                        setInProgress(false);
                        setShowAwaiting(true);
                    }}
                >
                    Awaiting
                </button>
            </div>

            {/* ClientCompleted, ClientOnProgress, and OfferList Components */}
            <div className="mt-4">
                {showCompleted && <ClientCompleted freelancers={freelancers} clientJobs={cHistory} />}
                {showInProgress && <ClientOnProgress user={user.client.id} setFreelancers = {setFreelancers} freelancers={freelancers} jobPostings={jobPostings} setJobPostings={setJobPostings} />}
                {showAwaiting && <OfferList user={user.client.id} freelancers={freelancers} jobPostings={jobPostings} setJobPostings={setJobPostings} />}
            </div>
        </div>
    );
}

export default ClientProfile;

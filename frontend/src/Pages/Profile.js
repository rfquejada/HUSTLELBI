import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import OfferJob from "../Components/OfferJob";
import FreelancerProfile from "./FreelancerProfile";
import ClientProfile from "./ClientProfile";

function Profile() {
    let { id } = useParams();
    const { clients, freelancers, jobPostings, setJobPostings, signedInUser, uniqueServiceTypes, setClients, setFreelancers } = useOutletContext();
    const [user, setUser] = useState({ freelancer: null, client: null });
    const [show, setShow] = useState(true);
    const [fHistory, setfHistory] = useState([]);
    const [cHistory, setcHistory] = useState([]);
    const [offerJob, setShowOfferJob] = useState(false);

    const findUserById = (_id) => {
        console.log("Finding user with ID:", _id); // Debugging log
        const freelancer = freelancers.find((freelancer) => freelancer.id === _id);
        const client = clients.find((client) => client.id === _id);
        console.log("Freelancer:", freelancer, "Client:", client); // Debugging log
        setUser({ freelancer: freelancer || null, client: client || null });
        accessHistory(freelancer, client);
    };

    const accessHistory = (freelancer, client) => {
        if (freelancer) {
            const f_history = jobPostings.filter((jobs) => jobs.completed === true && jobs.freelancerId === freelancer.id);
            setfHistory(f_history);
        }
        if (client) {
            const c_history = jobPostings.filter((jobs) => jobs.completed === true && jobs.clientId === client.id);
            setcHistory(c_history);
        }
    };

    useEffect(() => {
        if (id) {
            findUserById(parseInt(id, 10));
        }
    }, [id]);

    return (
        <div className="min-h-screen bg-yellow-400 p-6">
            {user.freelancer && user.client ? (
                <div className="max-w-7xl mx-auto bg-[#1E1E1E] p-6 rounded-3xl shadow-lg min-h-full">
                    <div className="flex justify-between mb-4">
                        <button className={`bg-[#1E1E1E] text-black px-4 py-2 rounded-lg shadow hover:bg-yellow-600 font-bold w-48 ${show ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-800"}`} onClick={() => setShow(true)}>
                            Freelancer Profile
                        </button>

                        <button className={`bg-[#1E1E1E] text-black px-4 py-2 rounded-lg shadow hover:bg-yellow-600 font-bold w-48 ${show ? "bg-gray-200 text-gray-800" : "bg-yellow-400 text-black"}`} onClick={() => setShow(false)}>
                            Client Profile
                        </button>
                    </div>

                    {show ? (
                        <FreelancerProfile
                            clients={clients}
                            setClient={setClients}
                            fHistory={fHistory}
                            user={user}
                            show={offerJob}
                            setShowOfferJob={setShowOfferJob}
                            jobPostings={jobPostings}
                            setJobPostings={setJobPostings}
                            signedInUser={signedInUser}
                            uniqueServiceTypes={uniqueServiceTypes}
                        />
                    ) : (
                        <ClientProfile
                            jobPostings={jobPostings}
                            setJobPostings={setJobPostings}
                            clients={clients}
                            freelancers={freelancers}
                            setFreelancers = {setFreelancers}
                            cHistory={cHistory}
                            user={user}
                        />
                    )}
                </div>
            ) : user.freelancer ? (
                <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg min-h-full">
                    <FreelancerProfile
                        clients={clients}
                        setClient={setClients}
                        fHistory={fHistory}
                        user={user}
                        show={offerJob}
                        setShowOfferJob={setShowOfferJob}
                        jobPostings={jobPostings}
                        setJobPostings={setJobPostings}
                        signedInUser={signedInUser}
                        uniqueServiceTypes={uniqueServiceTypes}
                    />
                </div>
            ) : user.client ? (
                <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg min-h-full">
                    <ClientProfile
                        jobPostings={jobPostings}
                        setJobPostings={setJobPostings}
                        clients={clients}
                        freelancers={freelancers}
                        setFreelancers = {setFreelancers}
                        cHistory={cHistory}
                        user={user}
                    />
                </div>
            ) : (
                <div className="max-w-2xl mx-auto bg-red-100 p-4 rounded-lg text-center min-h-full">
                    <h3 className="text-xl font-bold text-red-600">User not found</h3>
                </div>
            )}
        </div>
    );
}

export default Profile;

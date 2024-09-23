import { useState } from "react";
import WriteReview from "./WriteReview";
import { Link } from "react-router-dom";

function FreelancerCompleted(props) {
    const jobPostings = props.jobPostings;
    const setJobPostings = props.setJobPostings;
    const clients = props.clients;
    const fHistory = props.fHistory;
    const [showWrite, setShowWriteReview] = useState(null);

    // Check if there are no completed jobs
    if (fHistory.length === 0) {
        return null; // Render nothing if there are no completed jobs
    }

    return (
        <div className="mt-4 flex flex-col space-y-4">
            <div className="overflow-y-auto h-[400px]"> {/* Set a fixed height and overflow */}
                {fHistory.map((job) => {
                    const client = clients.find(client => client.id === job.clientId);
                    return (
                        <div 
                            className="flex w-full p-6 rounded-3xl mb-4" // Added mb-4 for margin between cards
                            style={{ backgroundColor: '#1E1E1E' }} 
                            key={job.id}
                        >
                            <div className="flex space-x-4">
                                <div className="flex flex-col items-center w-[150px] flex-shrink-0">
                                    <img 
                                        src={client?.img ? client.img : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"} 
                                        alt={client?.name || "Unregistered"} 
                                        className="h-[120px] w-[120px] rounded-xl object-cover object-center"
                                    />
                                    <Link 
                                        to={`/profile/${client?.id}`} 
                                        className="text-yellow-400 text-center mt-2 hover:underline"
                                    >
                                        {client ? client.name : "Unregistered"}
                                    </Link>
                                </div>

                                <div className="flex-grow text-yellow-400">
                                    <h1 className="text-2xl font-bold">{job.title}</h1>
                                    <h3 className="text-sm text-yellow-100">Client Rating: {job.ratingClient}</h3>
                                    <h3 className="text-sm text-yellow-100">Client Review:</h3>
                                    <p className="text-sm text-yellow-100">{job.ClientReview}</p>
                                    {!job.FreelancerReview && (
                                        <div>
                                            <h5 className="text-yellow-200">Notice: You have not reviewed your client for this job.</h5>
                                            <button 
                                                onClick={() => setShowWriteReview(job.id)} 
                                                className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded-md"
                                            >
                                                Review client
                                            </button>               
                                            {showWrite === job.id && (
                                                <WriteReview 
                                                    show={setShowWriteReview} 
                                                    jobPostings={jobPostings} 
                                                    setJobPostings={setJobPostings} 
                                                    job={job} 
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="my-3 flex items-center">
                                <hr className="w-full" style={{ borderColor: "#E3BB2F" }} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FreelancerCompleted;

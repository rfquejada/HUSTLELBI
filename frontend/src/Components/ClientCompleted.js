import { Link } from "react-router-dom";

function ClientCompleted(props) {
    const history = props.clientJobs;
    const freelancers = props.freelancers;

    // Check if there are no completed jobs
    if (history.length === 0) {
        return null; // Render nothing if there are no completed jobs
    }

    return (
        <div className="mt-4 flex flex-col space-y-4">
            <div className="overflow-y-auto h-[400px]"> {/* Set a fixed height and overflow */}
                {history.map((job) => {
                    const freelancer = freelancers.find(freelancer => freelancer.id === job.freelancerId);
                    return (
                        <div 
                            className="flex w-full p-6 rounded-3xl mb-4" // Added mb-4 for margin between cards
                            style={{ backgroundColor: '#1E1E1E' }} 
                            key={job.id}
                        >
                            <div className="flex space-x-4">
                                <div className="flex flex-col items-center w-[150px] flex-shrink-0">
                                    <img 
                                        src={freelancer?.img ? freelancer.img : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"} 
                                        alt={freelancer?.name || "Unregistered"} 
                                        className="h-[120px] w-[120px] rounded-xl object-cover object-center"
                                    />
                                    <Link 
                                        to={`/profile/${freelancer.id}`} 
                                        className="text-yellow-400 text-center mt-2 hover:underline"
                                    >
                                        {freelancer ? freelancer.name : "Unregistered"}
                                    </Link>
                                </div>

                                <div className="flex-grow text-yellow-400">
                                    <h1 className="text-2xl font-bold">{job.title}</h1>
                                    <h3 className="text-sm text-yellow-100">Freelancer Rating: {job.ratingFree}</h3>
                                    <h3 className="text-sm text-yellow-100">Freelancer's Review:</h3>
                                    <p className="text-sm text-yellow-100">{job.FreelancerReview || "Awaiting freelancer's review to client"}</p>
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

export default ClientCompleted;

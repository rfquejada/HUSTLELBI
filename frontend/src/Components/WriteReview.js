import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function WriteReview (props)
{
    const jobPostings = props.jobPostings
    const setJobPostings = props.setJobPostings
    const job = props.job
    const show = props.show
    const [review, setReview] = useState("")
    const [rating, setRating] = useState(0)
    const navigate = useNavigate()
    const clients = props.clients;
    const setClient = props.setClient;


    
    const handleRatingChange = (jobList) => {
        const jobAssoc = jobList.filter((jobs) => 
            jobs.completed === true && job.clientId === jobs.clientId && jobs.ratingFree
        );

        console.log(jobAssoc)

        const clientIndex = clients.findIndex(client => client.id === job.clientId);
        if (clientIndex === -1) return; 

        const totalRating = jobAssoc.reduce((sum, item) => sum + parseInt(item.ratingFree), 0);
        const average_rating = jobAssoc.length > 0 ? totalRating / jobAssoc.length : 0;
    
        console.log(totalRating)
        console.log(average_rating)
        setClient(currentClientList => {
            const updatedClientList = [...currentClientList];
            const clientToUpdate = updatedClientList[clientIndex];

            clientToUpdate.average_rating = average_rating; 
    
            return updatedClientList;
        });
    };

    const handleSubmit = async(event, navigate) =>
    {
        event.preventDefault();

        const updatedJobPostings = jobPostings.map((jobItem) => {
            if (jobItem.id === job.id) {
                return { ...jobItem, ratingFree: rating, FreelancerReview: review };
            }
            return jobItem;
        });
    
        // Update job postings state
        setJobPostings(updatedJobPostings);
        handleRatingChange(updatedJobPostings); // Calculate the new average rating
    
        setReview("")
        setRating(0)
        show(null);
        navigate(`/`);
    }

    const handleCancel = (event) =>
    {
        event.preventDefault(); 
        show(null)
    }

 
    return(
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-yellow-400 text-black border-gray-900 border-4 rounded-3xl p-10 w-full max-w-xl shadow-xl flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-6 text-center">Review Your Client</h1>
                    <form onSubmit={e => handleSubmit(e, navigate)} >
                    <div className = "flex items-center justify-center space-x-2 mb-1">
                        <label className="block font-semibold mb-1 text-lxl">Rating:</label>
                        <input
                            type="number"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            max="5"
                            min="0"
                            className="w-20 p-1 border border-gray-400 rounded-xl focus:ring focus:ring-green-400"
                        />
                    </div>

                    <div className="mb-4 mt-4">  
                        <textarea
                        type="textarea"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="w-full p-20 border border-gray-400 rounded-3xl mb-4"
                        placeholder="      Write a review..." 
                        ></textarea>
                    </div>
                    

                    <div className="flex justify-center space-x-4">
                        <button 
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded-3xl shadow hover:bg-green-700 transition"
                        > Post
                            
                        </button>
                        <button 
                        onClick={() => handleCancel()}
                        className="bg-red-600 text-white px-4 py-2 rounded-3xl shadow hover:bg-red-700 transition"
                        > Cancel
                        </button>
                    </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default WriteReview
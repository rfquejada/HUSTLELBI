import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Archive (props) 
{

    const freelancers = props.freelancers
    const setFreelancers = props.setFreelancers
    const jobPostings = props.jobPostings
    const setJobPostings = props.setJobPostings
    const job = props.job
    const show = props.show
    const [review, setReview] = useState("")
    const [rating, setRating] = useState(0)
    const navigate = useNavigate()


    const handleRatingChange = (jobList) => {
        const jobAssoc = jobList.filter((jobs) => 
            jobs.completed === true && job.freelancerId === jobs.freelancerId && jobs.ratingClient
        );

        console.log(jobAssoc)

        const freelancerIndex = freelancers.findIndex(freelancer => freelancer.id === job.freelancerId);
        if (freelancerIndex === -1) return; 

        const totalRating = jobAssoc.reduce((sum, item) => sum + parseInt(item.ratingClient), 0);
        const average  = jobAssoc.length > 0 ? totalRating / jobAssoc.length : 0;
        const average_rating = Math.round(average * 100) / 100
        console.log(totalRating)
        console.log(average_rating)
        setFreelancers(currentFreeList => {
            const updatedFreeList = [...currentFreeList];
            const freeToUpdate = updatedFreeList[freelancerIndex];
            freeToUpdate.average_rating = average_rating; 
            return updatedFreeList;
        });
    };

    const handleSubmit = async(event, navigate) =>
    {
        event.preventDefault();

        const updatedJobPostings = jobPostings.map((jobItem) => {
            if (jobItem.id === job.id) {

                let update = { ...jobItem, ratingClient: rating, ClientReview: review }
                update.completed = true
                return update ;
            }
            return jobItem;
        });
        
        console.log(updatedJobPostings)
        // Update job postings state
        setJobPostings(updatedJobPostings);
        handleRatingChange(updatedJobPostings); // Calculate the new average rating

        setReview("")
        setRating(0)
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
            <h1  className="text-3xl font-bold mb-6 text-center">Job Completed! Write a review for your hired freelancer. </h1>
            <form onSubmit={e => handleSubmit(e, navigate)} >
                <div className = "flex items-center justify-center space-x-2 mb-1">
                    <label className="block font-semibold mb-1 text-2xl">Rating:</label>
                    <input
                    type="number"
                    min = "0"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-20 p-1 border border-gray-400 rounded-xl text-2xl focus:ring focus:ring-green-400"
                    />
                </div>

                <div  className="mb-4 mt-4">
                <label>Review:</label>
                    <textarea
                    type="textarea"
                    value={review}
                    className="w-full p-20 border border-gray-400 rounded-3xl mb-4"
                    placeholder="      Write a review..." 
                    onChange={(e) => setReview(e.target.value)}
                    > </textarea>
                </div>

                <div className="flex justify-center space-x-4">
                    <button type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-3xl shadow hover:bg-green-700 transition"
                    > Submit </button>
                    <button onClick={(e) => handleCancel(e)}
                        className="bg-red-600 text-white px-4 py-2 rounded-3xl shadow hover:bg-red-700 transition"> Cancel </button>
                </div>

            </form>
            </div>
            </div>
        </div>
    )

}

export default Archive
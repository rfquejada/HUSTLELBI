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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
       
            <h1>Job Completed! Write a review for your client. </h1>
            <form onSubmit={e => handleSubmit(e, navigate)} >
                <div>
                    <label>Rating:</label>
                    <input
                    type="number"
                    value={rating}
                    min = "0"
                    max="5"
                    onChange={(e) => setRating(e.target.value)}
                    />
                </div>

                <div>
                <label>Review:</label>
                    <textarea
                    type="textarea"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    > </textarea>
                </div>

                <button type="submit"> Submit </button>
                <button onClick={(e) => handleCancel(e)}> Cancel </button>

            </form>
        </div>
    )
}

export default WriteReview
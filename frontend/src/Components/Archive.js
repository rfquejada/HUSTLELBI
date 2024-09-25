import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Archive (props) 
{
    const jobPostings = props.jobPostings
    const setJobPostings = props.setJobPostings
    const job = props.job
    const show = props.show
    const [review, setReview] = useState("")
    const [rating, setRating] = useState(0)
    const navigate = useNavigate()
    const handleSubmit = async(event, navigate) =>
    {
        event.preventDefault();

        let i = 0
        for (let j = 0; j < jobPostings.length; j++) {
            if (jobPostings[j].id === job.id) {
                i = j
                break;
            }
        }
        setJobPostings((currentJobList) =>{
            const updateList = [...currentJobList]
            updateList[i] = {...updateList[i],ratingClient: rating, ClientReview:review}
            updateList[i].completed = true
            return updateList
        })

        setReview("")
        setRating(0)
        navigate('/')
    }
    const handleCancel = () =>
    {
        show(null)
    }
    return(
        <div>
            <h1>Job Completed! Write a review for your hired freelancer. </h1>
            <form onSubmit={e => handleSubmit(e, navigate)} >
                <div>
                    <label>Rating:</label>
                    <input
                    type="number"
                    min = "0"
                    max="5"
                    value={rating}
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
                <button onClick={() => handleCancel}> Cancel </button>

            </form>
        </div>
    )

}

export default Archive
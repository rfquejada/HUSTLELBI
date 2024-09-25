import { useState } from "react"
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
            updateList[i] = {...updateList[i],ratingFree: rating, FreelancerReview:review}
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
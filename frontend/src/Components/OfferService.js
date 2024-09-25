import { useState } from "react"
import { useNavigate } from "react-router-dom"

function OfferService (props) 
{
    const job = props.job 
    const show = props.show
    const client = props.client
    const user = props.user 
    const jobPostings = props.jobPostings 
    const setJobPostings = props.setJobPostings

    const [rate, setRate] = useState(0)
    const[message, setMessage] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (event, navigate) =>
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
            const new_offer = {
                rate: rate, 
                message: message,
                freelancerId: user
            }
            if (updateList[i].offers){
                updateList[i].offers = [...updateList[i].offers, new_offer]
            }else{
                updateList[i] = {...updateList[i], offers: [new_offer]}
            }

            console.log(updateList)
            return updateList
        })

        setRate(0)
        setMessage("")
        navigate('/')
    }

    const handleCancel = () =>
    {
        show(null)
    }

    return(

<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-yellow-400 text-black rounded-xl p-6 w-full max-w-md shadow-xl flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-center">{job.title}</h1>
        
        <div className="space-y-2 w-full"> {/* Added w-full to ensure full width alignment */}
            <h3 className="font-semibold">Client: {client.name}</h3>
            {job.rate && <h3 className="font-semibold">Rate per hour: {job.rate}</h3>}
            <p className="font-medium text-sm">Date posted: {job.date_posted}</p>
            <p className="font-medium text-sm">Date of job: {job.date}</p>

            <div className="space-y-1">
                <h5 className="font-semibold text-sm">Types:</h5>
                <div className="flex flex-wrap gap-1"> {/* Changed to flex-wrap and gap-1 to keep them left-aligned */}
                    {job.type.map((t, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 text-white rounded-full text-xs">{t}</span>
                    ))}
                </div>
            </div>

            <div className="space-y-1">
                <p className="font-medium text-sm">Difficulty: 
                    <span className="ml-2 px-2 py-1 bg-gray-800 text-white rounded-full text-xs">{job.difficulty}</span>
                </p>
            </div>

            <p className="font-medium text-sm">Location: {job.location}</p>
            <p className="font-medium text-sm">Details: {job.details}</p>
            <p className="font-medium text-sm">Requirements: {job.requirements}</p>
        </div>

        <form onSubmit={e => handleSubmit(e, navigate)} className="w-full space-y-3">
            <div>
                <label className="block font-semibold mb-1 text-sm">Your offered rate (per hour):</label>
                <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full p-2 border border-gray-400 rounded-xl focus:ring focus:ring-green-400"
                />
            </div>

            <div>
                <label className="block font-semibold mb-1 text-sm">Message:</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border border-gray-400 rounded-xl focus:ring focus:ring-green-400"
                    placeholder="Leave a message"
                />
            </div>

            <div className="flex justify-center space-x-3">
                <button 
                    type="submit"
                    className="bg-green-600 text-white px-5 py-2 rounded-xl shadow hover:bg-green-700 transition focus:ring focus:ring-green-400"
                > Post
                </button>
                <button 
                    onClick={() => handleCancel()}
                    className="bg-red-600 text-white px-5 py-2 rounded-xl shadow hover:bg-red-700 transition focus:ring focus:ring-red-400"
                > Cancel
                </button>
            </div>
        </form>
    </div>
</div>


    )
}

export default OfferService
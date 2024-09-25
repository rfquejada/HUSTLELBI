import { useEffect, useState } from "react"
import CheckOffers from "./CheckOffers"
function OfferList (props)
{
    const jobPostings = props.jobPostings
    const setJobPostings = props.setJobPostings
    const freelancers = props.freelancers
    const userId = props.user
    const [awaiting, setAwaiting] = useState([])
    const [showOffers, setShowOffers] = useState(null)
    const accessAwaiting = (userId) => {
        const AwaitingList = jobPostings.filter((job) => {
            return !job.freelancerId && job.clientId === userId;
        });
        setAwaiting(AwaitingList)
    }

    useEffect(()=> {
        accessAwaiting(userId)
    }, [userId])

    return(
        <div className="mt-4 flex flex-col space-y-4">
            <div className="overflow-y-auto h-[400px]"> {/* Set a fixed height and overflow */}
        {
            awaiting.map((job) => {
                const freelancer = freelancers.find(fl => fl.id === job.offerTo);
                return(    
                    <div 
                    className="flex w-full p-6 rounded-3xl mb-4" // Added mb-4 for margin between cards
                    style={{ backgroundColor: '#1E1E1E' }} 
                    key={job.id}
                    >
                    <div className="flex space-x-4">
                    <>
                    
                    {job.offerTo ? (
                        < div className="flex-grow text-yellow-400">
                        <h1 className="text-2xl font-bold">{job.title}</h1>
                        <p className="text-m text-yellow-100">Date Posted: {job.date_posted}</p>
                        <h3 className="text-m text-yellow-100">Offered to: {freelancer?.name}</h3>
                        {!job.rejected ? (
                        <div>
                            <p  className="text-yellow-200">Awaiting response from freelancer</p>
                        </div>
                        ) : (
                            <p className="text-yellow-200">Sorry. The job has been rejected. </p>
                        )}
                        </div>
                    ) : (
                        <div className="flex-grow text-yellow-400">
                            <h1 className="text-2xl font-bold">{job.title}</h1>
                            <p className="text-sm text-yellow-100">Date Posted: {job.date_posted}</p>
                            {
                                job.offers ? (
                                    <>
                                    <button onClick={() => setShowOffers(job.id)} className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded-md mt-5 "> Show Offers </button>
                                    {
                                        showOffers === job.id ? <CheckOffers show = {setShowOffers} freelancers = {freelancers} jobPostings = {jobPostings} setJobPostings={setJobPostings} job={job} /> : null
                                    }
                                    </>
                                ): <p className="text-yellow-200">No existing offers</p>
                            }
                        </div>
                    )}
                    </>
                    </div>
                    </div>
                )
            })
        }
        </div>
        </div>
        
    )
}

export default OfferList
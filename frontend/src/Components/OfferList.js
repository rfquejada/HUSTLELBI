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
        <div>
        {
            awaiting.map((job) => {
                const freelancer = freelancers.find(fl => fl.id === job.offerTo);
                return(    
                <>
                    {job.offerTo ? (
                        <>
                        <h1>{job.title}</h1>
                        <p>Date Posted: {job.date_posted}</p>
                        <h3>Offered to: {freelancer?.name}</h3>
                        {!job.rejected ? (
                        <div>
                            <p>Awaiting response from freelancer</p>
                        </div>
                        ) : (
                            <p>Sorry. The job has been rejected. </p>
                        )}
                        </>
                    ) : (
                        <div>
                            <h1>{job.title}</h1>
                            <p>Date Posted: {job.date_posted}</p>
                            {
                                job.offers ? (
                                    <>
                                    <button onClick={() => setShowOffers(job.id)}> Show Offers </button>
                                    {
                                        showOffers === job.id ? <CheckOffers show = {setShowOffers} freelancers = {freelancers} jobPostings = {jobPostings} setJobPostings={setJobPostings} job={job} /> : null
                                    }
                                    </>
                                ): <p>No existing offers</p>
                            }
                        </div>
                    )}
                </>
                )
            })
        }
        </div>
        
    )
}

export default OfferList
import { useState, useEffect } from "react"
import Archive from "./Archive"
function ClientOnProgress (props)
{
    const jobPostings = props.jobPostings
    const setJobPostings = props.setJobPostings
    const setFreelancers = props.setFreelancers
    const freelancers = props.freelancers
    const userId = props.user 
   const [onProgress, setOnProgress] = useState([])
   const [showArchive, setShowArchive] = useState(null)
    const accessProgress = (userId) => {
        const onProgressList = jobPostings.filter((job) => {
            return job.freelancerId && job.completed === false && job.clientId === userId;
        });
        setOnProgress(onProgressList)
    }

    useEffect(() =>{
        accessProgress(userId)
    }, [userId])
    return(
        <div>
            {
                onProgress.map((job) => {
                    const freelancer = freelancers.find(freelancer => freelancer.id === job.freelancerId);
                    return(
                        <div>
                            <h1>Title: {job.title}</h1>
                            <h3>Freelancer: {freelancer.name}</h3>
                            <button onClick={()=> setShowArchive(job.id)}>Archive this job</button>
                            {
                                showArchive === job.id ? <Archive freelancers = {freelancers} setFreelancers = {setFreelancers} show={setShowArchive} jobPostings= {jobPostings} setJobPostings={setJobPostings} job={job}/> : null
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ClientOnProgress
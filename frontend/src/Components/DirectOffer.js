import { useEffect, useState } from "react"

function DirectOffer (props)
{
    const jobs = props.jobPostings
    const setJob = props.setJobPostings
    const clients = props.clients
    const fID = props.userId
    const [offers, setOffers] = useState([])
    const show = props.show

    // const [showMessageAccept, setShowMessageAccept] = useState(null) 
    // const [showMessageReject, setShowMessageReject] = useState(null) 
    const accessOffers = (userId) => {
        const offersList = jobs.filter((job) => {
            return !job.freelancerId && job.offerTo  === userId})
        setOffers(offersList)
    }

    useEffect(() =>{
        accessOffers(fID)
    }, [fID, jobs])

    const handleAccept = (job) =>{
        let i = 0
        for (let j = 0; j < jobs.length; j++) {
            if (jobs[j].id === job.id) {
                i = j
                break;
            }
        }

        setJob((currentJobList) =>{
            const updateList = [...currentJobList]
            updateList[i] = {...updateList[i],freelancerId: fID}
            return updateList
        })

        // setShowMessageAccept(job.id)

    }

    const handleReject = (job) => 
    {
        let i = 0
        for (let j = 0; j < jobs.length; j++) {
            if (jobs[j].id === job.id) {
                i = j
                break;
            }
        }

        setJob((currentJobList) =>{
            const updateList = [...currentJobList]
            updateList[i] = {...updateList[i],rejected: true}
            return updateList
        })
        // setShowMessageReject(job.id)
    }
    return(
        <div>
            {
                offers.map((job) => {
                    const client = clients.find(client => client.id === job.clientId);
                    return(
                        <div> 
                            <h1>Title: {job.title}</h1>
                            <h3>Details: </h3>
                            <p>{job.details}</p>
                            <p>Date posted: {job.date_posted}</p>
                            <h5>Offered by: {client ? client.name: "Unregisterd"}</h5>
                            <h5>Type(s): </h5>
                            {
                                job.type.map((t) => {
                                    return(
                                        <ul>
                                            <li>{t}</li>
                                        </ul>
                                    )
                                })
                            }
                            <h4>Difficulty: {job.difficulty}</h4>
                            <p>Date of job: {job.date}</p>
                            <p>Location: {job.location}</p> 

                           
                            <div>
                            <button
                                onClick={() => {
                                handleAccept(job);
                                }}>
                                Accept
                            </button>
                            <button
                                onClick={() => {
                                handleReject(job);
                                }}>
                                Reject
                            </button>
                            </div>
                          

                        </div>
                    )
                })
            }
        </div>
    )


}

export default DirectOffer
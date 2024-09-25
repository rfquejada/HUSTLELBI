import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
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
        <div  className="mt-4 flex flex-col space-y-4">
            <div className="overflow-y-auto h-[400px]"> {/* Set a fixed height and overflow */}
            {
                offers.map((job) => {
                    const client = clients.find(client => client.id === job.clientId);
                    return(
                        <div className="flex w-full p-6 rounded-3xl mb-4" // Added mb-4 for margin between cards
                        style={{ backgroundColor: '#1E1E1E' }} 
                        
                        key={job.id}> 
                        <div className="flex space-x-4">
                        <div className="flex flex-col items-center w-[150px] flex-shrink-0">
                                    <img 
                                        src={"https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"} 
                                        alt={"Unregistered"} 
                                        className="h-[120px] w-[120px] rounded-xl object-cover object-center"
                                    />
                                    <Link 
                                        to={`/profile/${client?.id}`} 
                                        className="text-yellow-400 text-center mt-2 hover:underline"
                                    >
                                        {client ? client.name : "Unregistered"}
                                    </Link>
                                </div>
                        <div className="flex-grow text-yellow-400">
                            <h1 className="text-2xl font-bold">{job.title}</h1>
                            <h3 className="text-m text-yellow-100">Details: {job.details}</h3>
                            <p className="text-m text-yellow-100">Date posted: {job.date_posted}</p>
                            <h5 className="text-m text-yellow-100">Offered by: {client ? client.name: "Unregisterd"}</h5>
                            <h5 className="text-m text-yellow-100">Type(s): </h5>
                            {
                                job.type.map((t) => {
                                    return(
                                        <ul>
                                            <li  className="text-sm text-yellow-100">{t}</li>
                                        </ul>
                                    )
                                })
                            }
                            <h4  className="text-m text-yellow-100">Difficulty: {job.difficulty}</h4>
                            <p  className="text-m text-yellow-100">Date of job: {job.date}</p>
                            <p  className="text-m text-yellow-100">Location: {job.location}</p> 

                           
                            <div className="space-x-5 space-y-5">
                            <button
                                onClick={() => {
                                handleAccept(job);
                                }} className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded-md ">
                                Accept
                            </button>
                            <button
                                onClick={() => {
                                handleReject(job);
                                }}className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded-md">
                                Reject
                            </button>
                            </div>
                            </div>
                        </div>
                        <div className="my-3 flex items-center">
                            <hr className="w-full" style={{ borderColor: "#E3BB2F" }} />
                        </div>

                        </div>
                    )
                })
            }
            </div>
        </div>
    )


}

export default DirectOffer
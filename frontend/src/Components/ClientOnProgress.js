import { useState, useEffect } from "react"
import Archive from "./Archive"
import { Link } from "react-router-dom";
function ClientOnProgress (props)

{
    const jobPostings = props.jobPostings
    const setJobPostings = props.setJobPostings
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
<div className="mt-4 flex flex-col space-y-4">
            <div className="overflow-y-auto h-[400px]"> {/* Set a fixed height and overflow */}
            {
                onProgress.map((job) => {
                    const freelancer = freelancers.find(freelancer => freelancer.id === job.freelancerId);
                    return(
        <div className="mt-4 flex flex-col space-y-4">
                    <div className="overflow-y-auto h-[400px]"> {/* Set a fixed height and overflow */}
                    {
                        onProgress.map((job) => {
                            const freelancer = freelancers.find(freelancer => freelancer.id === job.freelancerId);
                            return(
                                <div className="flex w-full p-6 rounded-3xl mb-4" // Added mb-4 for margin between cards
                                style={{ backgroundColor: '#1E1E1E' }} 
                                key={job.id}>
                                    <div className="flex space-x-4">
                                    <div className="flex flex-col items-center w-[150px] flex-shrink-0">
                                            <img 
                                                src={freelancer?.img ? freelancer.img : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"} 
                                                alt={freelancer?.name || "Unregistered"} 
                                                className="h-[120px] w-[120px] rounded-xl object-cover object-center"
                                            />
                                            <Link 
                                                to={`/profile/${freelancer.id}`} 
                                                className="text-yellow-400 text-center mt-2 hover:underline"
                                            >
                                                {freelancer ? freelancer.name : "Unregistered"}
                                            </Link>
                                        </div>
                                    <div className="flex-grow text-yellow-400">
                                        <h1 className="text-2xl font-bold">Title: {job.title}</h1>
                                        <h3 className="text-sm text-yellow-100">Freelancer: {freelancer.name}</h3>
                                        <button onClick={()=> setShowArchive(job.id)}className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded-md mt-5">Archive this job</button>
                                        {
                                            showArchive === job.id ? <Archive show={setShowArchive} jobPostings= {jobPostings} setJobPostings={setJobPostings} job={job}/> : null
                                        }
                                    </div>
                                    
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            )
        }
export default ClientOnProgress

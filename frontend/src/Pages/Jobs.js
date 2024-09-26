import { Link, useOutletContext } from "react-router-dom";
import { useState } from "react";
import OfferService from "../Components/OfferService";

function Jobs() {
  const { jobPostings, clients, signedInUser, setJobPostings } = useOutletContext();
  const [show, setShow] = useState(null);

  return (
    <div className="bg-[#1E1E1E] flex flex-col min-h-screen"> {/* Added flex and min-h-screen */}
      
      {/* Content container with flex-grow */}
      <div className="flex-grow px-16 py-4"> {/* flex-grow to ensure it takes up available space */}
        {jobPostings.map((job) => {
          const client = clients.find(client => client.id === job.clientId);
          return !job.completed && job.forOffering ? (
            <div className="flex w-full p-6 max-w flex-col rounded-3xl" style={{ backgroundColor: '#1E1E1E' }} key={job.id}>
              
              {/* Profile and client details */}
              <div className="flex space-x-4">
                <div className="flex flex-col items-center w-[150px] flex-shrink-0">
                  <img 
                    src={client.img ? client.img : "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"} 
                    alt={client.name} 
                    className="h-[120px] w-[120px] rounded-xl object-cover object-center"
                  />
                  <Link 
                    to={`/profile/${client.id}`} 
                    className="text-yellow-400 text-center mt-2 hover:underline"
                  >
                    {client ? client.name : "Unregistered"}
                  </Link>
                </div>

                {/* Job details section */}
                <div className="flex-grow text-yellow-400">
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <p className="text-sm text-yellow-100">Date of job: {job.date}</p>
                  <p className="text-sm text-yellow-100">Requirements: {job.requirements}</p>
                  <p className="text-sm text-yellow-100">Rate: {job.rate}</p>
                  <p className="text-sm text-yellow-100">Type/s: {job.type}</p>
                  <p className="text-sm text-yellow-100">Difficulty: {job.difficulty}</p>
                  <p className="text-sm text-yellow-100">Location: {job.location}</p>
                  <p className="text-sm text-yellow-100">{job.details}</p>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between items-center">
                <p className="px-8 text-sm text-gray-400">{job.date_posted}</p>
                <div className="flex space-x-4">
                  <button 
                    className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-4 rounded-md" 
                    onClick={() => setShow(job.id)}>
                    Apply
                  </button>
                </div>
              </div>

              <div className="my-3 flex items-center">
                <hr className="w-full" style={{ borderColor: "#E3BB2F" }} />
              </div>

              {/* Conditional OfferService rendering */}
              {show === job.id && (
                <OfferService 
                  client={client} 
                  job={job} 
                  show={setShow} 
                  user={signedInUser} 
                  jobPostings={jobPostings} 
                  setJobPostings={setJobPostings} 
                />
              )}
            </div>
          ) : null;
        })}
      </div>

      {/* Footer at the end of the content */}
      <footer className="w-full bg-yellow-400 p-4 mt-8 border-t border-yellow-400 shadow">
        <div className="flex items-center justify-between">
          <span className="text-4xl font-bold text-black">HIRE HUSTLEBEES!</span>
        </div>
      </footer>
    </div>
  );
}

export default Jobs;

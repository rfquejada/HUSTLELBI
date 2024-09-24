import { useState} from "react";

import { useOutletContext,  useNavigate} from "react-router-dom";

function OfferJob (props) 
{
    const setShow = props.show 
    const showDirectOffer = props.direct
    const jobs = props.jobs 
    const setJobs = props.setJobs 
    const flOffer = props.offer
    const largestId = jobs.reduce((maxId, jobs) => Math.max(maxId, jobs.id), 0);
    const user = props.user
    const uniqueServiceTypes = props.type
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [type, setType] = useState([])
    const [difficulty, setDifficulty] = useState("")
    const [requirements, setRequirements] = useState([])
    const [date, setDate] = useState("")
    const [location, setLocation] = useState("")
    const difficultyChoice = ["easy", "medium", "hard"]
    const today = new Date();
    const formattedToday = today.toISOString().split('T')[0];
    const navigate = useNavigate();
    const handleSubmit = async(event, navigate) => {
        event.preventDefault();

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        const newJob = {
            id : largestId + 1,
            title : title,
            details : details,
            type: type,
            clientId: user,
            difficulty: difficulty,
            requirements: requirements,
            date: date, 
            date_posted: today,
            location: location, 
            forOffering: false,
            offerTo: flOffer,
            completed: false
        }

        console.log(newJob)
        setJobs([...jobs, newJob])
        setTitle("")
        setDetails("")
        setType([])
        setDifficulty("")
        setRequirements("")
        setDate("")
        setLocation("")
        setShow(false)

        navigate('/profile/'+flOffer)
    }

    const handleCancel = () => {
        setShow(false)
    }

    const handleTypeToggle = (selectedType) => {
      setType((prevType) =>
        prevType.includes(selectedType)
          ? prevType.filter((t) => t !== selectedType)
          : [...prevType, selectedType]
      );
    };

      const handleDifficultyChange = (e) => {
        setDifficulty(e.target.value);
      };
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-yellow-400 text-black rounded-3xl p-8 w-full max-w-xl shadow-xl flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-center">OFFER JOB TO HUSTLEBEE</h1>
              
          <form onSubmit={e => handleSubmit(e, navigate)}className="w-full">
            {/* Job Title */}
            <div className="mb-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 border border-gray-400 rounded-3xl"
                placeholder="Enter job title"
              />
            </div>

            {/* Details */}
            <div className="mb-4">  
              <textarea
                type="textarea"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full p-4 border border-gray-400 rounded-3xl"
                placeholder="Details"
              ></textarea>
            </div>

            {/* Job Types */}
            <div className="mb-4">
              <label className="block font-bold mb-2 text-center">TYPES:</label>
              <div className="flex justify-center space-x-4">
                {uniqueServiceTypes.map((serviceType, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleTypeToggle(serviceType)}
                    className={`px-4 py-2 rounded-3xl ${
                      type.includes(serviceType)
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-800 text-white"
                    } transition`}                     
                  >
                    {serviceType}
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Location */}
            <div className="flex justify-between mb-4">
              <div className="w-1/2 mr-2">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-4 border border-gray-400 rounded-3xl"
                  min={formattedToday}
                />
              </div>
              <div className="w-1/2 ml-2">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-4 border border-gray-400 rounded-3xl"
                  placeholder="Enter location"
                />
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-4">
              <input
                type="text"
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                className="w-full p-4 border border-gray-400 rounded-3xl"
                placeholder="Enter requirements"
              />
            </div>

            {/* Difficulty Buttons */}
            <div className="mb-6 text-center">
              <label className="block font-bold mb-2">DIFFICULTY:</label>
              <div className="flex justify-center space-x-4">
                {/* Easy Button */}
                <button
                  type="button"
                  className={`px-4 py-2 rounded-3xl ${difficulty === 'easy' ? 'bg-green-600 text-white' : 'bg-gray-800 text-white'} transition`}
                  onClick={() => setDifficulty('easy')}
                >
                  Easy
                </button>

                {/* Medium Button */}
                <button
                  type="button"
                  className={`px-4 py-2 rounded-3xl ${difficulty === 'medium' ? 'bg-yellow-500 text-white' : 'bg-gray-800 text-white'} transition`}
                  onClick={() => setDifficulty('medium')}
                >
                  Medium
                </button>

                {/* Hard Button */}
                <button
                  type="button"
                  className={`px-4 py-2 rounded-3xl ${difficulty === 'hard' ? 'bg-red-600 text-white' : 'bg-gray-800 text-white'} transition`}
                  onClick={() => setDifficulty('hard')}
                >
                  Hard
                </button>
              </div>
            </div>


              {/* Buttons */}
              <div className="flex justify-center space-x-4">
                <button 
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-3xl shadow hover:bg-green-700 transition"
                  > Post
                    
                </button>
                <button 
                  onClick={() => handleCancel()}
                  className="bg-red-600 text-white px-6 py-2 rounded-3xl shadow hover:bg-red-700 transition"
                > Cancel
                </button>
              </div>
            </form>
          
        </div>
      </div>
    )
}

export default OfferJob
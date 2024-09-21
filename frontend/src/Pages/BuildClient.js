import { useEffect, useState } from "react";

import { useOutletContext,  useNavigate} from "react-router-dom";

function BuildClient()
{
    const {freelancers, clients, setClients} = useOutletContext();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [img, setImage] = useState("");
    const [service_type, setServiceType] = useState([]);
    const largestId = clients.reduce((maxId, client) => Math.max(maxId, client.id), 0);
    const uniqueServiceTypes = [...new Set(freelancers.flatMap(freelancer => freelancer.service_type))];
    const navigate = useNavigate();


    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setServiceType((prevType) =>
          prevType.includes(value)
            ? prevType.filter((type) => type !== value)
            : [...prevType, value]
        );
      };
    const handleSubmit = async (event, navigate) => {
        event.preventDefault();
        setClients((currentClients) => 
        {
            const updateList = [...currentClients]
            updateList[largestId-1] = {...updateList[largestId-1], 
                average_rating: 0,
                img: img,
                service_type: service_type
            } 

            console.log(updateList)
            return updateList
        })

        setName("");
        setEmail("")
        setContact("")
        setImage("")
        navigate('/')

    }
        return(
            <div>

                <h1>Sign in as a client</h1>
                <form onSubmit={e => handleSubmit(e, navigate)}>

               
                <div>
                    <label>Image URL:</label>
                    <input
                    type="text"
                    value={img}
                    onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                <div>
                    <label>Service Type(s) you would usually hire: </label>
                    {uniqueServiceTypes.map((type, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          value={type}
                          onChange={handleCheckboxChange}
                        />
                        <label className="font-semibold mr-4">
                          {type}
                        </label>
                      </div>
                    ))}
                </div>

                <button
                
                type="submit">
                Create Account
              </button>
                </form>
            </div>
        )

}

export default BuildClient
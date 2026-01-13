import Data from "../../data/data";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const Details = () => {
  return (
    <div className=" container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Available Medical supplies</h2>  
          <Link to="/">
            <button className="btn-exit-ItemM"><FaSignOutAlt/></button> </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {Data.map((I) => (
          <div key={I.brand} className="bg-slate-50 border p-7 rounded shadow">
            <img
              src={I.imgUrl}
              alt={I.IName}
              className="w-full h-58 object-cover mb-2"
            />
            <h3 className=" text-2xl text-center font-semibold">{I.IName}</h3>
            <p className="text-gray-600 text-xl  font-semibold text-center">${I.price}</p>
            <span className="flex gap-9 text-lg  text-green-600">
            <p className="text-l ri-settings-2-line "  >{I.model} </p>
            <p className="text-l ri-roadster-line"  >{I.weight}
            </p>
            <p className="text-l ri-timer-flash-line " >{I.color}</p>
            </span>
            <Link
              to={`/det/${I.brand}`}
              className="flex justify-center mt-[10px]"
            >
              <button className="bg-green-600 hover:bg-light-green-700   text-white font-semibold py-2 px-6 rounded-lg shadow" > View Details </button>
           
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;

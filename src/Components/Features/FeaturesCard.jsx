import { Link } from "react-router-dom";
import Button from "../Common/Button";

const FeaturesCard = ({ card }) => {
  const { img, price, title, _id } = card || {};

  return (
    <div>
      <div className="relative  flex flex-col text-gray-700 bg-white border  bg-clip-border">
        <div className="relative m-3 overflow-hidden text-gray-700 bg-white bg-clip-border">
          <img src={img} className="bg-cover w-full h-[240px]" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="block  text-xl  antialiased font-semibold leading-relaxed text-blue-gray-900">
              {title}
            </p>
          </div>
          <p className="block font-sans mb-5 text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            Price: ${price}
          </p>
        </div>
        <div className="p-6 pt-0 overflow-hidden">
          {/* <Link
            // to={`allassainment/${_id}`}
            className="block w-full select-none rounded-lg bg-[#FF3363] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            View Details
          </Link> */}

          <Link>
            <Button name="View Deatils" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;

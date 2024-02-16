import { Link } from "react-router-dom";

const FeaturesCard = ({ card }) => {
  const {
    _id,
    title,
    author,
    genre,
    description,
    coverImageURL,
    publicationDate,
    publisher,
    isbn,
    averageRating,
    reviews,
  } = card || {};

  return (
    <div>
      <div className="max-w-sm bg-base-300 border border-gray-200 rounded-lg   ">
        <a href="#">
          <img
            className="rounded-t-lg h-64 w-full object-cover"
            src={coverImageURL}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-black ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Link
            to={`viewdetails/${_id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#E28519] rounded-lg hover:bg-[#E28519] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#E28519] dark:hover:bg-[#E28519] dark:focus:ring-[#E28519]"
          >
            Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;

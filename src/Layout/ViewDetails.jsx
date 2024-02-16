import { useEffect, useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import Container from "../customComponents/Container";

const ViewDetails = () => {
  const { _id } = useParams();

  const bookData = useLoaderData();

  const [books, setBooks] = useState({});

  useEffect(() => {
    const booksInfo = bookData.find((item) => item?._id == _id);
    setBooks(booksInfo);
  }, []);

  const {
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
  } = books || {};

  return (
    <div>
      <Container>
        <div>
          <a
            href="#"
            className="flex flex-col items-center bg-base-300 border md:flex-row p-4 md:p-12"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={coverImageURL}
              alt=""
            />
            <div className="flex flex-col justify-betwee text-black ml-0 md:ml-12 p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {title}
              </h5>
              <span className="font-bold text-[#E28519]">{author}</span>
              <p className="text-md font-semibold mb-2">
                Category:-{" "}
                <div className="badge bg-[#E28519] py-2 text-white mx-2 text-semibold">
                  ##Best Sell{" "}
                </div>
                <span className="">in</span> :{genre}{" "}
              </p>
              <p className="mb-3 font-medium text-md ">
                {" "}
                <span className="text-[#E28519]">✔</span> In Stock Available
              </p>
              <p className="mb-3 font-normal ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <div className="flex gap-4 font-semibold ">
                <p className="hover:text-[#E28519]"> ♡ Add to Wishlist</p>
                <p className="flex items-center gap-3 hover:text-[#E28519]">
                  {" "}
                  <IoShareSocial /> Add to Wishlist
                </p>
              </div>
            </div>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default ViewDetails;

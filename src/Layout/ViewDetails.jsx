import { useEffect, useState } from "react";
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
  console.log(books);
  return (
    <div>
      <Container>
        <h1>View Details</h1>
      </Container>
    </div>
  );
};

export default ViewDetails;

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import CommonHeading from "../Components/Common/CommonHeading";
import AllAssainmentCard from "../Components/Features/AllAssainmentCard";
import Container from "../customComponents/Container";
const AllAssainmentPage = () => {
  const [assainment, isAssainment] = useState([]);
  useEffect(() => {
    fetch("https://edubuzz-server-side.vercel.app/getassainment")
      .then((res) => res.json())
      .then((data) => isAssainment(data));
  }, []);

  // console.log(assainment);

  return (
    <Container>
      <div>
        <Helmet>
          <title>Edubuzz || All Assainments Page</title>
        </Helmet>
        <CommonHeading
          heading="All"
          colorheading="Assainments"
          subparagraph="Our online studies platform offers a rich array of features designed to enhance your learning experience. From a diverse selection of courses taught by experts in their respective fields to interactive quizzes and assignments that reinforce your knowledge,"
        ></CommonHeading>

        <div className="mt-10  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {assainment?.map((item) => (
            <AllAssainmentCard key={item.id} item={item}></AllAssainmentCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AllAssainmentPage;

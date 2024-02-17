import { useEffect, useState } from "react";
import Container from "../../customComponents/Container";
import CommonHeading from "../Common/CommonHeading";
import FeaturesCard from "./FeaturesCard";
const Features = () => {
  const [item, setIsItem] = useState();
  useEffect(() => {
    fetch("https://edubuzz-server-side.vercel.app/features")
      .then((res) => res.json())
      .then((data) => setIsItem(data));
  });

  return (
    <>
      <div className="mt-16">
        <CommonHeading
          heading="Our"
          colorheading="Features"
          subparagraph="  Our online studies platform offers a rich array of features designed
          to enhance your learning experience. From a diverse selection of
          courses taught by experts in their respective fields to interactive
          quizzes and assignments that reinforce your knowledge,"
        />
      </div>

      <Container>
        <div className=" mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {item?.map((card) => (
            <FeaturesCard key={card.id} card={card}></FeaturesCard>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Features;

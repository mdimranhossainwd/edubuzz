import Banner from "../Components/Banner/Banner";
import ContactUs from "../Components/ContactUs/ContactUs";
import Faw from "../Components/FAQ/Faw";
import Features from "../Components/Features/Features";

const HomeLayout = () => {
  return (
    <div>
      <Banner />
      <Features />
      <ContactUs />
      <Faw />
    </div>
  );
};

export default HomeLayout;

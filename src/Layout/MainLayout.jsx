import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
      <Banner />
      <Footer />
    </div>
  );
};

export default MainLayout;

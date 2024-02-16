import Container from "../../customComponents/Container";
import CommonHeading from "../Common/CommonHeading";

const ContactUs = () => {
  return (
    <div>
      <div className=" bg-base-200 mt-10 pt-10 pb-6">
        <div>
          <CommonHeading heading="Contact" colorheading="Us" />
        </div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center">
            <img
              className="w-2/3 my-12 md:mb-0 mx-auto"
              src="https://lawturbo.com/wp-content/uploads/2023/05/Speed-Dial-Race-1280x1041.png"
              alt=""
            />
            <div className="w-full">
              <form>
                <input
                  className="block py-3 border px-4 w-full mb-3"
                  type="Your Name"
                  placeholder="Your Name"
                />
                <input
                  className="block py-3 border px-4 w-full mb-3"
                  type="Your Name"
                  placeholder="Your Email"
                />
                <textarea
                  className="w-full block px-4 py-2"
                  name=""
                  id=""
                  cols="30"
                  placeholder="Type yor message here ...."
                  rows="5"
                ></textarea>
                <div className="form-control mt-6">
                  <button className="border border-[#E28519] rounder-full  px-8 py-3 text-md font-semibold  hover:bg-[#E28519] duration-700 hover:border-none text-[#E28519] hover:text-white rounded-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactUs;

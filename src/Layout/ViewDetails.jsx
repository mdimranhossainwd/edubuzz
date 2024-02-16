import { useEffect, useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
              <span className="font-bold mb-2 text-[#E28519]">
                Author by:- {author}
              </span>

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

        {/* <div className="bg-base-200">
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Tab 1"
            />
            <div role="tabpanel" className="tab-content p-10">
              Tab content 1
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Tab 2"
              checked
            />
            <div role="tabpanel" className="tab-content p-10">
              Tab content 2
            </div>

            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="Tab 3"
            />
            <div role="tabpanel" className="tab-content p-10">
              Tab content 3
            </div>
          </div>
        </div> */}

        <div className="bg-base-200 my-12 py-6 px-8">
          <Tabs>
            <h3 className="text-xl font-semibold mb-4">
              Books Specification & Summary
            </h3>
            <TabList className="text-bold">
              <Tab>Summary</Tab>
              <Tab>Specification</Tab>
              <Tab>Author</Tab>
            </TabList>

            <div className="mt-6 mb-5">
              <TabPanel>
                <p className="text-lg">{description}</p>
              </TabPanel>
              <TabPanel>
                <div className=" overflow-x-auto w-full my-3 sm:rounded-lg">
                  <table className="text-left text-gray-500 ">
                    <thead className="text-xs border-b-1 text-gray-700  ">
                      <tr>
                        <th className="px-6 py-1 ">Title </th>
                        <th className="px-6 py-1">{title}</th>
                      </tr>
                    </thead>
                    <thead className="text-xs text-gray-700 ">
                      <tr>
                        <th className="px-6 py-1 ">Author </th>
                        <th className="px-6 py-1"> {author}</th>
                      </tr>
                    </thead>
                    <thead className="text-xs text-gray-700 ">
                      <tr>
                        <th className="px-6 py-1 ">Publisher </th>
                        <th className="px-6 py-1">{publisher}</th>
                      </tr>
                    </thead>
                    <thead className="text-xs text-gray-700 ">
                      <tr>
                        <th className="px-6 py-1 ">Edtion</th>
                        <th className="px-6 py-1">
                          Publish, On {publicationDate}
                        </th>
                      </tr>
                    </thead>
                    <thead className="text-xs text-gray-700 ">
                      <tr>
                        <th className="px-6 py-1 ">Country</th>
                        <th className="px-6 py-1">U.K</th>
                      </tr>
                    </thead>
                    {/* <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">Silver</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          Laptop
                        </td>
                        <td className="px-6 py-4">$2999</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">White</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          Laptop PC
                        </td>
                        <td className="px-6 py-4">$1999</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">Black</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          Accessories
                        </td>
                        <td className="px-6 py-4">$99</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Google Pixel Phone
                        </th>
                        <td className="px-6 py-4">Gray</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          Phone
                        </td>
                        <td className="px-6 py-4">$799</td>
                      </tr>
                      <tr>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                        >
                          Apple Watch 5
                        </th>
                        <td className="px-6 py-4">Red</td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                          Wearables
                        </td>
                        <td className="px-6 py-4">$999</td>
                      </tr>
                    </tbody> */}
                  </table>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="w-full ">
                  <div className="flex text-black  items-center pb-10">
                    <div>
                      <img
                        className="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src="/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                      <h5 className="mb-1 text-xl font-medium ">
                        Bonnie Green
                      </h5>
                      <span className="text-sm">Visual Designer</span>
                    </div>
                    <div>
                      <h2>Hello World</h2>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default ViewDetails;

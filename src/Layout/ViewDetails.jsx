import { useEffect, useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Review from "../Components/review/Review";
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
          <div className="flex flex-col items-center bg-base-300 border md:flex-row p-4 md:p-12">
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={coverImageURL}
              alt=""
            />
            <div className="flex flex-col justify-betwee text-black ml-0 md:ml-12 p-4 leading-normal">
              <h5 className="mb-2 text-3xl font-semibold tracking-tight">
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
              <p className="mb-3 text-lg font-normal ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>

              <div className="flex gap-4 font-semibold ">
                <Link className="hover:text-[#E28519]"> ♡ Add to Wishlist</Link>
                <Link className="flex items-center gap-3 hover:text-[#E28519]">
                  {" "}
                  <IoShareSocial /> Add to Wishlist
                </Link>
              </div>
            </div>
          </div>
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
          <Tabs className="pb-4">
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
                <p className="text-lg pb-9">{description}</p>
                <hr />
                <div>
                  <h2 className="text-xl mt-5 font-semibold my-4">
                    Reviews and Rating
                  </h2>

                  <div>
                    {reviews?.map((item) => (
                      <Review key={item._id} item={item}></Review>
                    ))}
                  </div>
                </div>
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
                <div className=" ">
                  <div className="md:flex text-black items-center pb-10">
                    <div>
                      <img
                        className="w-24 h-18 mb-3 rounded-full object-cover shadow-lg"
                        src="https://media.istockphoto.com/id/1149504274/photo/portrait-of-a-taiwanese-man.webp?b=1&s=170667a&w=0&k=20&c=BbkqzNZTXPHHnYnb0ZMIq3IkWKPQp20v42QfV0lokkY="
                        alt="Bonnie image"
                      />
                      <div className="text-center w-full">
                        <h5 className="mb-1 text-xl font-medium ">
                          Bonnie Green
                        </h5>
                        <span className="text-sm">Visual Designer</span>
                      </div>
                    </div>
                    <div className="pl-0 md:pl-16">
                      <p>
                        Let's begin with writing. Writing is a power that
                        everyone possesses. Whether it's their stories, their
                        thoughts, or their experiences - everything is worthy of
                        being written. While writing, we awaken the hidden
                        talent within us. Perhaps our words can inspire someone,
                        or maybe we ourselves take a new direction. The
                        contribution of writers is truly remarkable. They not
                        only express their thoughts but also inspire society.
                        Their stories, their poetry, and their written books
                        present a new world where everyone can explore, learn,
                        and change. Another important aspect of writing is
                        "creation." Before writing anything, we think and dream.
                        A writer provides a new identity through their written
                        works. They see the world through their perspective.
                        Through the power of the pen, a person can turn their
                        dreams into reality. The power to bring change is the
                        ultimate aspect of action. Action provides us with a new
                        perspective. When we write, we understand our world. And
                        when we understand, we can bring change. Action is a
                        tool that can not only change an individual but also
                        society.
                      </p>
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

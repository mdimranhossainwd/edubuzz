import ReviewsRating from "./ReviewsRating";

const Review = ({ item }) => {
  console.log(Object.keys(item).join(","));
  const { userId, rating, comment, profile_img } = item || {};
  return (
    <div className="py-4">
      <div className="flex items-center mb-5">
        <div className="avatar">
          <div className="w-14 rounded-full ring ring-black ring-offset-base-100 ring-offset-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Black_image.jpg" />
          </div>
        </div>
        <div className="ml-6">
          <p className="text-md font-normal ">
            By <span className="text-lg font-bold">Mark Jhon ,</span> March,2024{" "}
          </p>
          <ReviewsRating />
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default Review;

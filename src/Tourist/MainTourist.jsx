import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Rating from "react-rating-stars-component";
import StarRatings from "react-star-ratings";
import NavTourist from "./NavTourist";

export default function MainTourist() {
  const location = useLocation();
  const { heading, img, para, location: touristLocation } = location.state;

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [averageRating, setAverageRating] = useState(0);

  // Fetch reviews from the backend on component mount
  useEffect(() => {
    const fetchReviews = async () => {
     
      try {
        const encodedLocation = encodeURIComponent(touristLocation);
        const response = await axios.get(
  `http://localhost:3004/test/reviews/${encodedLocation}`
);

        console.log("Fetched Reviews:", response.data);
        setReviews(response.data);
        calculateAverageRating(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [touristLocation]);

  // Calculate average rating based on reviews
  const calculateAverageRating = (reviewsData) => {
    if (!reviewsData || reviewsData.length === 0) {
      setAverageRating(0);
      return;
    }

    const totalRating = reviewsData.reduce(
      (sum, review) => sum + (parseFloat(review.rating) || 0),
      0
    );
    const avgRating = (totalRating / reviewsData.length).toFixed(1);
    setAverageRating(parseFloat(avgRating) || 0);
  };

  // Handle rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0 || comment.trim() === "") {
      alert("Please provide both a rating and a comment.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("username"));
    if (!user) {
      alert("User not logged in. Please log in to submit a review.");
      return;
    }

    const newReview = {
      rating,
      comment,
      touristLocation,
      username: user.username,
      initial: user.username.charAt(0).toUpperCase(),
      img: img,
    };

    try {
      const response = await axios.post(
        "http://localhost:3004/test/reviews",
        newReview
      );
      console.log("Review Submitted:", response.data);
      const updatedReviews = [response.data, ...reviews];
      setReviews(updatedReviews);
      calculateAverageRating(updatedReviews);
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Error submitting the review:", error);
    }
  };

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <>
      <NavTourist />

      <div className="container mx-auto p-6">
        <section className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:w-1/2">
              <img
                src={img}
                alt={heading}
                className="rounded-xl shadow-xl object-cover w-full h-[360px]"
              />
            </div>
            <div className="mt-4 md:mt-0 md:w-1/2">
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <div className="flex items-center mb-2">
                  <i className="fa-solid fa-location-dot mr-2 text-gray-500"></i>
                  <p className="text-gray-700">{touristLocation}</p>
                </div>
                <hr />
                <div className="flex items-center mb-2">
                  <i className="fa-solid fa-dollar-sign mr-2 text-gray-500"></i>
                  <p className="text-gray-700">Free</p>
                </div>
                <hr />
                <div className="flex items-center mb-2">
                  <i className="fa-solid fa-clock mr-2 text-gray-500"></i>
                  <p className="text-gray-700">24/7</p>
                </div>
                <hr />
                <div className="flex items-center">
                  <i className="fa-solid fa-earth-americas text-gray-500"></i>
                  <p className="text-gray-700">
                    <a
                      href="https://mumbaicity.gov.in/tourist-place/gateway-of-india/"
                      className="text-blue-600 ml-2"
                    >
                      GatewayofIndia.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Average Rating */}
          <div className="flex flex-col mt-6">
            <div className="flex items-center">
              <StarRatings
                rating={averageRating}
                starRatedColor="gold"
                starEmptyColor="gray"
                numberOfStars={5}
                starDimension="24px"
                starSpacing="3px"
                name="rating"
              />
              <span className="ml-2 text-gray-700">{averageRating} / 5</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-700">
              {isExpanded ? para : `${para.slice(0, 150)}...`}
            </p>
            <button className="text-blue-600" onClick={toggleExpanded}>
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Review Form */}
          <form onSubmit={handleSubmit} className="mt-6">
            <h2 className="text-lg font-semibold">Leave a Review</h2>
            <div className="flex items-center mb-4">
              <Rating
                count={5}
                onChange={handleRatingChange}
                size={24}
                activeColor="#ffd700"
                color="#d1d5db"
              />
            </div>
            <textarea
              className="w-full border rounded-lg p-2"
              placeholder="Write your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
            />
            <button
              type="submit"
              className="mt-2 bg-blue-600 text-white rounded-lg px-4 py-2"
            >
              Submit Review
            </button>
          </form>

          {/* Reviews Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold">Reviews</h2>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div
                  key={review._id}
                  className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-2 font-semibold">
                    <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mr-2">
                      {review.initial}
                    </span>
                    <span>{review.user}</span>
                  </div>
                  <Rating
                    count={5}
                    value={parseFloat(review.rating)}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                    color="#d1d5db"
                  />
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Rating from "react-rating-stars-component";
import NavTourist from "./NavTourist";
import { useNavigate } from 'react-router-dom';

export default function MainTourist() {
  const location = useLocation();
  const { heading, img, para, website, webname, location: touristLocation } = location.state;

  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/reviews");
        const data = await response.json();
        const filteredReviews = data.filter((review) => review.placeId === webname);
        setReviews(filteredReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, [webname]); 

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
      : 0;

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0 || comment === "") {
      alert("Please provide both a rating and a comment.");
      return;
    }
   
    const user = JSON.parse(localStorage.getItem('user'));
    let char = user.username.charAt(0);

    
    const newReview = { rating, comment, webname, username: user.username,   initial: char }; // Add username and char

    try {
      const response = await fetch("http://localhost:3001/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        alert("Review submitted successfully!");
        setReviews([newReview, ...reviews]);
      } else {
        alert("Failed to submit review.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting review.");
    }

    setRating(0);
    setComment("");
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    const shortText = para.slice(0, 150);
    return isExpanded ? para : `${shortText}...`;
  };

  return (
    <>
      <NavTourist />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl flex justify-center font-serif font-semibold text-gray-800">{heading}</h1>
        <section className="bg-white p-6 rounded-lg shadow-lg max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:w-1/2">
              <img src={img} alt={heading} className="rounded-xl shadow-xl object-cover w-full h-[360px]" />
            </div>
            <div className="mt-4 md:mt-0 md:w-1/2">
              <div className="bg-gray-100 p-4 rounded-lg shadow">
                <div className="flex items-center mb-2 h-[30px]">
                  <i className="fa-solid fa-location-dot mr-2 text-gray-500"></i>
                  <p className="text-gray-700">{touristLocation}</p>
                </div>
                <hr />
                
                <hr />
                <div className="flex items-center mb-2 h-[30px]">
                  <i className="fa-solid fa-clock mr-2 text-gray-500"></i>
                  <p className="text-gray-700">24/7</p>
                </div>
                <hr />
                <div className="flex items-center h-[30px]">
                  {webname && (
                    <>
                      <i className="fa-solid fa-earth-americas text-gray-500"></i>
                      <p className="text-gray-700">
                        <a href={website} className="text-blue-600 ml-2">
                          {webname}
                        </a>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <div className="flex items-center">
              <Rating
                count={5}
                value={parseFloat(averageRating)}
                size={24}
                isHalf={true}
                edit={false}
                activeColor="#ffd700"
                color="#d1d5db"
              />
              <span className="ml-2 text-gray-700">{averageRating} / 5</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-700 text-lg">{renderDescription()}</p>
            <button onClick={toggleExpanded} className="text-blue-600 mt-2 hover:underline">
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          </div>
        </section>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700">Your Rating:</label>
              <Rating
                count={5}
                value={rating}
                onChange={handleRatingChange}
                size={30}
                activeColor="#ffd700"
                color="#d1d5db"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Review:</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Write your review here..."
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>

          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
            {reviews.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
                  <div className="flex flex-col mb-2">
                    <div className="flex items-center mb-2 font-semibold">
                      <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center mr-2">
                        {review.initial}
                      </span>
                      <span>{review.username}</span>
                    </div>
                    <Rating count={5} value={parseFloat(review.rating)} size={20} edit={false} activeColor="#ffd700" color="#d1d5db" />
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

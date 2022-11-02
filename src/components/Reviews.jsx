import { useEffect, useState } from "react";
import Review from "./Review";
import { getReviews } from "../utils/api";
import "../styles/Reviews.css";
export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      console.log("reviews data", reviews);
      setReviews(reviews);
    });
  }, []);
  return (
    <ul className="reviews-container">
      {reviews.map((review) => {
        return <Review key={review.review_id} review={review} />;
      })}
    </ul>
  );
}

import { useParams, Link } from "react-router-dom";
import ReviewPage from "./ReviewPage";

import "../styles/Review.css";

export default function ReviewCard(props) {
  const review = props.review;

  return (
    <li className="reviews-list">
      <Link to={`/reviews/${review.review_id}`}></Link>
      <img
        className="review-img"
        src={review.review_img_url}
        alt={review.review_img_url}
      ></img>
      <h3>Title: {review.title}</h3>
      <h3> Designer: {review.designer}</h3>
      <h3> Owner: {review.owner}</h3>
      <h3>Votes: {review.votes}</h3>
      <Link to={`/reviews/${review.review_id}`}>
        <button className="btn btn-outline-secondary m-5">Show Details</button>
      </Link>
    </li>
  );
}

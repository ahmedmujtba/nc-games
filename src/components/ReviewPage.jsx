import { useEffect, useState } from "react";
import { getSingleReview } from "../utils/api";
import { useParams } from "react-router-dom";

export default function ReviewPage() {
  const [singleReview, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    getSingleReview(review_id).then((review) => {
      console.log(review);
      setReview(review);
      setLoading(false);
    });
  }, [review_id]);
  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <section className="review-page">
        <h1>More about this review...</h1>
        <article>
          <img
            className="review-img"
            src={singleReview.review.review_img_url}
            alt={singleReview.review.review_img_url}
          ></img>
          <h3 className="boldANDunderlined">
            Title: {singleReview.review.title}
          </h3>
          <h3>Designer: {singleReview.review.designer}</h3>
          <h3>Owner: {singleReview.review.owner}</h3>
          <p>Review: {singleReview.review.review_body}</p>
          <p>Category: {singleReview.review.category}</p>
          <p>Created at: {singleReview.review.created_at}</p>
          <p>Votes: {singleReview.review.votes}</p>
          <button>Show Comments</button>
        </article>
      </section>
    );
  }
}

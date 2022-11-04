import { useEffect, useState } from "react";
import { getSingleReview } from "../utils/api";
import { useParams } from "react-router-dom";
import Votes from "./Votes";

export default function ReviewPage() {
  const [singleReview, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    getSingleReview(review_id).then((review) => {
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
          <h4>Review: {singleReview.review.review_body}</h4>
          <h4>Category: {singleReview.review.category}</h4>
          <time>Created at: {singleReview.review.created_at}</time>
          <Votes
            review_id={review_id}
            singleReview={singleReview}
            setReview={setReview}
          ></Votes>

          <button>Show Comments</button>
        </article>
      </section>
    );
  }
}

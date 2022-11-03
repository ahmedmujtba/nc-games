import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getReviews, getCategories, getReviewsByCategory } from "../utils/api";
import Review from "./Review";
import "../styles/Reviews.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  useEffect(() => {
    if (category) {
      getReviewsByCategory(category).then(({ reviews }) => {
        setReviews(reviews);
      });
    } else {
      getReviews().then(({ reviews }) => {
        setReviews(reviews);

        setLoading(false);
      });
    }

    getCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ul className="select-category">
        {categories.map((singleCategory) => {
          return (
            <Link to={`/categories/${singleCategory.slug}`}>
              <li value={singleCategory.slug}>{singleCategory.slug}</li>
            </Link>
          );
        })}
      </ul>

      <ul className="reviews-container">
        {reviews.map((review) => {
          return <Review key={review.review_id} review={review} />;
        })}
      </ul>
    </div>
  );
}

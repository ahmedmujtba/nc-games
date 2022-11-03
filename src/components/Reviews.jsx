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
  //for url - wrap category options in link tags, to = go to that specific url

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);

      setLoading(false);
    });

    getCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, []);

  const categoryHandler = (category) => {
    console.log(category);
    //on click - new fetch request to get reviews. set reviews with the return
    getReviewsByCategory(category).then(({ reviews }) => {
      console.log(reviews);
      setReviews(reviews);
    });
  };

  //   const getUpdatedReviews = () => {
  //     getReviews().then(({ reviews }) => {
  //       setReviews(reviews);
  //     });
  //   };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <ul className="select-category">
        {categories.map((singleCategory) => {
          return (
            <Link to={`/categories/${singleCategory.slug}`}>
              <li onClick={categoryHandler} value={singleCategory.slug}>
                {singleCategory.slug}
              </li>
            </Link>
          );
        })}
      </ul>
      {/* <label for="select-category"></label>
      <input
        className="btn btn-outline-secondary submit-btn"
        type="submit"
        value="Select By Category"
      ></input> */}

      {/* <button
        className="btn btn-outline-secondary m-5"
        onSubmit={() => {
          setCategories(allReviews);
        }}
      >
        Reset Reviews
      </button> */}

      <ul className="reviews-container">
        {reviews.map((review) => {
          return <Review key={review.review_id} review={review} />;
        })}
      </ul>
    </div>
  );
}

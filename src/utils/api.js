import axios from "axios";

const Url = "https://ahmeds-games-api.herokuapp.com";

export function getReviews() {
  return axios.get(`${Url}/api/reviews`).then((res) => {
    return res.data;
  });
}

export function getCategories() {
  return axios.get(`${Url}/api/categories`).then((res) => {
    return res.data;
  });
}

export function getReviewsByCategory(category) {
  return axios.get(`${Url}/api/reviews?category=${category}`).then((res) => {
    return res.data;
  });
}

export function getSingleReview(review_id) {
  return axios.get(`${Url}/api/reviews/${review_id}`).then((res) => {
    return res.data;
  });
}
export function patchVotes(review_id, vote) {
  console.log(vote);
  return axios.patch(`${Url}/api/reviews/${review_id}`, vote).then((res) => {
    console.log(res);
    return res.data;
  });
}

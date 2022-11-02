import axios from "axios";

const Url = "https://ahmeds-games-api.herokuapp.com";

export function getReviews() {
  return axios.get(`${Url}/api/reviews`).then((res) => {
    console.log(res.data);
    return res.data;
  });
}

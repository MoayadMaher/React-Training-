import axios from "axios";

const searchImage = async (term: string) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 2mn9rk02lhKE_iyYZhXC7VgsZICeQe3xfx6WkGdGXaY",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImage;

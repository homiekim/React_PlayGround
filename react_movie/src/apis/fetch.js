import qs from "qs";

const URL = "/api/v1/search/movie.json";

export const requestGetMovieList = async (name ,offset = 1,limit = 5) => {
  const query = qs.stringify({
    query: name,
    start: offset,
    display: limit,
  });

  console.log(query);

  const URI = `${URL}?${query}`;

  console.log(URI);

  const response = await fetch(URI, {
    headers: {
      "Content-Type": "plain/text",
      "X-Naver-Client-Id": process.env.REACT_APP_NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": process.env.REACT_APP_NAVER_CLIENT_SECRET,
    },
  });

  return await response.json();
};

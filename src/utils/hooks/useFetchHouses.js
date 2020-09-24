import { useState, useEffect } from "react";
import axios from "axios";
import axiosRetry from "axios-retry";

// (NOTE: daniel) handle API status 200 with empty response
axios.interceptors.response.use(
  (response) => {
    if (!response.data.length) {
      response.status = 500;
      response.statusText = "Service returned an empty response";

      return Promise.reject(response);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

const client = axios.create();

// (NOTE: daniel) when request fails, try 4 times before throwing an error
axiosRetry(client, {
  retries: 3,
  retryDelay: (retryCount) => {
    return retryCount * 500;
  },
});

const useFetchHouses = (pageNumber) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({ houses: [] });
  const [error, setError] = useState(false);

  const fetchHouses = async (page) => {
    try {
      setIsLoading(true);

      const response = await client.get(
        `http://app-homevision-staging.herokuapp.com/api_project/houses?page=${page}&per_page=12`
      );

      const results = response.data.houses;

      const newData = data.houses.concat(results);
      setData({ houses: newData });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line
    (async () => await fetchHouses(pageNumber))();
  }, [pageNumber]);

  return { isLoading, error, data };
};

export default useFetchHouses;

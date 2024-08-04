import { useEffect, useState } from "react";
import { axios } from "axios";
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const option = {
    method: "GET",
    url: ``,
    headers: "",
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(option);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("there is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return [data, isLoading, error, refetch];
};

export default useFetch;

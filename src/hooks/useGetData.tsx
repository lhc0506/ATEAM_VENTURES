import React, {useState, useEffect} from "react";
import axios from "axios";

interface IResponse {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: Array<string>;
  material: Array<string>;
  status: string;
}

export const useGetData = (url: string) => {
  const [response, setResponse] = useState<IResponse[]>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        setResponse(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err);
        setIsLoading(false);
      }
    };
    if (isLoading) {
      fetchData();
    }
  }, []);

  return { response, error, isLoading };
};

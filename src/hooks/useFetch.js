import { useEffect, useState } from "react";

export const useFetch = (ignoreFirstCall) => {
  const [loading, setLoading] = useState();
  const [response, setResponse] = useState();

  const request = async (url, method, body) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "get",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setLoading(false);

      const data = await response.json();

      setResponse(data);
    } catch (error) {
      throw new Error("Ocorreu um erro durante a requisição", error);
    }
  };

  return { loading, response, request };
};

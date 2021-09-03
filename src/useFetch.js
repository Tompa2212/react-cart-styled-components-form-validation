import { useEffect, useState, useCallback } from "react";

export const useFetch = (url) => {
  const [items, setItems] = useState([]);

  const getItems = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();

    setItems(data);
  }, [url]);

  useEffect(() => {
    getItems();
  }, [url, getItems]);

  return items;
};

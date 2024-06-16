import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";

export const useFetchGift = (category) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  const getImages = async(category) => {
    const gifs = await getGif(category);
    setImages(gifs);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages(category)

    return () => {
      // second
    }
  }, [])

  return{
    images,
    isLoading
  }
}
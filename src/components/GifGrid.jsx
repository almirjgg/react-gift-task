import { useFetchGift } from "../hooks/useFecthGift";
import { GifItem } from "./GifItem";
export const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGift(category)
  return (
    <>
      <h3>{category}</h3>
      {isLoading && (<h2>Cargando...</h2>)}
      <GifItem images={images}/>
    </>
  )
}
import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

  const [ categories, seTcategories ] = useState(['One Punch']);

  const handleAddCategory = (newValue) => {
    seTcategories([newValue, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewValue={handleAddCategory}/>
      {categories.map(category => <GifGrid category={category} key={category}/>)}
    </>
  );
};
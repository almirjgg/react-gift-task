import { useState } from "react"

export const AddCategory = ({onNewValue}) => {
  const [searchInput, setSearchInput] = useState('');

  const onInputChange = ({target}) => {
    setSearchInput(target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    const cleanInput = searchInput.trim()
    if(cleanInput.length <= 1) return;
    onNewValue(cleanInput);
    setSearchInput('');
  }
  return(
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="search gifs" value={searchInput} onChange={onInputChange}/>
    </form>
    )
}
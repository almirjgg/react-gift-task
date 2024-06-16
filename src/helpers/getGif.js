export const getGif= async(category) => {
  const API_KEY = 'fkhKyqzLnB8tClwzysqrJwIlMrZ2ZD0U'
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=3`
  const resp = await fetch(url)
  const {data} = await resp.json()

  const  gift = data.map((img)=>({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }))

  return gift;
}
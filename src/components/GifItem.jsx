export const GifItem = ({images}) => {
  return (
    <div className="card-grid">
      {
        images.map( ({id, title, url}) => (
          <div className="card" key={id}>
            <p>{title}</p>
            <img src={url} alt={title}/>
          </div>
        ))
      }
    </div>
  )
}
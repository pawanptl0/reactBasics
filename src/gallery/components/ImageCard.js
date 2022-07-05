import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="card" style={{width:'300px'}}>
    <img className="card-img-top" src={ image.webformatURL } alt="Card" />
    <div className="card-body">
      <h4 className="card-title">{ image.user }</h4>
      <p className="card-text">Views: { image.views}</p>
      <p className="card-text">Downloads: { image.downloads}</p>
      <p className="card-text">Likes: { image.likes }</p>
    </div>
    <div className="d-inline-flex p-3 text-dark m-2">
      { image.tags.split(',').map((tag, index) =>(
        <div className="p-2 bg-light" key={ index }>{ tag }</div>
      ))}
    </div>
  </div>
  )
}
export default ImageCard


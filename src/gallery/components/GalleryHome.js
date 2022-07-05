import React, { useState, useEffect } from 'react'
import ImageCard from './ImageCard'
import ImageSearch from './ImageSearch'
import axios from 'axios'

function GalleryHome() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  const imgApi = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`

  useEffect(() => {
    const getImages = async() => {
      try {
        const { data } = await axios.get(imgApi)
        if (data) {
          setImages(data.hits)
          setIsLoading(false)
        } else {
           setImages([])
        }
      } catch (error) {
        console.log('Error is=',error)
      }
    }
    getImages() 
  }, [term])

  const handleTerm = (val) =>{
    setTerm(val)
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col col-sm-4 col-md-4 col-lg-4">&nbsp;</div>
        <div className="col col-sm-4 col-md-4 col-lg-4">
          <ImageSearch onTextChange={ handleTerm }/>
        </div>
      </div>
      {!isLoading && images.length === 0 && <h1>No Image Found</h1>}
      <div className="d-flex flex-wrap flex-row justify-content-start">

      { isLoading ? <p>Loading...</p> : 
  images.map( image => (
    <ImageCard key={image.key} image={image} />
  ))
}
      </div>

    </div>
  );
}

export default GalleryHome

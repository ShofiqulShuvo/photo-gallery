import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [images, setImages] = useState([])
  const [selectedImagesId, setSelectedImagesId] = useState([])

  const url = 'https://pexelsdimasv1.p.rapidapi.com/v1/curated?per_page=15&page=1';
  const options = {
    method: 'GET',
    headers: {
      Authorization: 'oOZgMYs6067KP8FXncSbYMwnyzxJkNE1ZLFjNLBQiNtXLjB7dbp4c76d', /* goes into env variable */
      'X-RapidAPI-Key': '9297fea8a1mshd789ee9e3c02816p162c6ejsnfdb57fc08fe6',
      'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
    }
  };

  const fetchData = async (url, options) => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setImages(result)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect( () => {

    fetchData(url, options)
  }, [])

  // select check box
  const handleChange = (id) => {
    
    if(!selectedImagesId.some(prevId => prevId === id)) {
      setSelectedImagesId(prevIds => {
        return [...prevIds, id]
      });
    } else {
      setSelectedImagesId(prevIds => {
        return prevIds.filter(singleId => singleId !== id)
      });
    }

  }

  const handleDelete = () => {

    setImages(prevImages => {
      return prevImages.filter(image => selectedImagesId.includes(image.id))
    })
  }

  return (
    <>
    <div className='app-wraper'>

      <div className="header">
        Click on Image For Select
      </div>

      <div className="container">

        <button className='delete-btn' onClick={handleDelete}>
          delete selected
        </button>

        <div className='photo-gallery'>
          {images.length > 0 && (
            images.photos.map((photo) => {
              const { id, src } = photo

              return (
                <div key={id} className="photo-container">
                  <label className='select-input-lebel' htmlFor={`${id}`}>a</label>
                  <input id={`${id}`} className='select-input' type="checkbox" checked={selectedImagesId.includes(id)} onChange={() => handleChange(id)}  />
                  <img  src={src.landscape} />
                </div>
              )
            })

          )}
        </div>

      </div>
    </div>
    </>
  )
}

export default App

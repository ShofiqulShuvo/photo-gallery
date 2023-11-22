import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch';
import { options, url } from './api/api';
import Image from './components/Image';
import Button from './components/Button';
import InputGroupCheckBox from './components/InputGroupCheckBox';

function App() {

  const { isLoading, error, data } = useFetch(url, options);

  const [images, setImages] = useState([]);
  const [selectedImagesId, setSelectedImagesId] = useState([])

  useEffect(() => {
    if(data) {
      setImages(data.photos)
    }
  }, [data])

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


  // delete items
  const handleDelete = () => {

    if(images) {
      setImages(prevImages => {
        return prevImages.filter(img => !selectedImagesId.includes(img.id))
      })

      setSelectedImagesId([])
    }

  }


  // if loading
  if(isLoading) {
    return
  }

  // if error
  if(error) {
    console.log(error)
    return
  }

  return (
    <>
    <div className='app-wraper'>

      <div className="header">
        <div className="container">

          <p className='select-count'> 
            Total Selected: <span>{selectedImagesId.length}</span>
          </p>

          <Button btnText={"delete selected"} cssClass={'delete-btn'} submitEvent={handleDelete} /> 

        </div>
      </div>

      <main>
        <div className="container">


          <div className='photo-gallery'>
            {
              images.map((photo) => {
                const { id, src } = photo

                return (
                  <div key={id} className="photo-container">

                    <div className="bg-overlay"></div>

                    <InputGroupCheckBox inputGroupClass={'input-group'} labelClass={'select-input-lebel'} lebelText={""} inputId={`${id}`} inputClassName={'select-input'} checked={selectedImagesId.includes(id)} onChange={() => handleChange(id)}  />

                    <Image imgSrc={src.landscape} />
                  </div>
                )
              })

            }
          </div>

        </div>
      </main>
    </div>
    </>
  )
}

export default App

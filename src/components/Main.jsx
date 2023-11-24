import { useEffect,  useState } from "react";
import useFetch from "../hooks/useFetch";
import { options, url } from "../api/api";
import Button from "./Button";
import PhotoContainer from "./PhotoContainer";

function Main() {
  const { isLoading, error, data } = useFetch(url, options);

  const [images, setImages] = useState([]);
  const [selectedImagesId, setSelectedImagesId] = useState([]);


  useEffect(() => {
    if (data) {
      setImages(data.photos);
    }
  }, [data]);

  // select check box
  const handleChange = (id) => {
    if (!selectedImagesId.some((prevId) => prevId === id)) {
      setSelectedImagesId((prevIds) => {
        return [...prevIds, id];
      });
    } else {
      setSelectedImagesId((prevIds) => {
        return prevIds.filter((singleId) => singleId !== id);
      });
    }
  };

  // delete items
  const handleDelete = () => {
    if (images) {
      setImages((prevImages) => {
        return prevImages.filter((img) => !selectedImagesId.includes(img.id));
      });

      setSelectedImagesId([]);
    }
  };

  // handaling drag and drop function
  const handleDragDrop = (dragIndex, dropIndex) => {
    
    if(dragIndex === dropIndex) {
      return;
    }

    let allImages = images;

    allImages.splice(dropIndex, 0, allImages.splice(dragIndex, 1)[0]);

    setImages(() => [...allImages])

  };


  // if loading
  if (isLoading) {
    return;
  }

  // if error
  if (error) {
    console.log(`error: ${error}`);
    return;
  }

  return (
    <>
      <div className="app-wraper">
          <div className="header">
            <div className="container">
              {
                selectedImagesId.length ? (
                  <p className="select-count">
                    Total Selected: <span>{selectedImagesId.length}</span>
                  </p>
                ) : (
                  <p className="select-count">
                    Image Gallery
                  </p>
                )
              }

              {selectedImagesId.length? (<Button
                btnText={"delete selected"}
                cssClass={"delete-btn"}
                submitEvent={handleDelete}
              />) : null}
            </div>
          </div>

          <main>
            <div className="container">

              <div className="photo-gallery">

                {images.map((photo, index) => {
                  return (
                      <PhotoContainer key={photo.id} photo={photo} selectedImagesId={selectedImagesId.includes(photo.id)}  index={index} handleChange={handleChange} handleDragDrop={handleDragDrop} />
                  );
                })}

              </div>

            </div>
          </main>
      </div>
    </>
  );
}

export default Main;

/* eslint-disable react/prop-types */
import InputCheckBox from "./InputCheckBox";
import Image from "./Image";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";

const PhotoContainer = ({ selectedImagesId, photo, handleChange, index, handleDragDrop}) => {


    const ref = useRef(0)

    // for draging
    const [ {isDragging},drag] = useDrag({
        type: 'li',
        item: { index: index},
        isDragging: monitor =>  !!monitor.isDragging()
    })


    // for droping
    const [ , drop] = useDrop({
        accept: 'li',
        drop: (item) => {

            const dragIndex = item.index;
            const dropIndex = index;

            handleDragDrop(dragIndex, dropIndex)
        },
        
      })


    //   cause drag and drop elemen are same
      drop(drag(ref))

    //   chang opacity of if draging
    const opacity = isDragging ? .2 : 1;

  return (
    <>
      <div ref={ref} className="photo-container" style={{opacity: opacity}}>
        <InputCheckBox
          inputGroupClass={"input-group"}
          inputClassName={"select-input"}
          checked={selectedImagesId}
          onChange={() => handleChange(photo.id)}
        />

        <Image photoId={photo.id} imgSrc={photo.src.landscape} />
      </div>
    </>
  );
};

export default PhotoContainer;
